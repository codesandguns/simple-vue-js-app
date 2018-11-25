const AuthenticationController = require("./Controller/AuthController");
const AuthenticationControllerPolicies = require("./Policies/AuthControllerPolicies");
module.exports = app => {
  app.post(
    "/register",
    AuthenticationControllerPolicies.register,
    AuthenticationController.register
  ),
    app.post("/login", AuthenticationController.login);
};
