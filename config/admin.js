//codigo nativo do strapi
//pega as informacoes dos campos direto do .env
//auth --> configurações de autenticação
//apiToken --> configurações dos tokens da api
//tranfer --> configurações de transferência

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});
