<template>
  <v-card class="mx-auto" max-width="400">
    <g-image fit="cover" class="white--text align-end img-size"  :src="require('~/assets/'+serviceImage)">
    </g-image>
    <v-card-actions>
      <v-btn @click="viewPage()" color="black" text> Explore </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ServiceDisplay",
  methods: {
      viewPage(){
        this.$router.push({
        name: this.serviceLink
      });
      }
  },
  props: {
    serviceImage: String,
    serviceLink: String,
  },
};
</script>

<style>
.img-size {

}

</style>
