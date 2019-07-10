import { DataSource } from "apollo-datasource";

class PokemonTypesAPI extends DataSource {
  constructor(knex) {
    super();
    this.knex = knex;
  }

  async getTypes() {
    try {
      return this.knex("types");
    } catch (e) {
      console.error(e);
    }
  }
}

export default PokemonTypesAPI;
