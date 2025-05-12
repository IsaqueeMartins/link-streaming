
export default {
  basePath: 'https://isaqueemartins.github.io/link-streaming',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
