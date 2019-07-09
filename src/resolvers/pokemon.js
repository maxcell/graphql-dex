import knex from "knex";
import config from "../../knexfile";

const dbConn = knex(config);

export default {
    Pokemon: {
        types(pokemon) {
            return dbConn("types")
                .select("types.*")
                .join("pokemon_types", "types.id", "=", "pokemon_types.type_id")
                .join("pokemons", "pokemon_types.pokemon_id", "=", "pokemons.id")
                .where("pokemons.id", pokemon.id)
                .orderBy("pokemon_types.slot")
        }
    }
}