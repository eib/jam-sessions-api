const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const compress = require('koa-compress');
const port = Number(process.env.PORT) || 5355;

const app = new Koa();
const router = new Router();

/** HTTP Routes */
router.get('/status', ctx => {
  ctx.body = 'OK';
});

/** Middleware */

app.use(compress());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(ctx => {
  ctx.body = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate tempus nisi quis aliquet. Duis 
  tristique dictum quam, vel commodo ante dictum et. Nam et dapibus libero. Sed dapibus, augue ut pharetra posuere, tortor 
  urna rhoncus nisi, quis luctus metus ipsum non est. Praesent auctor nisl ligula, sed iaculis nibh aliquet nec. Quisque 
  nec sapien ultricies, sodales ligula vel, vehicula purus. Pellentesque habitant morbi tristique senectus et netus et 
  malesuada fames ac turpis egestas. Proin eros dolor, rutrum id augue nec, volutpat mattis tortor. Donec viverra eros non 
  diam iaculis, eu tincidunt mi elementum. Donec quis ipsum sit amet quam dapibus pretium. Quisque congue felis eu orci 
  rhoncus, ac tincidunt est pellentesque. Phasellus dapibus leo erat, eu semper augue aliquet vitae. Nam porttitor nisi at 
  ex dapibus, id rutrum orci consequat. Sed tristique scelerisque magna at molestie.

  Fusce nec porttitor nisi, non sagittis neque. Nam urna ipsum, convallis id sagittis ut, sodales in arcu. In ac sapien 
  orci. Etiam in nunc ipsum. Fusce sed ante eu sapien tincidunt viverra vitae vitae ex. Mauris a imperdiet massa. Aenean 
  in tristique mi, vel faucibus lacus. Ut quis convallis mauris. Morbi facilisis leo semper eros ornare, vel commodo mi 
  pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque rhoncus 
  efficitur tempor. Cras condimentum libero vel mauris viverra vulputate. Vestibulum sit amet volutpat purus. Phasellus 
  sed lacus sed neque commodo eleifend ut ac tellus. Proin venenatis metus quis dui molestie imperdiet. Suspendisse 
  efficitur ullamcorper erat in rhoncus.

  Sed eget molestie metus, eget condimentum elit. Integer tristique imperdiet augue a feugiat. Quisque tempor metus orci, 
  id bibendum mi faucibus varius. Maecenas in nisl convallis, volutpat erat sed, varius odio. Cras non ipsum elit. Etiam 
  finibus scelerisque dui a cursus. Fusce sapien mi, congue nec erat sed, congue rhoncus quam. Ut tincidunt vel ante sit 
  amet tempor. Aliquam nec facilisis sapien. Phasellus sit amet tempor metus, id tristique metus. Sed id molestie turpis. 
  Nullam ut lacus dolor. Suspendisse mollis euismod nisi, nec volutpat nisl. Sed ut nulla sem. Curabitur magna felis, 
  lobortis et justo vehicula, finibus facilisis nulla. Etiam imperdiet sodales quam, in bibendum lorem efficitur non.

  Aliquam lobortis luctus sapien, sit amet venenatis ipsum feugiat at. Ut vitae tempus nulla. In vulputate ligula sit amet 
  ex porta mattis. Nullam tempor est nunc, vitae posuere nisi tempus id. Curabitur consectetur cursus eros, sed vehicula 
  elit laoreet tincidunt. Vestibulum nibh lacus, suscipit vitae dictum sed, dignissim ut magna. Duis sollicitudin nibh in 
  ultricies auctor. Sed egestas in turpis vel vehicula. Aliquam libero ante, volutpat placerat feugiat vel, malesuada a 
  tortor.

  Vestibulum ut dui lorem. Aliquam a sem et tellus tempor dignissim eget non lacus. Integer tincidunt ex nec velit 
  fermentum, in molestie metus aliquet. Mauris sit amet semper lectus. Fusce ut metus pharetra ante vulputate auctor at ac 
  augue. Nullam rhoncus felis vitae quam laoreet mollis. Etiam in nisl sed leo pulvinar porta. Maecenas a rutrum tellus. 
  Proin quam enim, lobortis porttitor odio non, pharetra maximus dolor. Maecenas feugiat quis quam vitae auctor. Fusce 
  pretium mauris vel est faucibus, in finibus metus euismod.`;
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
