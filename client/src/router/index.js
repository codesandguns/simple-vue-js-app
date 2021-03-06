import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Register from "@/components/Register";
import Login from "@/components/Login";
import Song from "@/components/Songs";
import CreateSong from "@/components/CreateSongs";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "root",
      component: HelloWorld
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/songs",
      name: "songs",
      component: Song
    },
    {
      path: "/songs/create",
      name: "songs-create",
      component: CreateSong
    }
  ]
});
