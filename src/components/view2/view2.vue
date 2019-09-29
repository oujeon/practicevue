<template>
  <div>
    <div>
      <h3>Vuex</h3> 
    </div>
    <div style="border:2px solid black;margin:10px;padding:10px;">
      <h3>view2</h3>    
      <Parent2 
        v-bind:mainData="mainData" 
        v-bind:mainFunction="mainFunction"
      />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Parent2 from "@/components/view2/parent2.vue";
import Utils from "@/components/plugin/utils.js";
//
Vue.use(Utils, {});
//
export default {
  name: "view2",
  data: function() {
    return {
      mainData: {
        name: "",
        str: "",
        arr: [],
        obj: {},
        bln: true,
        num: 1
      },
      mainFunction: {
        onComfirm(str) {
          // methods의 함수을 호출
          this.onComfirm(str);
        },
        onUpdateSMainData(key, value) {
          // methods의 함수을 호출
          this.onUpdateSMainData(key, value);
        },
        onUpdatePMainData(obj) {
          // methods의 함수을 호출
          this.onUpdatePMainData(obj);
        },
        onDebugMainData(obj) {
          // debug mainData
          this.onDebugMainData(obj);
        }
      }
    };
  },
  computed: {},
  watch: {
    mainData: {
      handler: function(mainData) {
        Object.keys(mainData);
      },
      deep: true,
      immediate: true
    }
  },
  components: {
    // 사용할 콤포넌트 등록
    Parent2
  },
  methods: {
    //////////////////////////////////////////////////////////////////////////////
    // User Defined Fucntion
    //////////////////////////////////////////////////////////////////////////////
    // 못만든다. export default { onFunction(){}  }
    // onComfirm
    onComfirm(str) {
      this.mainData.name = str;
    },
    // onUpdateSMainData
    onUpdateSMainData(key, value) {
      Vue.updateSMainData(key, value, this.mainData);
    },
    // onUpdateSMainData
    onUpdatePMainData(obj) {
      Vue.updatePMainData(obj, this.mainData);
    },
    // onDebugMainData
    onDebugMainData() {
      Vue.debugMainData(this.mainData);
    }
  },
  //////////////////////////////////////////////////////////////////////////////
  // Life Cycle Fucntion
  //////////////////////////////////////////////////////////////////////////////
  beforeCreate() {},
  created() {
    // bind
    let mf = this.mainFunction;
    mf.onComfirm = mf.onComfirm.bind(this);
    mf.onUpdateSMainData = mf.onUpdateSMainData.bind(this);
    mf.onUpdatePMainData = mf.onUpdatePMainData.bind(this);
    mf.onDebugMainData = mf.onDebugMainData.bind(this);
  },
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
