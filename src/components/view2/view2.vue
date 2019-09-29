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
import Vuex from "vuex";

// use
Vue.use(Vuex, {});
Vue.use(Utils, {});
//
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    // 동기
    increment(state) {
      state.count++;
    }
  },
  actions: {
    // 비동기
    increment({ commit }) {
      commit("increment");
      // 아래의 내용은 store의 값을 변경해주시면 child로 전달 불규칙하게
      // 전달한다. 못하기도 한다.
      // return setTimeout(() => {
      //   console.log("setTimeOut 실행");
      //   commit("increment");
      // }, 5000);
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     console.log("setTimeOut 실행");
      //     commit("increment");
      //     resolve();
      //   }, 1000);
      // });
    }
  },
  modules: {
    // 다양한 action으로 처리하기 위해서 사용한다.
  },
  getters: {
    getCount(state) {
      // 여기서 다양한 필터을 할 수 있다.
      //
      return state.count;
    }
  }
});
//
export default {
  name: "view2",
  store, // 모든 child에 공유 된다
  data: function() {
    return {
      mainData: {
        count: 0
      },
      mainFunction: {
        onStoreIncrement() {
          // methods의 함수을 호출
          this.onStoreIncrement();
        },
        onUpdateSMainData(key, value) {
          // methods의 함수을 호출
          this.onUpdateSMainData(key, value);
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
    onStoreIncrement() {
      store.commit("increment");
      Vue.updateSMainData("count", store.state.count, this.mainData);
    },
    // onUpdateSMainData
    onUpdateSMainData(key, value) {
      Vue.updateSMainData(key, value, this.mainData);
    }
  },
  //////////////////////////////////////////////////////////////////////////////
  // Life Cycle Fucntion
  //////////////////////////////////////////////////////////////////////////////
  beforeCreate() {},
  created() {
    // bind
    let mf = this.mainFunction;
    mf.onStoreIncrement = mf.onStoreIncrement.bind(this);
    mf.onUpdateSMainData = mf.onUpdateSMainData.bind(this);
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
