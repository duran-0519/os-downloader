
[English](./README.md) | [**简体中文**](./README_zh.md)

# os-downloader

一个用于检测用户操作系统及其架构，并根据操作系统触发相应下载的 TypeScript 库。

## 特点

- 从用户环境中检测操作系统和架构。
- 支持 Windows、macOS Intel 和 macOS ARM 架构。
- 提供易于使用的方法来获取和触发操作系统特定的下载。

## 安装

你可以通过 npm 安装这个包：

```bash
npm install os-downloader
```

或者通过 Bun 安装：

```bash
bun add os-downloader
```

## 使用方法

以下是如何在项目中使用 `os-downloader`：

```typescript
import { downloadByOS } from 'os-downloader';

const downloadOptions = {
  windowsUrl: 'https://example.com/windows-installer.exe',
  macosIntelUrl: 'https://example.com/macos-intel.dmg',
  macosArmUrl: 'https://example.com/macos-arm.dmg',
};

downloadByOS(downloadOptions);
```

### 在 React 项目中的示例

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

  return <button onClick={handleDownload}>下载</button>;
};

export default DownloadButton;
```

## API 文档

### `detectOS(userAgent: string): string`

- **描述**: 根据提供的 `userAgent` 字符串检测用户的操作系统和架构。
- **参数**: `userAgent: string`
- **返回值**: `string` - `'windows'`, `'macosIntel'`, `'macosArm'`
- **抛出异常**: 如果操作系统或架构无法识别，将抛出错误。

### `getDownloadUrl(options: DownloadOptions): string`

- **描述**: 根据检测到的操作系统返回合适的下载链接。
- **参数**: `options: DownloadOptions`
- **返回值**: `string` - 与检测到的操作系统对应的下载链接。
- **抛出异常**: 如果不支持检测到的操作系统，将抛出错误。

### `triggerDownload(url: string): void`

- **描述**: 在浏览器中为给定的 URL 以编程方式触发下载。
- **参数**: `url: string`

### `downloadByOS(options: DownloadOptions): void`

- **描述**: 检测操作系统并触发相应下载的主函数。
- **参数**: `options: DownloadOptions`

## 浏览器兼容性

`os-downloader` 依赖 `getHighEntropyValues` 方法来检测操作系统和架构。此方法仅在特定浏览器中受支持：

- **支持的浏览器**:
  - Chrome (v90+), Edge (v90+), Opera (v76+)

- **不支持**:
  - Firefox、Safari 等浏览器不支持 `getHighEntropyValues`。

如果 `getHighEntropyValues` 不受支持，库将抛出错误。你可以处理该错误，或为不支持的浏览器提供备用下载链接。

### 处理不支持的浏览器的示例

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
    alert("您的浏览器不支持此功能。请访问我们的网站以获取下载选项。");
  }
}

initiateDownload();
```

## 许可证

该项目使用 MIT 许可证 - 详细信息请参阅 [LICENSE](LICENSE) 文件。
