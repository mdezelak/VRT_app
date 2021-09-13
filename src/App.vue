<template>
  <v-app>
    <Header :auth="authenticated" />
    <v-main>
      <router-view @authenticated="setAuthenticated" />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  data() {
      return {
          authenticated: true
      }
  },
  methods: {
      setAuthenticated(status) {
          this.authenticated = status;
      },
      logout() {
          this.authenticated = false;
      }
  }
};
</script>
