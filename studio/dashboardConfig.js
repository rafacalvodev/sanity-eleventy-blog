export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '608c159718d8c02c3fa39264',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-hbezc6cn',
                  apiId: 'd9538820-06cc-4204-ba85-5b76f61e57c8'
                },
                {
                  buildHookId: '608c15972a6ac32b8ff216ac',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-v5ppg58s',
                  apiId: '99f4a079-35ea-4498-8467-46af1539bc38'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rafacalvodev/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-v5ppg58s.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
