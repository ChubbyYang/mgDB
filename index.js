const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const goods=require('./mongodb/db.js');

const getGoods=require('./model/goods.js');

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

