import { validate, Joi } from "express-validation";

const create = validate({
  body: Joi.object({
    description: Joi.string().required(),
  }),
})

export default {
  create,
}
