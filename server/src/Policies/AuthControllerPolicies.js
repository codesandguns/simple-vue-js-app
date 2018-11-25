const joi = require("joi");

module.exports = {
  register(req, res, next) {
    const schema = {
      email: joi.string().email(),
      password: joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,32}$"))
    };
    const { error, value } = joi.validate(req.body, schema);
    if (error) {
      switch (error.details[0].context.key) {
        case "email":
          res
            .status(400)
            .json({ msg: "You must provide a valid email address" });
          break;
        case "password":
          res.status(400).send({
            msg:
              "The Password you provided failed to match the rules of our policy"
          });
          break;
        default:
          res.status(400).send({ error: "Invalid registration Information" });
      }
    } else {
      next();
    }
  }
};
