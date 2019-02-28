// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipebookDB.sqlite3'
    },
    useNullAsDefault: true,
  },
};
