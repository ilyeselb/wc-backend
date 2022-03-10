/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import { HttpContext } from "@adonisjs/http-server/build/standalone";
import Route from "@ioc:Adonis/Core/Route";



Route.group(() => {
  Route.get("/", async ({ request }: HttpContext) => {
    return { hello: request };
  });
  Route.post("/upload", "MatchesController.upload").middleware("auth");
  Route.delete("/delete", "MatchesController.delete");

  Route.post("/register", "UsersController.store");

  Route.post("/login", "UsersController.login");
}).prefix("/api");
