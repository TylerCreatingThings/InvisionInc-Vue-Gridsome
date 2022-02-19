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
          "mainSlider/bagelbarn.png",
          "projects/Commercial/BagelBarn/bagelbarn_1.jpeg",
        ],
        path: "/bagel-barn",
        projectName: "Bagel Barn",
        projectType: "Commercial",
        clientName: "Restaurant",
        mainImage: "mainSlider/bagelbarn.png",
        mainText:
          "We are happy to be part of this amazing New York style bagel bakery. The owner Terry is a unique entrepreneur with a nose for success. Bagel Barns bagel sell out daily and we hope to be part of the growing Bagel Barn team with future builds to come.",
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
