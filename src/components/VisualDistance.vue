<template>
  <div class="VisualDistance">
    <div
      class="logo-distance"
      :class="'distance-' + this.getClass([50, 75], this.param_percentage)"
      :style="myStyle"
    ></div>
    <span class="d-block text-center w-100"
      >{{ parseFloat(this.param_value / 1000).toFixed(2) }} km</span
    >
  </div>
</template>

<script>
export default {
  name: "VisualDistance",
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
.VisualDistance {
  position: relative;
}

.logo-distance {
  background-color: #dd2525;
  height: 100%;
  min-height: 150px;
}

.distance-1 {
  -webkit-mask: url("../assets/razdalja_1.svg") no-repeat center;
  mask: url("../assets/razdalja_1.svg");
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
}

.distance-2 {
  -webkit-mask: url("../assets/razdalja_2.svg") no-repeat center;
  mask: url("../assets/razdalja_2.svg");
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
}

.distance-3 {
  -webkit-mask: url("../assets/razdalja_3.svg") no-repeat center;
  mask: url("../assets/razdalja_3.svg");
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
}

.counter {
  position: absolute;
  top: 50%;
  font-size: 1.2rem;
  width: 100%;
}
</style>
