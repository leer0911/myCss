// 文件合并工具

const fs = require('fs');
const basePath = './docs/';

fs.readdir(basePath, function (err, files) {
  if (err) {
    return console.error(err);
  }

  files.forEach(function (file) {
    if (file === '.vuepress' || file === 'README.md') {
      return;
    }
    
    fs.readFile(`${basePath}${file}/README.md`, 'utf-8', function (err, data) {
      if (err) {
        console.log("error");
      } else {
        console.log(data);
        fs.writeFile('./wfile.txt', data, { flag: 'a', encoding: 'utf-8', mode: '0666' }, function (err) {
          if (err) {
            console.log("文件写入失败")
          } else {
            console.log("文件写入成功");
          }
        }) 
      }
    });
  });
});