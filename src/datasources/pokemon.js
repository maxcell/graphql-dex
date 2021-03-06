import { DataSource } from "apollo-datasource";

class PokemonAPI extends DataSource {
  constructor(knex) {
    super();
    this.knex = knex;
  }

  async getPokemonByName(name) {
    return this.knex("pokemons")
      .first()
      .where("name", name.toLowerCase());
  }

  async getPokemonByTypes(firstTypeName, secondTypeName) {
    let typeQuery = this.knex("pokemons")
      .select("pokemons.*")
      .join("pokemon_types", "pokemons.id", "=", "pokemon_types.pokemon_id")
      .join("types", "pokemon_types.type_id", "=", "types.id")
      .where("types.name", firstTypeName.toLowerCase());

    if (secondTypeName !== undefined) {
      typeQuery = typeQuery
        .orWhere("types.name", secondTypeName.toLowerCase())
        .groupBy("pokemons.id")
        .havingRaw("count(*) = ?", [2]);
    }

    return typeQuery.orderBy("pokemons.id");
  }

  async getTypesForPokemon(pokemonId) {
    return this.knex("types")
      .select("types.*")
      .join("pokemon_types", "types.id", "=", "pokemon_types.type_id")
      .join("pokemons", "pokemon_types.pokemon_id", "=", "pokemons.id")
      .where("pokemons.id", pokemonId)
      .orderBy("pokemon_types.slot");
  }

  async getPokemonByAbility(abilityName) {
    return this.knex("pokemons")
      .select("pokemons.*")
      .join(
        "pokemon_abilities",
        "pokemons.id",
        "=",
        "pokemon_abilities.pokemon_id"
      )
      .join("abilities", "pokemon_abilities.ability_id", "=", "abilities.id")
      .where("abilities.name", abilityName.toLowerCase());
  }

  async getAbilitiesForPokemon(pokemonId) {
    return this.knex("abilities")
      .select("abilities.*")
      .select("ability_prose.*")
      .join("ability_prose", "abilities.id", "=", "ability_prose.ability_id")
      .join(
        "pokemon_abilities",
        "abilities.id",
        "=",
        "pokemon_abilities.ability_id"
      )
      .join("pokemons", "pokemon_abilities.pokemon_id", "=", "pokemons.id")
      .where("pokemons.id", pokemonId)
      .orderBy("pokemon_abilities.slot");
  }

  async getPokemons(limit, after) {
    let limitToUse = limit || 50

    let pokemonQuery = this.knex("pokemons")
      .select("*")
      .where("is_default", "1")

    if (after !== undefined) {
      pokemonQuery = pokemonQuery
        .where("id", ">", after)
    }

    return pokemonQuery
      .limit(limitToUse)
      .then((pokemon) => this.buildPokemonConnection(pokemon))
  }

  /**
   * Builds a pokemon connection object given a list of pokemon, by fetching for the max possible
   * ID and determining if we have more data.
   */
  async buildPokemonConnection(pokemon) {
    return this.knex("pokemons")
      .where("is_default", "1")
      .max("id")
      .first()
      .then(function (maxRow) {
        let after = (pokemon.length > 0 ? pokemon[pokemon.length - 1].id : "")
        let hasMore = after !== maxRow.max

        let pageInfo = {
          after: after,
          hasMore: hasMore
        }

        return {
          data: pokemon,
          pageInfo: pageInfo
        }
      })
  }
}

export default PokemonAPI;
