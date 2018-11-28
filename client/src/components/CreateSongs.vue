<template>
  <v-layout>
    <v-flex xs4>
      <panel title="song metadata">
        <v-text-field label="Title" v-model="song.title" aria-required="true"></v-text-field>
        <br>
        <v-text-field label="Artist" required v-model="song.artist"></v-text-field>
        <br>
        <v-text-field label="Genre" required v-model="song.genre"></v-text-field>
        <br>
        <v-text-field label="Album" required v-model="song.album"></v-text-field>
        <br>
        <v-text-field label="Album Image URL" required v-model="song.albumImage"></v-text-field>
        <br>
        <v-text-field label="Youtube Id" required v-model="song.youtubeId"></v-text-field>
        <br>
      </panel>
    </v-flex>
    <v-flex xs4>
      <panel title="Song Structure" class="ml-2">
        <v-text-field label="Lyrics" required multi-line v-model="song.lyrics"></v-text-field>
        <br>
        <v-text-field label="Tabs" required multi-line v-model="song.tab"></v-text-field>
        <br>
        <v-btn class="cyan" @click="create">Add Songs</v-btn>
      </panel>
      <div class="danger-alert" v-html="err"/>
      <br>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from "@/components/Panel";
import SongService from "../services/SongsService";

export default {
  components: {
    Panel
  },
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      err: null
    };
  },
  methods: {
    async create() {
      try {
        this.err = null;
        if (await this.areAllFieldsFilled()) {
          SongService.post(this.song);
          this.$router.push({ name: "songs" });
        } else {
          this.err = "*All fields are mandatory*";
        }
      } catch (err) {
        console.log(err);
      }
    },
    async areAllFieldsFilled() {
      console.log("Hi", this.title);
      return (
        typeof this.title !== "undefined" &&
        typeof this.artist !== "undefined" &&
        typeof this.genre !== "undefined" &&
        typeof this.album !== "undefined" &&
        typeof this.albumImage !== "undefined" &&
        typeof this.youtubeId !== "undefined" &&
        typeof this.lyrics !== "undefined" &&
        typeof this.tab !== "undefined"
      );
    }
  }
};
</script>

<style scoped>
</style>
