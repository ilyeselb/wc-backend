import Application from "@ioc:Adonis/Core/Application";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Match from "App/Models/Match";
import * as csv from "fast-csv";
import * as fs from "fs";

export default class MatchesController {
  public async upload({ request, response }: HttpContextContract) {
    const file = request.file("matchFile", {
      extnames: ["csv"],
    });
    if (!file) {
      response
        .status(400)
        .json({ msg: "file does not match the requirements" });
    }
    console.log("file exist", file);
    if (file) {
      await file.move(Application.tmpPath("../uploads"));
    }
    fs.createReadStream(Application.tmpPath("../uploads/" + file?.clientName))
      // pipe the parsed input into a csv formatter
      // Using the transform function from the formatting stream
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => console.error(error))
      .on("data", async (row) => await Match.create(row))
      .on("end", (rowCount: number) => console.log(`Parsed ${rowCount} rows`));
    response.status(200).json("ok");
  }
  public async delete() {
    try {
      //   Database.from("matches").select().delete();
      await Match.query().delete();

      return "deleted";
    } catch (error) {
      return error;
    }
  }
}
