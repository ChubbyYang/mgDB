const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');

const db=require('./mongodb/db.js');
const goods=require('./mongodb/goods.js');
const getGoods=require('./model/goods.js');

const app = new Koa();
const router = new Router();

// static file
app.use(serve('public'));

// response
router.get('/', async (ctx, next) => {
  await next();
  await getGoods(goods).then((data) => {
    ctx.body = data;
  });
});

app.use(router.routes()).use(router.allowedMethods());

const port = 3000;
const hostname = '127.0.0.1';
app.listen(port,hostname,()=>{
  console.log(`\nServer is running at port:${port}`);
  console.log(`url: http://${hostname}:${port}`);
});

