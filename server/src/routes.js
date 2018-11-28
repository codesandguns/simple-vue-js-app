const AuthenticationController = require("./Controller/AuthController");
const AuthenticationControllerPolicies = require("./Policies/AuthControllerPolicies");
const SongsController = require("./Controller/SongsController");

module.exports = app => {
  app.post(
    "/register",
    AuthenticationControllerPolicies.register,
    AuthenticationController.register
  ),
    app.post("/login", AuthenticationController.login),
    app.get("/songs", SongsController.index);
  app.post("/songs", SongsController.post);
};
