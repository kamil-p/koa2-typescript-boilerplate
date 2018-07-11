import Router from "koa-router";
import * as testController from "../controller/testController";
import bodyParser from "koa-bodyparser";

const router = new Router();

router.get("/api/test", testController.get);
router.post("/api/getData", bodyParser(), testController.post);

export default router;