# GraphQL DEX

A GraphQL fun side project made by [Adam McNeilly][adam] and [Prince Wilson][prince].

The goal of the project was to learn about how GraphQL works as well as create something fun for everyone!

### Getting Started

To begin this project you will want to make sure you install all the depedencies:

```bash
// If needed
brew install yarn

yarn install
```

Take a gander at the `package.json` if you're curious of the dependencies. Before you are ready to build the project you will also need to create a `.env` file. Use the sample file [.env.sample](./.env.sample) as a guide for the necessary environment variables.

#### Database Setup

For the database to setup properly we will need to create it, migrate, and seed it with data. For convenience there is a npm command that should perform all necessary commands to get you up and running!

```bash
npm run db:setup
```

If something goes wrong, please feel free to file an issue.

#### Server Start

Last step for getting the server running:

```bash
npm run build && npm run start
```

The local server should be running on <http://localhost:4000>!

[adam]: https://github.com/AdamMc331
[prince]: https://github.com/maxcell
