import { DataSource } from "apollo-datasource";

class PokemonTypesAPI extends DataSource {
    constructor(knex) {
        super();
        this.knex = knex;
    }

    async getTypes() {
        return this.knex("types");
    }
}

export default PokemonTypesAPI;