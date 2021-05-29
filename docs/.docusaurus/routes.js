
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','1e7'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','962'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','01b'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','b20'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','dcc'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','558'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','6a1'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','e18'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','e74'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','c8b'),
  
  routes: [
{
  path: '/docs/create-a-form/invite-bot',
  component: ComponentCreator('/docs/create-a-form/invite-bot','8be'),
  exact: true,
},
{
  path: '/docs/create-a-form/set-fields',
  component: ComponentCreator('/docs/create-a-form/set-fields','263'),
  exact: true,
},
{
  path: '/docs/external-resources/bot-resources',
  component: ComponentCreator('/docs/external-resources/bot-resources','b80'),
  exact: true,
},
{
  path: '/docs/Local Setup',
  component: ComponentCreator('/docs/Local Setup','0d5'),
  exact: true,
},
{
  path: '/docs/tutorial-extras/manage-docs-versions',
  component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions','d64'),
  exact: true,
},
{
  path: '/docs/tutorial-extras/translate-your-site',
  component: ComponentCreator('/docs/tutorial-extras/translate-your-site','16a'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
