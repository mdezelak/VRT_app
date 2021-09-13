<template>
  <div class="container">
    <div class="row">
                    <h4 class="text-center pt-4 pb-0 col-12">Vizualizacija teka: Otok</h4> <!--  {{this.file_data[0].id}}-->
                </div>
    <div class="row p-3">
      <v-select
        v-model="activity"
        :items="items"
        label="Tip aktivnosti"
      ></v-select>
    </div>
    <div class="row" v-if="this.file_data[0]">
      <div
        class="col-6 col-md-6 col-lg-3"
        v-show="activity == 'Prikaži vse' || activity == 'Rekreacija'"
      >
        <VisualTime
          param_key="duration"
          :param_percentage="this.file_data[0].duration"
          :param_value="this.file_data[0].og_duration"
        />
      </div>
      <div
        class="col-6 col-md-6 col-lg-3"
        v-show="
          activity == 'Prikaži vse' ||
          activity == 'Rekreacija' ||
          activity == 'Kondicijski trening' ||
          activity == 'Trening moči'
        "
      >
        <VisualDistance
          param_key="total_distance"
          :param_percentage="this.file_data[0].total_distance"
          :param_value="this.file_data[0].og_total_distance"
        />
      </div>
      <div
        class="col-6 col-md-6 col-lg-3"
        v-show="activity == 'Prikaži vse' || activity == 'Kondicijski trening'"
      >
        <VisualAscent
          param_key="total_ascent"
          :param_percentage="this.file_data[0].total_ascent"
          :param_value="this.file_data[0].og_total_ascent"
        />
      </div>
      <div
        class="col-6 col-md-6 col-lg-3"
        v-show="activity == 'Prikaži vse' || activity == 'Kondicijski trening'"
      >
        <VisualSpeed
          param_key="avg_speed"
          :param_percentage="this.file_data[0].avg_speed"
          :param_value="this.file_data[0].og_avg_speed"
        />
      </div>
      <div
        class="col-6 col-md-6 col-lg-3"
        v-show="
          activity == 'Prikaži vse' ||
          activity == 'Rekreacija' ||
          activity == 'Trening moči'
        "
      >
        <VisualHeartrate
          param_key="avg_heartrate"
          :param_percentage="this.file_data[0].avg_heartrate"
          :param_value="this.file_data[0].og_avg_heartrate"
        />
      </div>
      <div
        class="col-6 col-md-6 col-lg-3"
        v-show="activity == 'Prikaži vse' || activity == 'Trening moči'"
      >
        <VisualHillnum
          param_key="num_hills"
          :param_percentage="this.file_data[0].num_hills"
          :param_value="this.file_data[0].og_num_hills"
        />
      </div>
      <div
        class="col-6 col-md-6 col-lg-3"
        v-show="activity == 'Prikaži vse' || activity == 'Trening moči'"
      >
        <VisualHilldistance
          param_key="distance_hills"
          :param_percentage="this.file_data[0].distance_hills"
          :param_value="this.file_data[0].og_distance_hills"
        />
      </div>
      <div
        class="col-6 col-md-6 col-lg-3"
        v-show="activity == 'Prikaži vse' || activity == 'Kondicijski trening'"
      >
        <VisualForm
          param_key="forma"
          :param_percentage="this.file_data[0].forma"
          :param_value="this.file_data[0].og_forma"
        />
      </div>
      <div
        class="col-6 col-md-6 col-lg-3"
        v-show="activity == 'Prikaži vse' || activity == 'Rekreacija'"
      >
        <VisualCalories
          param_key="calories"
          :param_percentage="this.file_data[0].calories"
          :param_value="this.file_data[0].og_calories"
        />
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;

// @ is an alias to /src
import VisualTime from "@/components/VisualTime.vue";
import VisualDistance from "@/components/VisualDistance.vue";
import VisualAscent from "@/components/VisualAscent.vue";
import VisualSpeed from "@/components/VisualSpeed.vue";
import VisualHeartrate from "@/components/VisualHeartrate.vue";
import VisualHillnum from "@/components/VisualHillnum.vue";
import VisualHilldistance from "@/components/VisualHilldistance.vue";
import VisualForm from "@/components/VisualForm.vue";
import VisualCalories from "@/components/VisualCalories.vue";

export default {
  name: "Dashboard",
  props: {
    file_id: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      file_data: {},
      activity: "Prikaži vse",
      items: [
        "Prikaži vse",
        "Rekreacija",
        "Kondicijski trening",
        "Trening moči",
      ],
    };
  },
  components: {
    VisualTime,
    VisualDistance,
    VisualAscent,
    VisualSpeed,
    VisualHeartrate,
    VisualHillnum,
    VisualHilldistance,
    VisualForm,
    VisualCalories,
  },
  mounted() {
    if (this.file_id == null || isNaN(this.file_id)) {
      this.getLastResult();
    } else {
      this.getReuslts();
    }
  },
  methods: {
    getReuslts: function () {
      axios({
        method: "GET",
        url: "http://localhost:3000/get-result/" + this.file_id,
      }).then(
        (response) => {
          this.file_data = response.data.result;
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getLastResult: function () {
      axios({
        method: "GET",
        url: "http://localhost:3000/get-last-result",
      }).then(
        (response) => {
          this.file_data = response.data.result;
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>
