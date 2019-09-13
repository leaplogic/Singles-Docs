module.exports = {
    title: 'Craft Singles',
    description: 'Documentation for quick site spinup using Singles.',
    base: '/Singles-Docs/',
    themeConfig: {
        nav: [
            {
              text: 'Style Guide',
              link: '/styles/'
            },
            {
                text: 'Template Guide',
                link: '/templates/'
            }
        ],
        sidebar: {
            '/styles/': [
                '/styles/',
                {
                    title: 'Basics',
                    collapsable: false,
                    children: [
                        '/styles/utilities.md'
                    ]

                }
            ],
            '/templates/': [
                '/templates/',
                {
                    title: 'Page Content',
                    collapsable: false,
                    children: [
                        '/templates/text.md',
                        '/templates/callout.md',
                        '/templates/image.md',
                        '/templates/table.md',
                        '/templates/form.md',
                        '/templates/features.md',
                        '/templates/gallery.md',
                        '/templates/grid.md',
                        '/templates/accordion.md'
                    ]
                }
            ]
        }
    }
}