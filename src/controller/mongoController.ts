import * as Koa from "koa";
import { default as Example, ExampleModel } from "../model/default/Example";

export async function save(ctx: Koa.Context, next: Function): Promise<void> {
  const example = new Example({ name: "Example" });

  example.save();

  ctx.response.body = {
    results: "Data saved"
  };
}