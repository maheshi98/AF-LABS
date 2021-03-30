const Router = require('@koa/router');

const HomeRoutes = require('./routes/home.router');

const app = new Koa()

app.use(HomeRoutes.routes())
 .use(HomeRoutes.allowedMethods())

const router = new Router({
    prefix: '/home'
   });
   router.get('/', ctx => {
    ctx.body = 'Hello ';
   });
   router.post('/', ctx => {
    ctx.body = 'Hello ';
   });
   export default router;