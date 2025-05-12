
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://isaqueemartins.github.io/link-streaming/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/link-streaming"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 743, hash: 'a25c316963a4782595a6e0d9945836a0ce4bfb65d85a3e3529ef42fc88a0f9ff', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1057, hash: '7eed6f8369db2f2b2233932ac03a4d27e0ef2dcde7a750a25235841dcd1b8de6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4256, hash: '03235b2f5f9e4fe534f9e9fd33163f1c0f6553977628561056c939069ad5d05a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-P4NWQHPI.css': {size: 18529, hash: 'zvfw8z8N/9w', text: () => import('./assets-chunks/styles-P4NWQHPI_css.mjs').then(m => m.default)}
  },
};
