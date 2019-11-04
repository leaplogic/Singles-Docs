module.exports = {
    title: 'Craft Singles',
    description: 'Documentation for quick site spinup using Singles.',
    base: '/',
    themeConfig: {
        logo: 'http://singles.leaplogic.com/uploads/ll-cheddar.png',
        nav: [
            {
              text: 'Home',
              link: '/'
            },
            {
                text: 'Installation',
                link: '/installation/'
            },
            {
                text: 'Core Concepts',
                items: [
                    { text: 'Styles', link: '/styles/' },
                    { text: 'Components', link: '/components/' },
                    { text: 'Templating', link: '/templates/' },
                    { text: 'Plugins', link: '/plugins/' },
                ]
            },
            {
                text: 'FAQ',
                items: [
                    { text: 'Singles v3 (latest)', link: '/faq/craft3/' },
                    { text: 'Singles v2', link: '/faq/craft2/' },
                ]
            },
            {
                text: 'More',
                items: [
                    { text: 'Docs Repo', link: 'https://github.com/leaplogic/singles-docs' },
                    { text: 'Singles Repo', link: 'https://github.com/leaplogic/singles/tree/v3' },
                    { text: 'Singles Demo', link: 'http://singles.leaplogic.com' },
                ]
            },
        ],
        sidebar: 'auto'
    }
}