<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6 sm8 md4>
        <div class="song-title">{{song.title}}</div>
      </v-flex>
      <v-flex xs6 sm8 md4>
        <div class="song-artist">{{song.artist}}</div>
      </v-flex>
      <v-flex xs6 sm8 md4>
        <div class="song-genre">{{song.genre}}</div>
      </v-flex>
      <v-flex xs6>
        <img class="album-image" :src="song.albumImage">
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import Panel from "@/components/Panel";
export default {
  props: ["song"],
  components: {
    Panel
  }
};
</script>

<style scoped>
.song {
  padding: 20px;
  height: 300px;
  overflow: hidden;
}
.song-title {
  font-size: 20px;
}
.song-artist {
  font-size: 20px;
}
.song-genre {
  font-size: 20px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
