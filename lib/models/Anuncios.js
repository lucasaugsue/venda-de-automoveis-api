import { Model } from "objection"

export class Anuncios extends Model {
    static tableName = "anuncios";
    static relationMappings = {
        donos_anuncios: {
            relation: Model.HasManyRelation,
            modelClass: require("./DonosAnuncios").DonosAnuncios,
            join: {
              from: "anuncios.id",
              to: "donos_anuncios.anuncios_id",
            },
        }
    }
}
