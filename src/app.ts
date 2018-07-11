import Koa from "koa";
import bodyParser from "koa-bodyparser";
import router from "./module/router";
import config from "./config/config";
import * as mongo from "./module/mongo";

const app = new Koa();

mongo.init();

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(config.port, () => {
    console.log(`Server started on ${config.port}`);
});