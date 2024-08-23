// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 3306),
//       database: env('DATABASE_NAME', 'strapi'),
//       user: env('DATABASE_USERNAME', 'strapi'),
//       password: env('DATABASE_PASSWORD', 'strapi'),
//       ssl: env.bool('DATABASE_SSL', false)
//       // ssl: {
//       //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
//       // },
//     },
//     debug: false,
//   },
// });
//mudar pro anterior quando migrar pro embrapa IO
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: env('DATABASE_URL', {
      ssl: env.bool('DATABASE_SSL', false),
    }),
  },
});
