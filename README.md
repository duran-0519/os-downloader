[**English**](./README.md) | [简体中文](./README_zh.md)

# os-downloader

A TypeScript library for detecting the user's operating system and architecture, and triggering appropriate downloads based on the OS.

## Features

- Detects operating system and architecture from the user's environment.
- Supports Windows, macOS Intel, and macOS ARM architectures.
- Provides easy-to-use methods for fetching and triggering OS-specific downloads.

## Installation

You can install the package via npm:

```bash
npm install os-downloader
```

Or via Bun:

```bash
bun add os-downloader
```

## Usage

Here’s how you can use `os-downloader` in your project:

```typescript
import { downloadByOS } from 'os-downloader';

const downloadOptions = {
  windowsUrl: 'https://example.com/windows-installer.exe',
  macosIntelUrl: 'https://example.com/macos-intel.dmg',
  macosArmUrl: 'https://example.com/macos-arm.dmg',
};

downloadByOS(downloadOptions);
```

### Example in a React Project

```typescript
import React from 'react';
import { downloadByOS } from 'os-downloader';

const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    const downloadOptions = {
      windowsUrl: 'https://example.com/windows-installer.exe',
      macosIntelUrl: 'https://example.com/macos-intel.dmg',
      macosArmUrl: 'https://example.com/macos-arm.dmg',
    };

    downloadByOS(downloadOptions);
  };

  return <button onClick={handleDownload}>Download</button>;
};

export default DownloadButton;
```

## API Documentation

### `detectOS(userAgent: string): string`

- **Description**: Detects the user's operating system and architecture based on the provided `userAgent` string.
- **Parameters**: `userAgent: string`
- **Returns**: `string` - `'windows'`, `'macosIntel'`, `'macosArm'`
- **Throws**: If the OS or architecture is not recognized, an error is thrown.

### `getDownloadUrl(options: DownloadOptions): string`

- **Description**: Returns the appropriate download URL based on the detected OS.
- **Parameters**: `options: DownloadOptions`
- **Returns**: `string` - The download URL corresponding to the detected OS.
- **Throws**: If the OS is not supported, an error is thrown.

### `triggerDownload(url: string): void`

- **Description**: Programmatically triggers a download in the browser for the given URL.
- **Parameters**: `url: string`

### `downloadByOS(options: DownloadOptions): void`

- **Description**: Main function that detects the OS and triggers the appropriate download.
- **Parameters**: `options: DownloadOptions`

## Browser Compatibility

`os-downloader` relies on `getHighEntropyValues` to detect the OS and architecture. However, it is only supported on certain browsers:

- **Supported Browsers**:
  - Chrome (v90+), Edge (v90+), Opera (v76+)

- **Not Supported**:
  - Firefox, Safari, and other browsers do not support `getHighEntropyValues`.

If `getHighEntropyValues` is unsupported, the library will throw an error. You may handle the error or provide alternative download links for unsupported browsers.

### Example Handling Unsupported Browsers

```typescript
import { downloadByOS } from 'os-downloader';

async function initiateDownload() {
  try {
    await downloadByOS({
      windowsUrl: 'https://example.com/windows-installer.exe',
      macosIntelUrl: 'https://example.com/macos-intel.dmg',
      macosArmUrl: 'https://example.com/macos-arm.dmg',
    });
  } catch (error) {
    alert("Your browser is not supported. Please visit our website for download options.");
  }
}

initiateDownload();
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
