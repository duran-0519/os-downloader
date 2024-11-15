import { SupportedOS } from "./type/enum";
import type { TNavigator } from "./type/type";

/**
 * Contains download URLs for different operating systems.
 */
type DownloadOptions = Partial<Record<SupportedOS, string>>;

/**
 * Returns the download URL suitable for the user's OS.
 * @param options - The available download URLs.
 * @returns The appropriate download URL.
 * @throws Will throw an error if no suitable URL is found.
 */
export async function getDownloadUrl(options: DownloadOptions): Promise<string> {
  const osKey = await detectMacOSArchitecture();

  const url = options[osKey];
  if (url) return url;

  throw new Error(
    `No download link provided for the detected operating system: ${osKey}.`,
  );
}

/**
 * Initiates a file download in the browser.
 * @param url - The file URL to download.
 */
export function triggerDownload(url: string): void {
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = ''; // Trigger browser's download behavior
  anchor.style.display = 'none';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

/**
 * Downloads a file based on the user's operating system.
 * @param options - The available download URLs.
 */
export async function downloadByOS(options: DownloadOptions): Promise<void> {
  try {
    const downloadUrl = await getDownloadUrl(options);
    triggerDownload(downloadUrl);
  } catch (error) {
    const errorMessage =
      `Your operating system is not supported or no download URL is available. ` +
      `Error: ${(error as Error).message}`;
    alert(errorMessage);
  }
}


export async function detectMacOSArchitecture(): Promise<SupportedOS> {
  const navigatorWithUAData = navigator as TNavigator;

  if (navigatorWithUAData.userAgentData && navigatorWithUAData.userAgentData.getHighEntropyValues) {
    const ua = await navigatorWithUAData.userAgentData.getHighEntropyValues([
      'architecture',
      'platform',
    ]);

    if (ua.platform === 'macOS') {
      return ua.architecture === 'arm' ? SupportedOS.MacOSArm : SupportedOS.MacOSIntel;
    } else if (ua.platform === 'Windows') {
      return SupportedOS.Windows;
    } else {
      return SupportedOS.Unsupported;
    }
  } else {
    throw new Error('navigator.userAgentData.getHighEntropyValues');
  }
}
