const Joi = require("joi");

const signinSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2,  tlds: { allow: false } })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

module.exports = signinSchema;
