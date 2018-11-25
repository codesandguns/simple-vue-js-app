import api from "./api";

export default {
  register(credentials) {
    return api().post("register", credentials);
  },
  login(credentials) {
    console.log("Hi");
    return api().post("login", credentials);
  }
};
