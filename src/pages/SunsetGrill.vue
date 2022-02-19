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
          "mainSlider/sunsetgrill.png",
          "projects/Commercial/SunsetGrill/sunsetgrill_2.jpeg",
          "projects/Commercial/SunsetGrill/sunsetgrill_3.jpeg",
          "projects/Commercial/SunsetGrill/sunsetgrill_1.jpeg",
        ],
        path: "/sunset-grill",
        projectName: "Sunset Grill",
        projectType: "Commercial",
        clientName: "Restaurant",
        mainImage: "mainSlider/sunsetgrill.png",
        mainText:
          "From their one off Queen street store location to their now over 90 franchises and growing, Sunset Gill is becoming the go to breakfast restaurant throughout Ontario. Building over 27 stores for SSG, inVision inc. is happy to share in their success. SSG’s quality of service and food mimics inVision inc.’s business model to provide it’s customers with a quality product second to none at competitive prices.",
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
