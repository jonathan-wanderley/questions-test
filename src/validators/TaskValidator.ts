import { validate, Joi } from "express-validation";

const create = validate({
  body: Joi.object({
    description: Joi.string().required(),
  }),
})

const update = validate({
  body: Joi.object({
    description: Joi.string(),
    done: Joi.boolean(),
    finished_at: Joi.date(),
  }),
})

export default {
  create,
  update,
}
