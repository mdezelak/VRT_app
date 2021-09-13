<template>
  <div class="VisualHillnum">
    <div class="logo-distance hillnum-1" :style="myStyle"></div>
    <span class="counter text-center">{{ this.param_value }}</span>
  </div>
</template>

<script>
export default {
  name: "VisualHillnum",
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
.VisualHillnum {
  position: relative;
}

.logo-distance {
  background-color: #dd2525;
  height: 100%;
  min-height: 150px;
}

.hillnum-1 {
  -webkit-mask: url("../assets/steviloh.svg") no-repeat center;
  mask: url("../assets/steviloh.svg");
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
