import * as Koa from "koa";

export async function get(ctx: Koa.Context, next: Function): Promise<void> {
    ctx.response.body = {
        results: [
            {
                title: "Hello World",
                content: "Welcome in a new world"
            }
        ],
        count: 1
    };
}

export async function post(ctx: Koa.Context, next: Function): Promise<void> {
    const data = ctx.request.body as { somePOSTValue: string };

    ctx.body = {
        data: data,
    };
}