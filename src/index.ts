import { detectOS } from './os-detection';

// 定义操作系统及其对应的下载链接的键名
type OSKeys = 'windowsUrl' | 'macosIntelUrl' | 'macosArmUrl';

/**
 * 定义包含不同操作系统下载链接的选项类型
 */
type DownloadOptions = Record<OSKeys, string>;

/**
 * 根据用户操作系统返回对应的下载链接
 * @param options - 包含不同操作系统下载链接的选项
 * @returns 返回适合当前操作系统的下载链接
 */
export function getDownloadUrl(options: DownloadOptions): string {
  const osKey = detectOS(navigator.userAgent);

  // 根据检测结果选择合适的下载链接
  switch (osKey) {
    case 'windows':
      return options['windowsUrl'];
    case 'macosIntel':
      return options['macosIntelUrl'];
    case 'macosArm':
      return options['macosArmUrl'];
    default:
      // 如果未识别到支持的操作系统，抛出错误
      throw new Error('不支持的操作系统或架构');
  }
}

/**
 * 触发下载行为的函数
 * @param url - 要下载的文件链接
 */
export function triggerDownload(url: string): void {
  const a = document.createElement('a');
  a.href = url;
  a.download = ''; // 强制浏览器下载
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/**
 * 根据用户操作系统进行文件下载的主函数
 * @param options - 包含不同操作系统下载链接的选项
 */
export function downloadByOS(options: DownloadOptions): void {
  try {
    const downloadUrl = getDownloadUrl(options);
    triggerDownload(downloadUrl);
  } catch (error) {
    alert(
      `检测到不支持的操作系统。请访问我们的网站获取适合您的版本下载链接。 ${(error as Error).message}`,
    );
  }
}
