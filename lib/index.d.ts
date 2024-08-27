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
export declare function getDownloadUrl(options: DownloadOptions): string;
/**
 * 触发下载行为的函数
 * @param url - 要下载的文件链接
 */
export declare function triggerDownload(url: string): void;
/**
 * 根据用户操作系统进行文件下载的主函数
 * @param options - 包含不同操作系统下载链接的选项
 */
export declare function downloadByOS(options: DownloadOptions): void;
export {};
//# sourceMappingURL=index.d.ts.map