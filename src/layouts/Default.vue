<template>
  <div class="layout" style="background:white !important;">
    <header class="header">
      <v-app-bar v-show="isMobile == false" app color="white">
      <router-link style="text-decoration: none" to="/">
        <div style="display: flex !important" class="align-center">
          <g-image
            alt="Vuetify Logo"
            style="margin-right: 8px!important;"
            fit="contain"
            src="~/assets/logo-small.png"
            transition="scale-transition"
            width="40"
          />
          <h1 style="color: rgb(133, 199, 37)">iN</h1>
          <h1 style="color: rgb(16, 56, 125)">Vision inc.</h1>
        </div>
      </router-link>

      <v-spacer></v-spacer>

      <router-link style="margin-right:6px;" class="betterRouterlink" to="/about">ABOUT</router-link>

      <router-link style="margin-right:6px;" class="betterRouterlink" to="/contact"
        >CONTACT US</router-link
      >
    </v-app-bar>
    <v-app-bar v-show="isMobile" app fixed>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-navigation-drawer
        style="height: 40vh"
        v-model="drawer"
        absolute
        temporary
        v-if="isMobile"
      >
        <v-list-item-group>
          <v-list-item to="/about">
            <router-link  class="betterRouterlink" to="/about"
              >ABOUT</router-link
            >
          </v-list-item>
          <v-list-item to="/contact">
            <router-link class="betterRouterlink" to="/contact"
              >CONTACT US</router-link
            >
          </v-list-item>
        </v-list-item-group>
      </v-navigation-drawer>
      <router-link style="text-decoration: none" to="/">
        <div style="display: flex !important" class="align-center">
          <g-image
            alt="Vuetify Logo"
            style="margin-right: 8px!important;"
            fit="contain"
            src="~/assets/logo-small.png"
            transition="scale-transition"
            width="40"
          />
          <h1 style="color: rgb(133, 199, 37)">iN</h1>
          <h1 style="color: rgb(16, 56, 125)">Vision inc.</h1>
        </div>
      </router-link>
    </v-app-bar>
    
    </header>
    <div class="mainPosition">
    <slot/>
        <Footer></Footer>
    </div>

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Footer from "../components/Footer";

export default {
  name: "App",
  components: {
    Footer,
  },
  computed: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          true//navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  data: () => ({
    drawer: false,
    //
  }),
};
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.mainPosition {
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
}


.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
@media screen and (max-width: 768px) {
  h1 {
    font-size: 20px;
  }
  h2 {
    font-size: 15px;
  }
}

.nav {
  padding-top: 60px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration-line: none;
}

.betterRouterlink {
  text-decoration-line: none;
  color: black;
}
</style>
