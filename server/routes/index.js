import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

import path from 'path';
import fs from 'fs';
import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../../src/components/App';
import { promisify } from 'util';

// A simple helper function to prepare the HTML markup
// const prepHTML = (data, { html, head, body }) => {
const prepHTML = (data, { body }) => {
  // data = data.replace('<html lang="en">', `<html ${html}`);
  // data = data.replace('</head>', `${head}</head>`);
  data = data.replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  return data;
};

const router = new Router();

router.get('/', bodyParser(), async (ctx, next) => {
  // Load in our HTML file from our build
  const filePath = path.resolve(__dirname, '../../build/index.html');
  // const html = await fs.readFile(filePath, 'utf8', (err, htmlData) => {
  const htmlData = await promisify(fs.readFile)(filePath, 'utf8');
  // Render App in React
  const routeMarkup = renderToStaticMarkup(
    <StaticRouter location={ctx.url} context={{}}>
      <App />
    </StaticRouter>
  );
  const html = prepHTML(htmlData, {
    // html: helmet.htmlAttributes.toString(),
    // head: helmet.title.toString() + helmet.meta.toString() + helmet.link.toString(),
    body: routeMarkup
  });

  ctx.body = html;
});

export default router;
