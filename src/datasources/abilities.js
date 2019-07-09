import { DataSource } from "apollo-datasource";

class AbilitiesAPI extends DataSource {
  constructor(knex) {
    super();
    this.knex = knex;
  }

  async getAbilities() {
    return this.knex("abilities").join(
      "ability_prose",
      "abilities.id",
      "=",
      "ability_prose.ability_id"
    );
  }
}

export default AbilitiesAPI;
