<template>
  <div class="VisualForm">
    <div
      class="logo-distance"
      :class="'forma-' + this.getClass([80, 95], this.param_percentage)"
      :style="myStyle"
    ></div>
    <span class="d-block text-center w-100">{{ this.param_percentage }}%</span>
  </div>
</template>

<script>
export default {
  name: "VisualForm",
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
        backgroundColor: this.getFormColor(this.param_percentage),
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
.VisualForm {
  position: relative;
}

.logo-distance {
  background-color: #dd2525;
  height: 100%;
  min-height: 150px;
}

.forma-1 {
  -webkit-mask: url("../assets/forma_1.svg") no-repeat center;
  mask: url("../assets/forma_2.svg");
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
}

.forma-2 {
  -webkit-mask: url("../assets/forma_2.svg") no-repeat center;
  mask: url("../assets/forma_2.svg");
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
}

.forma-3 {
  -webkit-mask: url("../assets/forma_3.svg") no-repeat center;
  mask: url("../assets/forma_3.svg");
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
