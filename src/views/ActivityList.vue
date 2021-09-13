<template>
  <div class="container">
    <v-overlay v-show="loading">
      <v-progress-circular
        :size="70"
        :width="7"
        color="blue"
        indeterminate
        loading
        loading-text="Loading... Please wait"
      ></v-progress-circular>
    </v-overlay>

    <v-data-table
      :headers="headers"
      :items="files"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:[`item.added`]="{ item }">
        <v-chip color="blue" dark>{{ getParsedDate(item.added) }}</v-chip>
      </template>

      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Seznam aktivnosti</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>

          <v-spacer></v-spacer>

          <input
            type="file"
            id="selectedFile"
            @change="readFile"
            style="display: none"
          />
          <input
            type="button"
            class="btn"
            value="Dodaj tek"
            onclick="document.getElementById('selectedFile').click();"
          />
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="parseData(item)">
          mdi-open-in-new
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
const axios = require("axios").default;

export default {
  data() {
    return {
      headers: [
        {
          text: "Ime datoteke",
          align: "start",
          sortable: false,
          value: "file_name",
        },
        { text: "Dodano", value: "added" },
        { text: "Vizualizacija", value: "actions", sortable: false },
      ],
      files: [],
      loaded: false,
      loading: false,
    };
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    getParsedDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear(),
        hour = "" + d.getHours(),
        minutes = "" + d.getMinutes();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [day, month, year].join(".") + " " + [hour, minutes].join(":");
    },
    parseData(item) {
      this.$router.push({ path: "/vizualizacija", query: { q: item.id } });
    },
    readFile(event) {
      this.loading = true;
      const fileList = event.target.files;
      const reader = new FileReader();
      reader.readAsText(fileList[0]);
      setTimeout(() => {
        axios({
          method: "POST",
          url: "http://localhost:3000/parse-tcx",
          data: {
            data: reader.result,
            file_name: fileList[0].name,
          },
        }).then(
          (response) => {
            this.loading = false;
            if (response.data.success) {
              alert("Uspešno dodana aktivnost");
              this.getTableData();
            } else {
              alert("Napaka pri dodajanju");
            }
          },
          (error) => {
            alert("Napaka pri dodajanju");
            this.loading = false;
            console.log(error);
          }
        );
      }, 1000);
    },
    getTableData() {
      axios({
        method: "GET",
        url: this.$store.state.settings.path + "/get-file-list",
      }).then(
        (response) => {
          var data = response.data.result;
          for (let i = 0; i < data.length; i++) {
            //this.files[i] = data[i];
            this.$set(this.files, i, data[i]);
          }
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
input[type="button"] {
  background: #1976d2;
  color: white;
}
</style>
