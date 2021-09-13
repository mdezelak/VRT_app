<template>
  <v-app-bar app color="primary" dark>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="conatiner header-cont" v-if="auth">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="showItem = !showItem"
        >
          <span class="navbar-toggler-icon"></span>
          <span class="text-white p-3 mt-auto">Meni</span>
        </button>
         <div class="mobile-menu" v-show="showItem">
            <v-list>
              <v-list-item>
                <v-list-item-title>
                    <router-link to="/vizualizacija">Vizualizacija</router-link>
                </v-list-item-title>
              </v-list-item>
                            <v-list-item>
                <v-list-item-title>
              <router-link to="/aktivnosti">Aktivnosti</router-link>
                </v-list-item-title>
              </v-list-item>
                            <v-list-item>
                <v-list-item-title>
              <router-link to="/nastavitve">Nastavitve</router-link>
                </v-list-item-title>
              </v-list-item>
            </v-list>
        </div>


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <button class="navbar-brand" href="#">
              <router-link to="/vizualizacija">Vizualizacija</router-link>
            </button>
            <button class="navbar-brand" href="#">
              <router-link to="/aktivnosti">Aktivnosti</router-link>
            </button>
            <button class="navbar-brand" href="#">
              <router-link to="/nastavitve">Nastavitve</router-link>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  props: {
    auth: Boolean,
  } ,
    data: () => ({
      showItem:false,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
};
</script>

<style scoped>
.header-cont {
  width: 100%;
  max-width: 960px;
  margin: auto;
}

.navbar-toggler {
  float: left;
}

.navbar {
  background: #1976d2;
  color: white;
  padding-left: 0px;
    margin-left: -10px;
}



.v-application a {
  color: white;
}

.mobile-menu {
      position: fixed;
    right: 0;
    background: #1976d2;
    height: 100vh;
}

.v-list {
      background: #1976d2 !important;
}

.navbar-light .navbar-toggler-icon {
      background-image: url("https://icon-library.com/images/hamburger-menu-icon-transparent/hamburger-menu-icon-transparent-3.jpg");
}

</style>
