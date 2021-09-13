<template>
  <div class="VisualHeartrate">
    <div
      class="logo-distance"
      :class="'heart-' + this.getClass([50, 75], this.param_percentage)"
      :style="myStyle"
    ></div>
    <span class="d-block text-center w-100">{{ this.param_value }} bpm</span>
  </div>
</template>

<script>
export default {
  name: "VisualHeartrate",
  props: {
    param_key: String,
    param_value: Number,
    param_percentage: Number,
  },
  data() {
    return {
      images: {
        duration: "",
      },
      myStyle: {
        backgroundColor: this.getColor(this.param_percentage),
      },
    };
  },
  computed: {
    image: function () {
      return new Date(this.param_value * 1000).toISOString().substr(11, 8);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.VisualHeartrate {
  position: relative;
}

.logo-distance {
  height: 100%;
  min-height: 150px;
}

.heart-1 {
  -webkit-mask: url("../assets/utrip_1.svg") no-repeat center;
  mask: url("../assets/utrip_1.svg");
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
}

.heart-2 {
  -webkit-mask: url("../assets/utrip_2.svg") no-repeat center;
  mask: url("../assets/utrip_2.svg");
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
}

.heart-3 {
  -webkit-mask: url("../assets/utrip_3.svg") no-repeat center;
  mask: url("../assets/utrip_3.svg");
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
}

.counter {
  position: absolute;
  top: 46%;
  font-size: 1.2rem;
  width: 100%;
}
</style>
