<template>
  <div >
    <h1>menu</h1>
    <Button v-on:click="onMenu('html')">1. Html Sample</Button>
    <Button v-on:click="onMenu('view1')">2. Maindata</Button>
    <hr/>  
    <h1 v-if="mainData.menuName === 'html'"> 
      <a href="./sourcesample/vueComponent.html">Vue component</a>
    </h1> 
    <h1 v-if="mainData.menuName === 'view1'"> 
        <View1 /> 
    </h1> 
  </div>
</template>

<script>
import View1 from "@/components/view1/view1.vue";
import Vue from "vue";

export default {
  name: "menu2",
  components: {
    // 사용할 콤포넌트 등록
    View1
  },
  data: function() {
    return {
      mainData: {
        menuName: ""
      },
      mainFunction: {
        onMenu(str) {
          // methods
          this.onMenu(str);
          helloWorld();
        }
      }
    };
  },
  computed: {},
  watch: {
    mainData: {
      handler: function() {},
      deep: true,
      immediate: true
    }
  },
  methods: {
    onMenu(str) {
      this.mainData.menuName = str;
    }
  },
  //////////////////////////////////////////////////////////////////////////////
  // Life Cycle Fucntion
  //////////////////////////////////////////////////////////////////////////////
  beforeCreate() {},
  created() {
    // bind
    this.mainFunction.onMenu = this.mainFunction.onMenu.bind(this);
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
  //////////////////////////////////////////////////////////////////////////////
  // User Defined Fucntion
  //////////////////////////////////////////////////////////////////////////////
};
</script>
 <!-- style -->
<style scoped>
</style>