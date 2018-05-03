import Koa from 'koa';
import serve from 'koa-static';
import router from './routes';
// import config from './config';

const app = new Koa();


app.use(router.routes()).use(router.allowedMethods());
// document
console.log(__dirname);
app.use(serve(`${__dirname}/../build`));

const port = process.env.PORT || config.port;
/* eslint-disable no-console */
app.listen(port, console.log(`listening on port ${port}`));

module.exports = app; // for testing
