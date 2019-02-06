import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../components/app';
import createStore from '../store';

function renderHTML(html, preloadedState) {
  return `
      <!DOCTYPE html>
      <html>
        <head>  
          <title>React Server Side Rendering</title>
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="./main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
          <h1>### Server Rendering ###</h1>
          <div id="app">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            
            console.log("window is " + window);
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="./bundle.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    console.log(`window is ${window}`);
    const store = createStore();
    // This context object contains the results of the render
    const context = {};

    const app = (
      <App
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );

    const htmlString = renderToString(app);

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    const preloadedState = store.getState();

    res.send(renderHTML(htmlString, preloadedState));
  };
}
