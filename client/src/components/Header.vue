<template>
  <v-toolbar fixed class="cyan">
  <v-toolbar-title class="mr-4">
    <span  class="home" @click="navigateTo({name:'root'})">TabTracker</span>
    </v-toolbar-title> 
  <v-toolbar-items>
      <v-btn flat dark @click="navigateTo({name:'songs'})">Browse</v-btn>
  </v-toolbar-items>
  <v-spacer></v-spacer>
    <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
      <v-btn flat dark @click="navigateTo({name:'register'})">SignUp</v-btn>
    </v-toolbar-items>
    <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
      <v-btn flat dark @click="navigateTo({name:'login'})">Login</v-btn>
    </v-toolbar-items>
     <v-toolbar-items v-if="$store.state.isUserLoggedIn">
      <v-btn flat dark @click="logout({name:'login'})">Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
 
<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$router.push({ name: "root" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  cursor: pointer;
}
</style>
   