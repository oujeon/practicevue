<template>
  <div > 
    <Button v-on:click="onMenu('html')">1. Html Sample</Button>
    <Button v-on:click="onMenu('view1')">2. Maindata</Button>
    <Button v-on:click="onMenu('view2')">3. vuex</Button>
    <hr/>  
    <div v-if="mainData.menuName === 'html'"> 
      <a href="./sourcesample/vueComponent.html">Vue component</a>
    </div> 
    <div v-if="mainData.menuName === 'view1'"> 
        <View1 /> 
    </div> 
     <div v-if="mainData.menuName === 'view2'"> 
        <View2 /> 
    </div> 
  </div>
</template>

<script>
import View1 from "@/components/view1/view1.vue";
import View2 from "@/components/view2/view2.vue";

export default {
  name: "menu2",
  components: {
    // 사용할 콤포넌트 등록
    View1,
    View2
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