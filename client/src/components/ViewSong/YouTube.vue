<template>
  <panel title="YouTube Videos">
    {{youtubeId}}
    <youtube :video-id="youtubeId" :player-width="500" :player-height="200"></youtube>
  </panel>
</template>

<script>
import Panel from "@/components/Panel";
import VueYouTubeEmbed from "vue-youtube-embed";

export default {
  props: ["youtubeId"],
  components: {
    Panel,
    VueYouTubeEmbed
  }
};
</script>

<style>
</style>
