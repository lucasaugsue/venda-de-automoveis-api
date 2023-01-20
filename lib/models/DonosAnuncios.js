import { Model } from "objection"

export class DonosAnuncios extends Model {
    static tableName = "donos_anuncios";
    static relationMappings = {
        donos: {
            relation: Model.BelongsToOneRelation,
            modelClass: require("./Donos").Donos,
            join: {
              from: "donos_anuncios.donos_id",
              to: "donos.id",
            },
        },
        anuncios: {
            relation: Model.BelongsToOneRelation,
            modelClass: require("./Anuncios").Anuncios,
            join: {
              from: "donos_anuncios.anuncios_id",
              to: "anuncios.id",
            },
        }
    }
}
