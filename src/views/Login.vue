<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 offset-md-3" id="login">
                <div class="row">
                    <h1 class="text-center py-3 col-12">Prijava</h1>
                </div>
        <div class="form-inputs row">
            <label class="col-12" for="username">Uporabniško ime</label>
            <input  class="col-12" type="text" id="username" name="username" v-model="input.username" placeholder="Uporabniško ime" />
        </div>
        <div class="form-inputs row">
            <label class="col-12"  for="password">Geslo</label>
            <input  class="col-12" type="password" id="password" name="password" v-model="input.password" placeholder="Geski" />
        </div>
        <div class="row py-3">
        <button  class="btn btn-primary py-2 col-6 offset-3 text-white" type="button" v-on:click="login()">PRIJAVI SE</button>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
        mockAccount: {
            username: "uporabnik",
            password: "test"
        }
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        // This should actually be an api call not a check against this.$parent.mockAccount
        if (
          this.input.username == this.mockAccount.username &&
          this.input.password == this.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          //this.$router.replace({ name: "nastavitve" });
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    },
  },
};
</script>

<style>
#login .form-inputs {
  padding-bottom: 10px;
}
#login .form-inputs label {
  padding-right: 10px;
}

.btn {
  background: #1976d2 !important;
}
.btn span {
  background: #1976d2 !important;
}
</style>