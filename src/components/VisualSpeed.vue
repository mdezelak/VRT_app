<template>
  <div class="VisualSpeed">
    <div
      class="logo-distance"
      :class="'speed-' + this.getClass([50, 75], this.param_percentage)"
      :style="myStyle"
    ></div>
    <span class="d-block text-center w-100">{{ this.param_value }} km/h</span>
  </div>
</template>

<script>
export default {
  name: "VisualSpeed",
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
.VisualAscent {
  position: relative;
}

.logo-distance {
  height: 100%;
  min-height: 150px;
}

.speed-1 {
  -webkit-mask: url("../assets/hitrost_1.svg") no-repeat center;
  mask: url("../assets/hitrost_1.svg");
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
}

.speed-2 {
  -webkit-mask: url("../assets/hitrost_2.svg") no-repeat center;
  mask: url("../assets/hitrost_2.svg");
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
}

.speed-3 {
  -webkit-mask: url("../assets/hitrost_3.svg") no-repeat center;
  mask: url("../assets/hitrost_3.svg");
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
