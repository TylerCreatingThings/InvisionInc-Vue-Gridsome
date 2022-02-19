<template>
  <Layout>
    <v-row style="padding-top: 10vh" class="center-div">
      <g-image
        style="height: 60vh"
        fit="contain"
        :src="require('~/assets/'+mainObject.mainImage)"
      ></g-image>
    </v-row>
    <v-row class="center-div">
      <v-col cols="6">
        <b>
        <h1 class="fontOfPage">{{ mainObject.projectName }}</h1></b>
      </v-col>
    </v-row>
    <v-row class="center-div">
      <v-col cols="6">
        <h3 class="fontOfPage" style="color:gray">
          {{ mainObject.mainText }}
        </h3>
      </v-col>
    </v-row>
    <v-row class="center-div">
      <v-col
        style="padding: 5px"
        v-for="(image, i) in mainObject.src"
        :key="i"
        xl="4" lg="4" md="4" sm="4" xs="12"
      >
        <g-image
        fit="contain"
          style="height: 50vh"
          :src="require('~/assets/'+image)"
        ></g-image>
      </v-col>
    </v-row>
  </Layout>
</template>

<script>
export default {
  data: () => ({
    mainObject: {
        src: [
          "projects/Commercial/Miss Sixty/Miss Sixty Yorkdale.jpeg",
          "projects/Commercial/Miss Sixty/Miss Sixty 1.jpeg",
          "projects/Commercial/Miss Sixty/Miss Sixty 2.jpeg",
          "projects/Commercial/Miss Sixty/Miss Sixty 3.jpeg",
        ],
        path: "/miss-sixty",
        projectName: "Miss Sixty",
        projectType: "Commercial",
        clientName: "Fashion/Retail",
        mainImage: "projects/Commercial/Miss Sixty/Miss Sixty Yorkdale.jpeg",
        mainText:
          "Unique fashion store MissSixty, built in the world renown Yorkdale Mall in Toronto. One off lacquer finished clothing fixtures and Billboard one off storefront signage anchor this beautiful store.  This store set the standards for fit and finish throughout the mall",
      },
  }),
  mounted() {
  },
};
</script>

<style>

.fontOfPage {
  font-family: "Georgia", serif;
}

.center-div {
  justify-content: center;
  align-content: center;
  margin-right: auto !important;
  margin-left: auto !important;
}

</style>
