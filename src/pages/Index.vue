<template>
  <Layout>
    <v-row>
      <v-col style="padding: 0" cols="12">
        <v-carousel height="85vh" max-height="85vh" cycle hide-delimiters :show-arrows="false">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            style="height: 85vh"
             v-preload rel="preload" as="image" 
            :src="require('~/assets/'+item.src)"
            :lazy-src="require('~/assets/'+item.src)"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        style="padding: 0"
        v-for="(gridData, i) in gridImageData"
        :key="i"
        xl="3"
        lg="3"
        md="3"
        sm="3"
        xs="12"
      >
        <SquareImage :mainObject="gridData"></SquareImage>
      </v-col>
    </v-row>
   
    <v-row
    class="greenBlueGradient"
    >
      <v-col cols="12">
        <!--h2 class="display-1 font-weight-bold mb-3">Testimonials</h2-->
        <v-col
          xl="4"
          lg="4"
          md="4"
          sm="4"
          xs="12"
          class="testimonialSpacing"
        >
          <Testimonials
            colorBack="rgb(169,169,169)"
            companyName="YokD"
            userName="John Adams"
            testimonialText="iNVision inc built out our new offices and spatious boardroom. Our team has nothing but good things to say - we are really fortunate to have found you for this project! Happy to work with them again. Thank you for always being available!"
            userPicture="testimonials/john.png"
          ></Testimonials>
        </v-col>
        <v-col
          xl="4"
          lg="4"
          md="4"
          sm="4"
          xs="12"
          class="testimonialSpacing"
        >
          <Testimonials
            colorBack="rgb(112,128,144)"
            companyName="Sol Studios"
            userName="Angelo Graci"
            testimonialText="iNVision inc is one of the best general contractors we've worked with. The entire team tactfully delivered a project of exceptional quality while staying on schedule and under budget. When we have our next project they will be first on our minds."
            userPicture="testimonials/angelo.png"
          ></Testimonials>
        </v-col>
        <v-col
          xl="4"
          lg="4"
          md="4"
          sm="4"
          xs="12"
          class="testimonialSpacing"
        >
          <Testimonials
            colorBack="rgb(192,192,192)"
            companyName="Bagel Barn"
            userName="Terry Perusini"
            testimonialText="A big thank you to the entire iNVision inc construction team who made our dreams come to reality. Thanks iNVision inc. was a pleasure to work with throughout the project and we look forward to a long term relationship as Bagel Barn continues to grow."
            userPicture="testimonials/Terry.png"
          ></Testimonials>
        </v-col>
      </v-col>
    </v-row>
    <v-row style="padding: 30px;" class="center-div">
      <v-col xl="6" lg="6" md="6" sm="6" xs="12">
        <v-row class="center-div">
          <v-col
            v-for="n in logos"
            :key="n"
            xl="3"
            lg="3"
            md="3"
            sm="3"
            xs="10"
            style="place-self: center;"
          >
            <g-image
              style="background-color: white !important;width:100%;background-position:center;"
              :src="require('~/assets/project_logos/' + n + '')"
              class="grey lighten-2"
              fit="cover"
              position="center"
            >
            </g-image>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="center-div" justify="center" align="center">
      <v-col cols="12">
        <h1 class="display-2 mb-3">
          We guarentee <b>Quality</b> and on <b>Time</b><br />
          delivery of your project.
        </h1>
      </v-col>
      <v-col cols="12">
        <g-image
          fit="contain"
          style="background-color: transparent;max-width:100%;"
          src="~/assets/member_tca.png"
        ></g-image>
      </v-col>
    </v-row>

  </Layout>
</template>

<script>
import ServiceDisplay from "../components/ServiceDisplay";
import Testimonials from "../components/Testimonials";
import SquareImage from "../components/SquareImage";


