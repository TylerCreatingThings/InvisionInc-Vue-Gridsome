<template>
  <div class="squareImage"
        @mouseover="showOverlay = true"
      @mouseleave="showOverlay = false">
    <g-link
     class="mainLink"
      :to="mainObject.path"
      style="position: relative; display: block"

    >
      <v-carousel
       :interval="getRandomNumber()"
       height="50vh" max-height="50vh" cycle hide-delimiters :show-arrows="false">
        <v-carousel-item
          v-for="(image, i) in mainObject.src"
          :key="i"
          style="height:50vh"
          :lazy-src="require('~/assets/'+image)"
        ></v-carousel-item>
      </v-carousel>
      <div v-show="showOverlay" class="imgOverlay">
        <h4 class="projectName">{{ mainObject.projectName }}</h4>
        <div class="casestudyDivider"></div>
        <p class="clientName">{{ mainObject.clientName }}</p>
        <p class="projectType">{{ mainObject.projectType }}</p>
      </div></g-link
    >
  </div>
</template>

<script>
export default {
  name: "SquareImage",
  data() {
    return {
      showOverlay: false,
    };
  },
  mounted(){
    
  },
  methods: {
    getRandomNumber(){
      var max = 30000;
      var min = 5000;
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    transferToProductPage() {
      this.$router.push({
        path: "/project-page",
        params: {
          title: this.mainObject.projectName,
          pictures: this.mainObject.src,
          mainText: this.mainObject.mainText,
          bigPicture: this.mainObject.mainImage,
        },
      });
    },
  },
  props: {
    mainObject: Object,
  },
};
</script>

<style>
.squareImage {
  width: 100%;
  height: 50vh;
}

.imgOverlay {
  background: rgba(16, 56, 125, 0.7) repeat scroll 0 0;
  overflow: hidden;
  padding: 3rem;
  height: 50vh;
  transition: all 0.25s ease-in-out 0s;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.casestudyDivider {
  width: 4.7rem;
  border-bottom: 1px solid #fff;
  opacity: 0.75;
}

.projectName {
  color: #fff;
  font-size: 2.7rem;
  font-family: "Montserrat", sans-serif;
  line-height: 1.2;
  margin-bottom: 3rem;
  margin-top: 1rem;
  text-align: left;
  text-transform: capitalize;
  width: 90%;
  opacity: 0.75;
}

.projectType {
  color: #fff;
  font-size: 1.25rem;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  text-align: left;
  text-transform: capitalize;
  position: absolute;
  bottom: 0;
  opacity: 0.75;
  margin-bottom: 2rem;
}

.clientName {
  color: #fff;
  font-size: 1.25rem;
  margin-top: 2rem;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  text-align: left;
  opacity: 0.75;
}
</style>
