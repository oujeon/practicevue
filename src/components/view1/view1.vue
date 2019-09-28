<template>
  <div>
    <div>
      <h3>mainData 초기화함수(단수, 복수, 전체) , 갱신함수 (단수, 복수, 전체)</h3> 
    </div>
    <div style="border:2px solid black;margin:10px;padding:10px;">
      <h3>view1</h3>    
      <Parent1 v-bind:mainData="mainData" 
      v-bind:mainFunction="mainFunction"/>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Parent1 from "@/components/view1/parent1.vue";
import Utils from "@/components/plugin/utils.js";

Vue.use(Utils);

export default {
  name: "View1",
  data: function() {
    return {
      mainData: {
        name: ""
      },
      mainFunction: {
        onComfirm(str) {
          // methods
          this.onComfirm(str);
        },
        onAddSingularMainData() {
          alert("dddd");

          //this.onAddSingularMainData();
        }
      }
    };
  },
  computed: {},
  watch: {
    mainData: {
      handler: function(mainDataObj) {},
      deep: true,
      immediate: true
    }
  },
  components: {
    // 사용할 콤포넌트 등록
    Parent1
  },
  methods: {
    //////////////////////////////////////////////////////////////////////////////
    // User Defined Fucntion
    //////////////////////////////////////////////////////////////////////////////
    // export default {
    // onFunction(){} 못만든다.
    // }
    // onComfirm
    onComfirm(str) {
      this.mainData.name = str;
    },
    onAddSingularMainData() {
      console.log("onAddSingularMainData");
      // Vue.addSingularMainData(key, value, mainData);
    }
  },
  //////////////////////////////////////////////////////////////////////////////
  // Life Cycle Fucntion
  //////////////////////////////////////////////////////////////////////////////
  beforeCreate() {},
  created() {
    // bind
    this.mainFunction.onComfirm = this.mainFunction.onComfirm.bind(this);
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {
    console.log("updated!!!");
  },
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
