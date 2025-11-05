require('shelljs/global');

try {
    hexo.on('deployAfter', function() {
        // 等待10秒，确保hexo部署完全结束
        echo('部署完成，等待10秒后开始备份...');
        exec('sleep 10 /nobreak > nul'); // Windows 等待命令
        
        run();
    });
} catch (e) {
    console.log("产生了一个错误<(￣3￣)> !，错误详情为：" + e.toString());
}

function run() {
    if (!which('git')) {
        echo('Sorry, this script requires git');
        exit(1);
    } else {
        echo("======================开始备份===========================");
        cd('E:/Res-256/Hexo');
        
        // 检查Git进程是否完全结束
        if (exec('git status').code !== 0) {
            echo('Git仓库被锁定，等待5秒...');
            exec('timeout /t 5 /nobreak > nul');
        }
        
        // 检查远程仓库
        if (exec('git remote get-url origin').code !== 0) {
            echo('未配置远程仓库，正在设置...');
            if (exec('git remote add origin https://github.com/res-256/res-256.github.io.git').code !== 0) {
                echo('错误: 设置远程仓库失败');
                exit(1);
            }
        }
        
        // 确保在main分支（源文件分支）
        if (exec('git checkout main').code !== 0) {
            echo('切换到main分支失败，尝试创建main分支...');
            exec('git checkout -b main');
        }
        
        // 添加源文件（排除public目录）
        exec('git add -A');
        exec('git reset -- public/'); // 排除public目录
        
        // 提交更改
        if (exec('git commit -m "备份Hexo源文件"').code !== 0) {
            echo('没有源文件更改需要备份');
        } else {
            // 推送到main分支
            echo('推送源文件到main分支...');
            if (exec('git push -u origin main').code !== 0) {
                echo('错误: 源文件推送失败');
                exit(1);
            }
            echo('源文件已备份到main分支');
        }
        
        // 切换回master分支（用于下次部署）
        exec('git checkout master');
        
        echo("==================备份完成============================");
    }
}