<template>
  <div style="border:2px solid black;margin:10px;padding:10px;">
    <h3>parent2</h3> 
    <div class="h-container"> 
      <Child21
        v-bind:mainData="mainData" 
        v-bind:mainFunction="mainFunction" 
      />
      <Child22
        v-bind:mainData="mainData" 
        v-bind:mainFunction="mainFunction" 
      />
    </div>
  </div>
</template>

<script>
import Child21 from "@/components/view2/child21.vue";
import Child22 from "@/components/view2/child22.vue";
//
//
export default {
  name: "parent1",
  components: {
    // 사용할 콤포넌트 등록
    Child21,
    Child22
  },
  props: ["mainData", "mainFunction"],
  data: function() {
    return {
      mainLocalData: {}
    };
  },
  methods: {
    //////////////////////////////////////////////////////////////////////////////
    // User Defined Fucntion
    //////////////////////////////////////////////////////////////////////////////
  },
  computed: {},
  watch: {
    mainData: {
      handler: function(mainDataObj) {
        this.mainLocalData = mainDataObj;
      },
      deep: true,
      immediate: true
    }
  },
  //////////////////////////////////////////////////////////////////////////////
  // Life Cycle Fucntion
  //////////////////////////////////////////////////////////////////////////////
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>
 
<style scoped>
.h-container:after {
  clear: both;
  display: block;
  content: "";
}
.h-container .item {
  float: left;
  width: 45%;
  text-align: center;
}
.h-container .item.last {
  float: right;
  border-right: none;
}
</style>
