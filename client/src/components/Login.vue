<template>
<v-layout align-center justify-center>
  <v-flex xs12 sm8 md4>
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan" dark>
      <v-toolbar-title>Welcome</v-toolbar-title>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
         <v-text-field label="email" v-model="email"></v-text-field><br>
         <v-text-field label="password" type="password" v-model="password"></v-text-field><br>
         <div class="error" v-html="error"/><br>
         <v-btn class="cyan" @click="login">Login</v-btn>
      </div>
    </div>
  </v-flex>
</v-layout>

</template>

<script>
import AuthenticationService from "../services/AuthenticationService";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
      } catch (err) {
        this.error = err.response.data.msg;
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
