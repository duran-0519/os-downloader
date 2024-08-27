
# os-downloader

A TypeScript library for detecting the user's operating system and architecture, and triggering appropriate downloads based on the OS.

一个用于检测用户操作系统及其架构，并根据操作系统触发相应下载的 TypeScript 库。

## Features | 特点

- Detects operating system and architecture from the user's environment.
- Supports Windows, macOS Intel, and macOS ARM architectures.
- Provides easy-to-use methods for fetching and triggering OS-specific downloads.

- 从用户环境中检测操作系统和架构。
- 支持 Windows、macOS Intel 和 macOS ARM 架构。
- 提供易于使用的方法来获取和触发操作系统特定的下载。

## Installation | 安装

You can install the package via npm:

你可以通过 npm 安装这个包：

```bash
npm install os-downloader
```

Or via Bun:

或者通过 Bun 安装：

```bash
bun add os-downloader
```

## Usage | 使用方法

Here’s how you can use `os-downloader` in your project:

以下是如何在项目中使用 `os-downloader`：

```typescript
import { downloadByOS } from 'os-downloader';

// Define download URLs for each operating system
const downloadOptions = {
  windowsUrl: 'https://example.com/windows-installer.exe',
  macosIntelUrl: 'https://example.com/macos-intel.dmg',
  macosArmUrl: 'https://example.com/macos-arm.dmg',
};

// Trigger the download based on the user's OS
downloadByOS(downloadOptions);
```

### Example in a React Project | 在 React 项目中的示例

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

## API Documentation | API 文档

### `detectOS(userAgent: string): string`

- **Description**: Detects the user's operating system and architecture based on the provided `userAgent` string.
- **Parameters**:
  - `userAgent: string` - The user-agent string typically obtained from `navigator.userAgent`.
- **Returns**: `string` - Returns one of the following:
  - `'windows'`
  - `'macosIntel'`
  - `'macosArm'`
- **Throws**: If the OS or architecture is not recognized, an error is thrown.

- **描述**: 根据提供的 `userAgent` 字符串检测用户的操作系统和架构。
- **参数**:
  - `userAgent: string` - 通常从 `navigator.userAgent` 获取的用户代理字符串。
- **返回值**: `string` - 返回以下之一：
  - `'windows'`
  - `'macosIntel'`
  - `'macosArm'`
- **抛出异常**: 如果操作系统或架构无法识别，将抛出错误。

### `getDownloadUrl(options: DownloadOptions): string`

- **Description**: Returns the appropriate download URL based on the detected OS.
- **Parameters**:
  - `options: DownloadOptions` - An object containing download URLs for each supported OS.
- **Returns**: `string` - The download URL corresponding to the detected OS.
- **Throws**: If the OS is not supported, an error is thrown.

- **描述**: 根据检测到的操作系统返回合适的下载链接。
- **参数**:
  - `options: DownloadOptions` - 包含每个支持的操作系统下载链接的对象。
- **返回值**: `string` - 与检测到的操作系统对应的下载链接。
- **抛出异常**: 如果不支持检测到的操作系统，将抛出错误。

### `triggerDownload(url: string): void`

- **Description**: Programmatically triggers a download in the browser for the given URL.
- **Parameters**:
  - `url: string` - The URL of the file to be downloaded.

- **描述**: 在浏览器中为给定的 URL 以编程方式触发下载。
- **参数**:
  - `url: string` - 要下载的文件链接。

### `downloadByOS(options: DownloadOptions): void`

- **Description**: Main function that detects the OS and triggers the appropriate download.
- **Parameters**:
  - `options: DownloadOptions` - An object containing download URLs for each supported OS.

- **描述**: 检测操作系统并触发相应下载的主函数。
- **参数**:
  - `options: DownloadOptions` - 包含每个支持的操作系统下载链接的对象。

## Error Handling | 错误处理

If the user's operating system is not supported, the `downloadByOS` function will catch the error and display an alert message. You can customize this message as needed.

如果不支持用户的操作系统，`downloadByOS` 函数将捕获错误并显示一个警告消息。你可以根据需要自定义此消息。

## License | 许可证

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

该项目使用 MIT 许可证 - 详细信息请参阅 [LICENSE](LICENSE) 文件。

## Author | 作者

Created by [ran](https://github.com/duran-0519).

由 [ran](https://github.com/duran-0519) 创建。

## Contributing | 贡献

Contributions are welcome! Please feel free to submit a pull request or open an issue.

欢迎贡献！请随时提交拉取请求或打开问题。

## Changelog | 更新日志

All notable changes to this project will be documented in the [CHANGELOG](CHANGELOG.md).

此项目的所有显著更改都将记录在 [CHANGELOG](CHANGELOG.md) 中。

## Questions or Feedback? | 问题或反馈？

If you have any questions or feedback, please open an issue in the repository or reach out via [email](mailto:2212364202@qq.com).

如果有任何问题或反馈，请在仓库中打开问题或通过 [email](mailto:2212364202@qq.com) 联系我们。