export default {
  metaInfo: {
    title: 'Home'
  },
  name: "Home2",
  components: {
    Testimonials,
    SquareImage,
    ServiceDisplay,
  },
  methods: {
    transferToProductPage(index) {
      this.$router.push({
        name: "ProjectPage",
        params: {
          title: this.gridImageData[index].projectName,
          pictures: this.gridImageData[index].src,
          mainText: this.gridImageData[index].mainText,
          bigPicture: this.gridImageData[index].mainImage,
        },
      });
    },
  },
  data: () => ({
    logos: [
      "blackjackbbq.png",
      "subway.jpg",
      "sunsetgrill.jpg",
      "popeyes.png",
      "cosmo_musc.png",
      "feedery_logo.png",
      "freshii.png",
      "kernels_popcorn_logo.png",
      "loaded_perogi.webp",
      "lullaboo.png",
      "opa.png",
      "Rizzoto.jpg",
    ],
    items: [
      {
        src: "mainSlider/feedery.webp",
      },
      {
        src: "mainSlider/blackjack_bbq.webp",
      },
      {
        src: "mainSlider/sunsetgrill.webp",
      },
      {
        src: "mainSlider/bagelbarn.webp",
      },
    ],
    gridImageData: [
      {
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
      {
        src: [
          "mainSlider/sunsetgrill.webp",
          "projects/Commercial/SunsetGrill/sunsetgrill_2.jpeg",
          "projects/Commercial/SunsetGrill/sunsetgrill_3.jpeg",
          "projects/Commercial/SunsetGrill/sunsetgrill_1.jpeg",
        ],
        path: "/sunset-grill",
        projectName: "Sunset Grill",
        projectType: "Commercial",
        clientName: "Restaurant",
        mainImage: "mainSlider/sunsetgrill.webp",
        mainText:
          "Sunset Grill began life as a small breakfast restaurant located on Queen street in Toronto, Canada.  With the help from InVision Inc. they now have over 90 franchises and growing.  Sunset Gill is becoming the go to breakfast restaurant throughout Ontario. Building over 27 stores for Sunset Grill, inVision inc. is happy to share in their success.  Sunset Grill’s quality of service and food mimics inVision inc.’s business model to provide it’s customers with a quality product second to none at competitive prices",
      },
      {
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
      {
        src: ["mainSlider/loadedperogi.webp"],
        path: "/loaded-perogi",
        projectName: "Loaded Perogi",
        projectType: "Commercial",
        clientName: "Restaurant",
        mainImage: "mainSlider/loadedperogi.webp",
        mainText:
          "Situated in the Toronto Train terminal food court, Loaded Perogi definitely came with it’s challenges. It features a unique 3D character mural covered in a glass panel. Truly one of, if not, the most appealling restaurant in the entire food court",
      },
      {
        src: [
          "mainSlider/bagelbarn.webp",
          "projects/Commercial/BagelBarn/bagelbarn_1.jpeg",
        ],
        path: "/bagel-barn",
        projectName: "Bagel Barn",
        projectType: "Commercial",
        clientName: "Restaurant",
        mainImage: "mainSlider/bagelbarn.webp",
        mainText:
          "We are happy to be part of this amazing New York style bagel bakery. The owner Terry is a unique entrepreneur with a nose for success. Bagel Barns bagel sell out daily and we hope to be part of the growing Bagel Barn team with future builds to come.",
      },
      {
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
      {
        src: [
          "mainSlider/residential.webp",
          "projects/Residential/project x/project_x_2.jpeg",
          "projects/Residential/project x/project_x_3.jpeg",
          "projects/Residential/project x/project_x_4.jpeg",
          "projects/Residential/project x/project_x_1.jpeg",
        ],
        path: "/house-renovation",
        projectName: "House Renovation",
        projectType: "Residential",
        clientName: "",
        mainImage: "mainSlider/residential.webp",
        mainText:
          "Unique custom house renovation in just south of Klenburg. Post and Beam throughout as well as open concept modern kitchen area showcase this unique home and project. Let inVision inc help you with your next dream home project.",
      },
      {
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
    ],
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>

<style>
.greenBlueGradient {
  background-size: cover;
  background-position: center;
  background-image: url('~@/assets/back1.jpg');
}

.center-div {
  justify-content: center;
  align-content: center;
  margin-right: auto !important;
  margin-left: auto !important;
}

.display-2{
      font-size: 3rem!important;
    line-height: 3.125rem;
    letter-spacing: normal!important;
        font-weight: 400;
    font-family: Roboto,sans-serif!important;
}

@media screen and (max-width: 400px) {

.testimonialSpacing {
  display: inline-block;
  height:fit-content !important;
  vertical-align: top;
}

}


.testimonialSpacing {
  display: inline-block;
  height:100%;
  vertical-align: top;
}
</style>
