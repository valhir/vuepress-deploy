module.exports = {
    locales: {
        '/': {
          lang: 'zh-CN',
        },
    },
    title: 'LeagueTavern',
    description: '使用手册',
    port: '80',
    head: [
        ['link', {rel: 'icon', href: 'logo.png'}]
    ],
    markdown: {
        lineNumbers: true
    },
    theme: 'antdocs',
    themeConfig: {
        logo: 'logo.png',
        sidebar: 'auto',
        nav: require("./nav.js"),
        nextLinks: true,
        prevLinks: true,
        docsRepo: 'valhir/vuepress-deploy',
        docsBranch: 'main/docs',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！',
        lastUpdated: '上次更新',
        smoothScroll: true,
    }
}