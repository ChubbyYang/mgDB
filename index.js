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
router.get('/good', async (ctx, next) => {
  await getGoods(goods).then((data) => {
    ctx.body = data;
  });
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000,()=>{
  console.log('Server is Ready...');
});

