module.exports = {

    title: 'CookApps',
    description: '기술블로그 by. Team Ninja',
    
    themeConfig: {
      nav: [
        { text: 'Devops', link: '/devops/git/overview.md' },
        { text: 'Infra', link: '/infra/trello/overview.md' },
        { text: 'Life', link: '/life/trello/overview.md' },
      ],
      sidebar: 
      {
        '/devops/':[
        {
          title: 'Git',
          collapsable: true,
          children: [
            [ '/devops/git/overview.md', 'Overview']
          ]
        },
        {
          title: 'Nas',
          collapsable: true,
          children: [ 
            [ '/devops/nas/overview.md', 'Overview']
          ]
        }
        ],


        '/infra/':[
        {
          title: 'Trello',
          collapsable: true,
          children: [
            [ '/infra/trello/overview.md', 'Overview']
          ]
        }
        ],


        '/life/':[
        {
          title: 'Trello',
          collapsable: true,
          children: [
            [ '/life/tmp/overview.md', 'Overview']
          ]
        }
        ]
    }
  }
}
