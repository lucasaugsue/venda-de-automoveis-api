import { Model } from "objection"

export class Donos extends Model {
    static tableName = "donos";
    static relationMappings = {
        donos_anuncios: {
            relation: Model.HasManyRelation,
            modelClass: require("./DonosAnuncios").DonosAnuncios,
            join: {
              from: "donos.id",
              to: "donos_anuncios.donos_id",
            },
        }
    }
}
