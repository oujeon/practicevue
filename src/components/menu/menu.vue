<template>
  <div >
    <h1 id="menu2">menu</h1>
    <Button v-on:click="onMenu('html')">1. Html Sample</Button>
    <Button v-on:click="onMenu('view1')">2. Sample</Button>
    <hr/>  
    <h1 v-if="mainData.menuName==='html'"> 
      <a href="./sourcesample/vueComponent.html">Vue component</a>
    </h1> 

  </div>
</template>

<script>
export default {
  name: "menu2",
  data: function() {
    return {
      mainData: {
        menuName: ""
      },
      mainFunction: {
        onMenu(str) {
          // methods
          this.onMenu(str);
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
  components: {},
  methods: {
    //////////////////////////////////////////////////////////////////////////////
    // User Defined Fucntion
    //////////////////////////////////////////////////////////////////////////////
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
};
</script>
 <!-- style -->
<style scoped>
</style>