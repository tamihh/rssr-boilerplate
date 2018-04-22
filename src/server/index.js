import 'babel-polyfill'
import { matchRoutes } from 'react-router-config'
import Routes from '../common/routes/rootRoutes'
import Html from './html'
import createStore from '../common/store/createStore'
import App from '../common/components/containers/App/App';



// if (ENV === 'development') {


import clientConfig from '../../webpack/webpack.client'
import serverConfig from '../../webpack/webpack.server'
const publicPath = clientConfig.output.publicPath

import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
const multiCompiler = webpack([clientConfig, serverConfig])
import express from "express"
const app = express()

app.use(middleware(multiCompiler, { publicPath, stats: { colors: true } }))





app.get("*", (req, res) => {
  const store = createStore(req);

  const routes = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store.dispatch) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });


  Promise.all(routes).then(() => {
    const context = {};
    const content = Html(req, store, context);
    
    if (context.url)
      return res.redirect(301, context.url);

    if (context.notFound)
      res.status(404);

    res.send(content);
  })


})

if (!__PRODUCTION__ && module.hot) {
  console.log('[HMR] Waiting for server-side updates');
}

app.listen(3000, () => {
  console.log(`Server is listening on http://localhost:3000`)
})

