const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const port = Number(process.env.PORT) || 5355;

const app = new Koa();
const router = new Router();

/** HTTP Routes */
router.get('/status', ctx => {
  ctx.body = 'OK';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(ctx => {
  ctx.body = 'Hello, World!';
});

/** HTTP Server */

const server = http.createServer(app.callback());
server.listen(port, () => {
  console.log(`Listening on ${server.address().port}`);
});

/** Shutdown */

function stop() {
  console.log('Gracefully shutting down...');
  server.close();
  process.exit();
}
process.on('SIGINT', stop);
process.on('SIGTERM', stop);
