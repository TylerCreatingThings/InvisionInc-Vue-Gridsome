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
          "projects/Commercial/BlackJack BBQ/blackjack_bbq.png",
          "projects/Commercial/BlackJack BBQ/blackjack_bbq_1.jpeg",
          "projects/Commercial/BlackJack BBQ/blackjack_bbq_2.jpeg",
          "projects/Commercial/BlackJack BBQ/blackjack_bbq_3.jpeg",
          "projects/Commercial/BlackJack BBQ/blackjack_bbq_4.jpeg",
        ],
        path: "/black-jack-bbq",
        projectName: "Black Jack BBQ",
        projectType: "Commercial",
        clientName: "Restaurant",
        mainImage: "projects/Commercial/BlackJack BBQ/blackjack_bbq.png",
        mainText:
          "One of a kind New Orleans smoke meat themed restaurant located in the new Food District Square One Mall Mississauga, Ontario, Canada. All of this custom made workmanship was integrated with unique one off faux millwork music amps, and a feature mural created by the famous Toronto mural artist, Christian De Araujo. Everything came together to create a unique atmosphere and overall visual delight.",
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
