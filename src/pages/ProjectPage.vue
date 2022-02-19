<template>
  <Layout>
    <v-row style="padding-top: 10vh" justify="center" align="center">
      <g-image
        style="height: 60vh"
        fit="contain"
        :src="bigPicture"
      ></g-image>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="6">
        <b>
        <h1 class="fontOfPage">{{ title }}</h1></b>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="6">
        <h3 class="fontOfPage" style="color:gray">
          {{ mainText }}
        </h3>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col
        style="padding: 5px"
        v-for="(image, i) in pictures"
        :key="i"
        xl="4" lg="4" md="4" sm="4" xs="12"
      >
        <g-image
        fit="contain"
          style="height: 50vh"
          :src="image"
        ></g-image>
      </v-col>
    </v-row>
  </Layout>
</template>

<script>
export default {
  name: "ProjectPage",
  mounted() {
    if (this.title == undefined) {
      this.$router.push({
        path: "/",
      });
    }
  },
  props: {
    title: String,
    pictures: Array,
    mainText: String,
    bigPicture: String,
  },
};
</script>

<style>

.fontOfPage {
  font-family: "Georgia", serif;
}

</style>
