'use strict';

//pra proteção dos retornos, retira todos as coisas que possam dar brechas de segurança
const { sanitizeEntity } = require("strapi-utils")

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

//vamos sobrescrever o método create
module.exports = {
  async create(ctx) {
    //identificar um usuário pelo token
    const token = await strapi.plugins["users-permissions"].services.jwt.getToken(ctx)

    //o CTX request body é todo o body da requisição
    //aqui estamos mudando a requisição do body eacrescentando o user daquele token
    const body = {
      ...ctx.request.body,
      user: token.id
    };

    const entity = await strapi.services.wishlist.create(body)
    return sanitizeEntity(entity, { model: strapi.models.wishlist })
  },

  //atualizar o dados sem a necessidade de passar o id (segurança)
  async update(ctx) {
    try {
      const entity = await strapi.services.wishlist.update(
        { id: ctx.params.id },
        ctx.request.body
      );
      return sanitizeEntity(entity, { model: strapi.models.wishlist });
    } catch (err) {
      throw strapi.errors.unauthorized(err);
    }
  },
};
