import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Matches extends BaseSchema {
  protected tableName = "matches";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("year");
      table.string("date_time");
      table.string("stage");
      table.string("stadium");
      table.string("city");
      table.string("htn");
      table.string("htg");
      table.string("atg");
      table.string("atn");
      table.string("win_conditions");
      table.string("attendance");
      table.string("hthg");
      table.string("htag");
      table.string("referee");
      table.string("assistant1");
      table.string("assistant2");
      table.string("roundId");
      table.string("round_id");
      table.string("match_id");
      table.string("hti");
      table.string("ati");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
