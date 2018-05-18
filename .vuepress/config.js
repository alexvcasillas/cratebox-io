module.exports = {
  title: 'Cratebox',
  description: 'State Management Library',
  algolia: {
    apiKey: '6e016e76c5e513c018dd0cb1ded997c8',
    indexName: 'cratebox-io'
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Open Source',
        items: [
          {
            text: 'Cratebox',
            link: 'https://github.com/alexvcasillas/cratebox'
          },
          {
            text: 'Cratebox React',
            link: 'https://github.com/alexvcasillas/cratebox-react'
          },
          {
            text: 'Animated Styled Components',
            link: 'https://github.com/alexvcasillas/animated-styled-components'
          },
          {
            text: 'React MobX State Tree',
            link: 'https://github.com/alexvcasillas/react-mobx-state-tree'
          },
          {
            text: 'React MobX Router + i18n',
            link: 'https://github.com/alexvcasillas/react-mobx-router'
          }
        ]
      },
      { text: 'Github', link: 'https://github.com/alexvcasillas' }
    ],
    sidebar: [
      {
        title: 'Documentation',
        collapsable: false,
        children: [
          ['/cratebox', 'Cratebox'],
          ['/cratebox-react', 'Cratebox React']
        ]
      }
    ]
  }
};
