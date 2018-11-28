<template>
<v-layout align-center justify-center>
  <v-flex xs12 sm8 md4>
    <panel title="Register">
      <form name="tab-tracker-form" autocomplete="off">
        <v-text-field label="email" v-model="email"></v-text-field><br>
        <v-text-field label="password" type="password" v-model="password"></v-text-field><br>
       </form>
          <div class="error" v-html="error"/><br>
          <v-btn class="cyan" @click="register">Register</v-btn>
        </panel>
  </v-flex>
</v-layout>

</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
import Panel from "@/components/Panel";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
      } catch (err) {
        console.log("-->", err);
        this.error = err.response.data.msg;
      }
    }
  },
  components: {
    Panel
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
