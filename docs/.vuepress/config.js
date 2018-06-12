const fs = require('fs');
const base = process.env.GH ? '/vuepress/' : '/';
const basePath = './docs/';
const arrGenerate = files => {
  const arr = [''];
  files.forEach(function(file) {
    if (file === 'en') {
      return;
    }
    const fileName = file.replace('.md', '');
    if (fileName !== 'README') {
      arr.push(fileName);
    }
  });
  return arr;
};

const nav = [
  {
    text: 'css-secret',
    items: []
  },
  {
    text: 'codepen',
    link: '/codepen/'
  },
  {
    text: '30css',
    link: '/30css/'
  }
];
const sidebar = {};

const fileFn = () => {
  fs.readdir(basePath, function(err, files) {
    if (err) {
      return console.error(err);
    }

    files.forEach(function(file) {
      const navNotshow = ['.vuepress', 'README.md'];
      if (navNotshow.indexOf(file) !== -1) {
        return;
      }
      if (file.split('-').shift() !== 's') {
        const navNotshow = ['codepen', '30css'];
        if (navNotshow.indexOf(file) === -1) {
          nav[0].items.push({
            text: file.charAt(0).toUpperCase() + file.slice(1),
            link: `/${file}/`
          });
        }
      }
      fs.readdir(`${basePath}${file}`, function(err, files) {
        if (err) {
          return console.error(err);
        }
        sidebar[`/${file}/`] = [
          {
            title: file,
            collapsable: false,
            children: arrGenerate(files)
          }
        ];
      });
    });
  });
};

fileFn();
module.exports = {
  title: '📚 Css',
  description: 'css secrets',
  dest: 'vuepress',
  base,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `/logo.png`
      }
    ]
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
