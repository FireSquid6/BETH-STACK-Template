import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";

import { Home } from "./components/templates/home";

import "@kitajs/html/register";

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .get("/", () => <Home />)

  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
