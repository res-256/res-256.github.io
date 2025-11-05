console.log('自动备份脚本已加载');

const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

// 更安全的获取当前分支函数
async function getCurrentBranch() {
    try {
        const { stdout, stderr } = await execAsync('git rev-parse --abbrev-ref HEAD');
        
        if (stderr) {
            console.log('Git stderr:', stderr);
        }
        
        if (!stdout) {
            console.log('警告：无法获取当前分支，使用默认分支 "main"');
            return 'main';
        }
        
        const branch = stdout.toString().trim();
        
        if (!branch) {
            console.log('警告：获取到的分支名为空，使用默认分支 "main"');
            return 'main';
        }
        
        console.log('当前分支:', branch);
        return branch;
    } catch (error) {
        console.error('获取当前分支失败:', error.message);
        console.log('使用默认分支 "main"');
        return 'main';
    }
}

// 安全的命令执行函数
async function executeCommand(command, description) {
    try {
        console.log(description);
        const { stdout, stderr } = await execAsync(command);
        
        if (stdout) console.log(stdout);
        if (stderr) console.error('Stderr:', stderr);
        
        return true;
    } catch (error) {
        console.error(`执行命令失败: ${command}`, error.message);
        return false;
    }
}

// 主函数
async function run() {
    try {
        console.log('======================Auto Backup Begin===========================');
        
        // 等待10秒
        console.log('部署完成，等待10秒后开始备份...');
        await new Promise(resolve => setTimeout(resolve, 10000));
        
        // 获取当前分支
        const branch = await getCurrentBranch();
        if (!branch) {
            throw new Error('无法确定当前分支');
        }
        
        // 添加所有文件到暂存区
        const addSuccess = await executeCommand(
            'git add -A', 
            '添加所有文件到暂存区...'
        );
        
        if (!addSuccess) {
            throw new Error('添加文件到暂存区失败');
        }
        
        // 提交更改
        const commitMessage = `备份Hexo源文件: ${new Date().toISOString()}`;
        const commitSuccess = await executeCommand(
            `git commit -m "${commitMessage}"`, 
            '提交更改...'
        );
        
        if (!commitSuccess) {
            // 如果提交失败，可能是因为没有更改需要提交
            console.log('没有更改需要提交，跳过备份');
            return;
        }
        
        // 推送到远程仓库
        const pushSuccess = await executeCommand(
            `git push origin ${branch} --force`, 
            `推送到远程仓库 ${branch} 分支...`
        );
        
        if (!pushSuccess) {
            throw new Error('推送到远程仓库失败');
        }
        
        console.log('======================Auto Backup Complete========================');
    } catch (error) {
        console.error('自动备份过程中发生错误:', error.message);
        console.log('备份失败，但不会影响主部署流程');
    }
}

// 使用 deployAfter 事件
hexo.on('deployAfter', async function() {
    console.log('Hexo 部署完成，开始执行自动备份...');
    await run();
});

// 导出函数以便手动调用
module.exports = run;