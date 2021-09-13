<template>
  <div class="settings container">
        <div class="row">
                    <h1 class="text-center py-3 col-12">Nastavitve</h1>
                </div>
    <div class="row">
      <div class="col-0 col-md-3"></div>
      <v-form
        class="col-12 col-md-6"
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="username"
          :counter="10"
          label="Uporabniško ime"
          required
        ></v-text-field>

        <v-select
          v-model="gender"
          :items="items"
          :rules="[(v) => !!v || 'Item is required']"
          label="Spol"
          required
        ></v-select>

        <v-text-field v-model="age" label="Starost" required></v-text-field>

        <v-text-field v-model="height" label="Višina" required></v-text-field>

        <v-text-field v-model="weight" label="Teža" required></v-text-field>

  <div class="row">
        <v-btn class="btn text-white col-6 offset-3" @click="submit"> Posodobi </v-btn>
      </div>
      </v-form>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;

export default {
  data: () => ({
    valid: true,
    username: "",
    usernameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    items: ["M", "F"],
    checkbox: false,
    height: '',
    weight: '',
    age: '',
    gender: ''
  }),
  mounted() {
    this.getUser();
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
    getUser: function () {
      axios({
        method: "GET",
        url: "http://localhost:3000/get-user",
      }).then(
        (response) => {
          console.log(response);
          this.username = response.data.result[0].username;
          this.height = response.data.result[0].height;
          this.weight = response.data.result[0].weight;
          this.age = response.data.result[0].age;
          this.gender = response.data.result[0].gender;
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>


<style>
.btn {
  background: #1976d2 !important;
}
.btn span {
  background: #1976d2 !important;
}
</style>
