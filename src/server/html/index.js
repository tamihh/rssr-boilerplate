import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import Routes from '../../common/routes/rootRoutes';
import { AppContainer } from 'react-hot-loader'

export default (req, store, context) => {
  const content = renderToString(
    <AppContainer>
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>
    </AppContainer>
  );

  const helmet = Helmet.renderStatic();

  return `
    <!DOCTYPE html>
    <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=320px, height=450px, initial-scale=1" />
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
					<script src="/bundle.js" defer></script>
					<script>window.__INITIAL_STATE__ = ${serialize(store.getState())}</script>
        </head>

        <body>
       		<div id="app">${content}</div>
        </body>
		</html>
	`;
};
