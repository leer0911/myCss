const fs = require('fs');
const base = process.env.GH ? '/vuepress/' : '/';
const basePath = './docs/';
const arrGenerate = files => {
  const arr = [''];
  files.forEach(function (file) {
    if (file === 'en') {
      return
    }
    const fileName = file.replace('.md', '');
    if (fileName !== 'README') {
      arr.push(fileName);
    }
  });
  return arr;
};

const nav = [];
const sidebar = {};

fs.readdir(basePath, function (err, files) {
  if (err) {
    return console.error(err);
  }

  files.forEach(function (file) {
    if (file === '.vuepress' || file === 'README.md') {
      return;
    }
    if (file.split('-').shift() !== 's') {
      nav.push({
        text: file.charAt(0).toUpperCase() + file.slice(1),
        link: `/${file}/`
      });
    }
    fs.readdir(`${basePath}${file}`, function (err, files) {
      if (err) {
        return console.error(err);
      }
      sidebar[`/${file}/`] = [{
        title: file,
        collapsable: false,
        children: arrGenerate(files)
      }];
    });
  });
});
module.exports = {
  title: '📚 Css',
  description: 'css secrets',
  dest: 'vuepress',
  base,
  head: [
    ['link', {
      rel: 'icon',
      href: `/logo.png`
    }]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'leer0911/myCss',
    editLinks: true,
    docsDir: 'docs',
    nav,
    sidebar
  }
};