import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Match extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
  @column()
  public year: String;
  @column()
  public dateTime: String;
  @column()
  public date_time: String;
  @column()
  public stage: String;
  @column()
  public stadium: String;
  @column()
  public city: String;
  @column()
  public htn: String;
  @column()
  public htg: String;
  @column()
  public atg: String;
  @column()
  public atn: String;
  @column()
  public winConditions: String;
  @column()
  public win_conditions: String;
  @column()
  public attendance: String;
  @column()
  public hthg: String;
  @column()
  public htag: String;
  @column()
  public referee: String;
  @column()
  public assistant1: String;
  @column()
  public assistant2: String;
  @column()
  public roundId: String;
  @column()
  public round_id: String;
  @column()
  public matchId: String;
  @column()
  public match_id: String;
  
  @column()
  public hti: String;
  @column()
  public ati: String;

}
