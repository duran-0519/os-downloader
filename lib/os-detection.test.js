/* eslint-disable no-console */
import { detectOS } from './os-detection';
import { strict as assert } from 'assert';
// Windows 系统检测
console.log('正在检测 Windows 系统...');
const userAgentWindows = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)';
assert.equal(detectOS(userAgentWindows), 'windows', '检测到的系统应为 windows');
console.log('Windows 系统检测通过');
// macOS Intel 架构检测
console.log('正在检测 macOS Intel 架构...');
const userAgentMacIntel = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)';
assert.equal(detectOS(userAgentMacIntel), 'macosIntel', '检测到的系统应为 macosIntel');
console.log('macOS Intel 架构检测通过');
// macOS ARM 架构检测
console.log('正在检测 macOS ARM 架构...');
const userAgentMacArm = 'Mozilla/5.0 (Macintosh; AppleWebKit/605.1.15 (KHTML, like Gecko))';
assert.equal(detectOS(userAgentMacArm), 'macosArm', '检测到的系统应为 macosArm');
console.log('macOS ARM 架构检测通过');
// 抛出错误的测试：不支持的操作系统
console.log('正在测试不支持的操作系统...');
try {
    const userAgentUnsupported = 'Mozilla/5.0 (Linux; U; Android 4.0.3)';
    detectOS(userAgentUnsupported);
    assert.fail('此代码应抛出错误，但没有抛出');
}
catch (error) {
    assert.equal(error.message, '不支持的操作系统或架构', '应抛出不支持的操作系统错误');
    console.log(error.message);
}
console.log('所有测试通过！');
