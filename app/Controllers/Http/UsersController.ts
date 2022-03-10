import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import User from "App/Models/User";

export default class UsersController {
  public async store({ request, response }: HttpContextContract) {
    try {
      const newUserSchema = await schema.create({
        email: schema.string({}, [
          rules.email(),
          rules.unique({ table: "users", column: "email" }),
        ]),
        password: schema.string({}, [rules.confirmed()]),
      });
      console.log("validate", newUserSchema);

      const validate = await request.validate({
        schema: newUserSchema,
      });
      console.log("val", validate);
      const user = new User();
      user.email = validate.email;
      user.password = validate.password;
      await user.save(); //le problem est ici
      console.log(user.$isPersisted);
      return response.status(200).send(user);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  public async login({ request, auth, response }: HttpContextContract) {
    try {
      const email = request.input("email");
      const password = request.input("password");
      const token = await auth.attempt(email, password);
      return response.status(200).send(token);
    } catch (error) {
      return error;
    }
  }
}
