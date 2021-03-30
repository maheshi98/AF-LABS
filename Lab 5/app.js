const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
bodyParser = require('koa-bodyparser')

const app = new Koa();

app.use(bodyParser());

app.use(ctx => {
 ctx.body = 'Hello ';
});

app.listen(3000 , err =>{
    if(err){
        console.log(err);
        return
    }
    console.log('Application is running on port 3000');
});
