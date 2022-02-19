<template>
  <v-footer bottom padless>
    <v-card
      flat
      tile
      class="center-div lighten-1 white--text text-center mainBack"
    >
      <v-card-text>
        <v-btn
          href="https://www.facebook.com/InVision-Inc-1445380959050452/"
          class="mx-4 white--text"
          style="margin-left:16px;margin-right:16px;"
          icon
        >
          <v-icon size="24px"> mdi-facebook </v-icon>
        </v-btn>
        <v-btn
          href="https://www.instagram.com/invision_inc_construction_/?hl=en"
          class="mx-4 white--text"
          style="margin-left:16px;margin-right:16px;"
          icon
        >
          <v-icon size="24px"> mdi-instagram </v-icon>
        </v-btn>
        <v-btn
          href="https://www.linkedin.com/in/jeffery-farkas-09428b44"
          style="margin-left:16px;margin-right:16px;"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px"> mdi-linkedin </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text style="font-size: 18px; padding-top:0px;" class="white--text pt-0">
        Building Relationships One Project at a Time since 2003.
      </v-card-text>

      <v-card-text style="font-size: 18px;padding-top:0px;" class="white--text pt-0">
        T 905-761-7176 <br />
        F 905-761-7175
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;{{ new Date().getFullYear() }} — <strong>invision inc</strong>, All Rights Reserved.
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script scoped>
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style>

.mainBack {
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url('~@/assets/back1.jpg');
}

.center-div {
  justify-content: center;
  align-content: center;
  text-align: center;
  margin-right: auto !important;
  margin-left: auto !important;  
}

.white--text{
  color: #fff !important;
  caret-color: #fff!important;
}
</style>
