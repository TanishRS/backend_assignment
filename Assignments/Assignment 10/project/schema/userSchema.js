const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({
      'any.required': 'Name is required.'
    }),
    
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'Please provide a valid email address.',
      'any.required': 'Email is required.'
    }),
    
  age: Joi.number()
    .integer()
    .min(1)
    .max(120)
    .required()
    .messages({
      'number.base': 'Age must be a number.',
      'number.min': 'Age must be a valid positive range.',
      'any.required': 'Age is required.'
    }),
    
  course: Joi.string()
    .required()
    .messages({
      'any.required': 'Course is required.'
    })
});

module.exports = userSchema;
