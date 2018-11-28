<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <panel title="songs">
        <v-btn
          slot="action"
          fab
          class="cyan accent-2"
          light
          small
          absolute
          right
          middle
          @click="navigateTo({name:'songs-create'})"
        >
          <v-icon>add</v-icon>
        </v-btn>
        <div v-for="song in songs" :key="song._id">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">{{song.title}}</div>
            </v-flex>
            <v-flex xs6>
              <div class="song-artist">{{song.artist}}</div>
            </v-flex>
            <v-flex xs6>
              <div class="song-genre">{{song.genre}}</div>
            </v-flex>
            <v-flex xs6>
              <img class="album-image" :src="song.al">
            </v-flex>
          </v-layout>
          {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongService from "../services/SongsService";
import Panel from "@/components/Panel";
export default {
  components: {
    Panel
  },
  data() {
    return {
      songs: null
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  async mounted() {
    let res = await SongService.index();
    this.songs = res.data;
  }
};
</script>

<style scoped>
</style>
