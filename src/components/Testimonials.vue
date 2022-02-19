<template>
  <v-card class="mx-auto" style='width: fit-content; height: 100%;' :color="colorBack" dark  max-width="400">
    <v-card-title>
      <v-icon large left> mdi-comment-quote-outline </v-icon>
      <span class="specialText">{{ companyName }}</span>
    </v-card-title>

    <v-card-text class="specialTextMain">
      "{{ testimonialText }}"
    </v-card-text>

    <v-card-text class="specialTextMain">
     
    </v-card-text>
    <v-card-text class="specialTextMain">
     
    </v-card-text>

    <v-card-actions style="position: absolute;
  bottom: 0;">
      <v-list-item >
        <v-list-item-avatar style="margin-right: 15px !important;"  color="grey darken-3">
          <g-image
            class="elevation-6"
            alt=""
            fit="contain"
            :src="require('~/assets/'+userPicture)"
          ></g-image>
        </v-list-item-avatar>

        <v-list-item-content >
          <v-list-item-title class="grow" >{{ userName }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "Testimonials",
  props: {
    colorBack: String,
    companyName: String,
    userName: String,
    testimonialText: String,
    userPicture: String,
  },
};
</script>

<style>

.mx-auto{
    margin-right: auto !important;
  margin-left: auto !important;
}

.specialText {
  font-size: 1.25rem;
  font-family: Roboto,sans-serif!important;
  letter-spacing: .0125em;
  font-weight: 300;
}

.specialTextMain {
  font-size: 1.5rem;
  font-family: Roboto,sans-serif!important;
  line-height: 2rem;
  color: hsla(0,0%,100%,.7);
  letter-spacing: normal;
  font-weight: bold;
}

.grow {
  font-weight:400;
}

</style>
