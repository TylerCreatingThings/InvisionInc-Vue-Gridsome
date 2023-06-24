<template>
<Layout>
  <div style="height:83vh;">
    <div class="center-div" style="padding-top:15vh;color:rgb(16, 56, 125);" v-show="showThankyou">
      <h1>{{text}}</h1>
    </div>
    <div v-show="showThankyou == false">
      <br />
      <br /><br />
      <h3 class="center-div" style="color: #909090">
        Our team at <div style="color: rgb(133, 199, 37);display:inline-block;">iN</div>
            <div style="color: rgb(16, 56, 125);display:inline-block;">Vision inc.</div> will be delighted to answer any questions you may have.<br />
        Please fill out the form below and click the <b>"CONTACT US"</b> button,
        <br />and we'll get in touch with you as soon as possible.
      </h3>
      <div class="container">
        <v-card ref="form" class="center-div" max-width="50rem">
          <v-card-text>
            <v-row>
              <v-col cols="3">
                <h3>Name</h3>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  ref="name"
                  v-model="name"
                  :rules="[() => !!name || 'This field is required']"
                  :error-messages="errorMessages"
                  placeholder="John Doe"
                  required
                  hide-details
                  single-line
                  outlined
                  shaped
                ></v-text-field>
              </v-col>
              <v-col cols="3"></v-col>
              <v-col cols="3">
                <h3>E-mail</h3>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  :append-icon="'mdi-email'"
                  v-model="email"
                  :rules="[rules.required, rules.min, rules.validateEmail]"
                  class="input-group--focused"
                  outlined
                  required
                  hide-details
                  single-line
                  shaped
                ></v-text-field>
              </v-col>
              <v-col cols="3"></v-col>
              <v-col cols="3"> </v-col>
              <v-col cols="6">
                <v-textarea
                  label="How can we help?"
                  outlined
                  shaped
                  v-model="notes"
                  hide-details
                  rows="2"
                >
                </v-textarea>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-btn
                style="float: center"
                large
                color="rgb(16, 56, 125)"
                @click="submit"
                class="mt-5 center-div"
                dark
                >Contact us</v-btn
              >
            </v-row>
            <br /><br />
          </v-card-text>
        </v-card>
      </div>
      <v-snackbar v-model="snackbar">
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="red" v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</Layout>
</template>

<script>
import { init, send } from "@emailjs/browser";
init("user_5IYY7zjSuWeGxfPBLGMOa");

export default {
  data: () => ({
    errorMessages: "",
    name: null,
    address: null,
    city: null,
    snackbar: false,
    text: "Thank you, we will get back to you shortly.",
    state: null,
    zip: null,
    showThankyou: false,
    email: "",
    country: null,
    formHasErrors: false,
    notes: "",
    numberValue: null,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      validateEmail: (value) =>
        (value && validateEmail(value)) || "Must be a valid email",
    },
  }),

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
    form() {
      return {
        name: this.name,
        email: this.email,
      };
    },
  },

  watch: {
    name() {
      this.errorMessages = "";
    },
  },

  methods: {
    addressCheck() {
      this.errorMessages =
        this.address && !this.name ? `Hey! I'm required` : "";

      return true;
    },
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;
      this.email = "";
      this.name = "";
      this.notes = "";
    },
    submit() {
      this.formHasErrors = false;

      if (
        this.form["email"] == false ||
        this.form["name"] == false ||
        this.notes == ""
      ) {
        this.formHasErrors = true;
      }

      if (this.formHasErrors == false) {
        var templateParams = {
          from_name: this.name,
          message: this.notes,
          reply_to: this.email,
        };
        send("service_g3nfoh2", "template_3t72oye", templateParams).then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
        this.snackbar = true;
        this.showThankyou = true;
      } else {
        this.snackbar = true;
        this.text = "Please make sure to fill out all required fields.";
      }
    },
  },
};

function validateEmail(mail) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail
    )
  ) {
    return true;
  }
  return false;
}
</script>

<style scoped>
.subTextColor {
  color: #e23f27;
}

#subTextBackColor {
  background-color: lightgray;
  border-radius: 20px;
  margin-left: 60px;
}

.container {
  display: flex;
}

.center-div {
  justify-content: center;
  align-content: center;
  text-align: center !important;
  margin-right: auto !important;
  margin-left: auto !important;  
}

</style>
