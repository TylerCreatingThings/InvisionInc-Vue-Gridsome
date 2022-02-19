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
          "projects/Commercial/Daniel Espenosa/Daniel_Espenosa_1.jpeg",
          "projects/Commercial/Daniel Espenosa/Daniel_Espenosa_2.jpeg",
          "projects/Commercial/Daniel Espenosa/Daniel_Espenosa_3.jpeg",
          "projects/Commercial/Daniel Espenosa/Daniel Espinosa 4.jpeg",
        ],
        path: "/daniel-espinosa",
        projectName: "Daniel Espinosa",
        projectType: "Commercial",
        clientName: "Jewelry",
        mainImage: "projects/Commercial/Daniel Espenosa/Daniel_Espenosa_1.jpeg",
        mainText:
          "A unique Jewelry store with Showcase Room situated in the downtown toronto area. Very custom glass and wood-work flow throughout the entire project. The final product turned out to be an amazing successful buildout.",
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
