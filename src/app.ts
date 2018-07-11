import Koa from "koa";
import bodyParser from "koa-bodyparser";
import router from "./module/router";

const app = new Koa();


app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(8081, () => {
    console.log(`Server started on ${8081}`);
});