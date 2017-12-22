const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// static file
app.use(serve('public'));

// response
router.get('/', async (ctx, next) => {
  ctx.body = 'Hello Koa2';
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000,()=>{
  console.log('Server is Ready...');
});