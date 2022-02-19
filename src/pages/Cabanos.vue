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
          "projects/Commercial/Cabanos/cabanos_1.jpg",
          "projects/Commercial/Cabanos/cabanos_3.jpg",
          "projects/Commercial/Cabanos/cabanos_7.png",
          "projects/Commercial/Cabanos/cabanos_6.jpg",
        ],
        path: "/cabanos",
        projectName: "Cabanos",
        projectType: "Commercial",
        clientName: "Restaurant",
        mainImage: "projects/Commercial/Cabanos/cabanos_1.jpg",
        mainText:
          "Cabanos, working hand in hand with the owner Kevin was a pleasure. From beginning to end this project had it's challenges.  This beautiful store is located within the main floor of a highrise residential condominium. The entire crew at iNVision inc managed to all of the obsticals they encountered and build a beautiful restaurant.  Cabanos is one of our favorite fit outs to showcase. It’s a smorgasbord of comfort food and a must to visit when roaming around the Yonge and Bloor district area. inVision inc. is happy to be a part of the Cabanos family",
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
