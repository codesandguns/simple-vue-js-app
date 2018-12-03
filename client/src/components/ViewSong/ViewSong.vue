<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song"/>
      </v-flex>

      <v-flex class="ml-2">
        <you-tube :youtubeId="song.youtubeId"/>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs6></v-flex>

      <v-flex xs6 class="ml-2 mt-2">
        <panel title="Lyrics">
          <lyrics :song="song"/>
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongService from "@/services/SongsService";
import Panel from "@/components/Panel";
import SongMetadata from "./SongMetadata";
import YouTube from "./YouTube.vue";
import Lyrics from "./YouTube.vue";

export default {
  data() {
    return {
      song: {
        title: "",
        artist: "",
        genre: "",
        album: "",
        albumImage: "",
        youtubeId: "",
        lyrics: "",
        tab: ""
      }
    };
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId;
    let res = await SongService.show(songId);
    this.song = res.data;
  },
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Lyrics
  }
};
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>

