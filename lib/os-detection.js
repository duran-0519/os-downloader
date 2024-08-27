/**
 * 检测用户操作系统及其架构
 * @param userAgent - 浏览器的 User-Agent 字符串
 * @returns 返回检测到的操作系统和架构类型
 */
export function detectOS(userAgent) {
    userAgent = userAgent.toLowerCase();
    if (userAgent.includes('win')) {
        return 'windows';
    }
    else if (userAgent.includes('mac')) {
        if (userAgent.includes('intel')) {
            return 'macosIntel';
        }
        else if (userAgent.includes('arm') || userAgent.includes('applewebkit')) {
            return 'macosArm';
        }
    }
    // 如果无法识别操作系统或架构，抛出错误
    throw new Error('不支持的操作系统或架构');
}
