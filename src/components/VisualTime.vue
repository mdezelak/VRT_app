<template>
  <div class="VisualTime">
    <div class="logo-cas" :style="myStyle"></div>
    <span class="counter text-center">{{ time }}</span>
  </div>
</template>

<script>
export default {
  name: "VisualTime",
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
    time: function () {
      return new Date(this.param_value * 1000).toISOString().substr(11, 8);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.VisualTime {
  position: relative;
}

.logo-cas {
  background-color: #dd2525;
  -webkit-mask: url("../assets/cas_cut.svg") no-repeat center;
  mask: url("../assets/cas_cut.svg");
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
  height: 100%;
  min-height: 150px;
}

.counter {
  position: absolute;
  top: 50%;
  font-size: 1.2rem;
  width: 100%;
}
</style>
