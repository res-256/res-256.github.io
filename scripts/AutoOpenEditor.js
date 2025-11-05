let spawn = require('hexo-util/lib/spawn');

hexo.on('new', (data) => {
  spawn('E:/\Program Files/\Typora/\Typora.exe', [data.path]);
});
