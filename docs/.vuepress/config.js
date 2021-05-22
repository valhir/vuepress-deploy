module.exports = {
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
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
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！',
        lastUpdated: '上次更新',
        smoothScroll: true,
    }
}