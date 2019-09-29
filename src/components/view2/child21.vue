<template>
  <div style="border:2px solid black;margin:10px;padding:10px;"> 
    <h3>child21</h3> 
    mainData : {{mainData.count}}<br>
    mainLocalData : {{mainLocalData.count}}<br>
    <input  v-model="mainLocalData.count"/><br>
    <Button v-on:click="onStoreIncrement">Store Remote Increment</Button><br> 
    <Button v-on:click="onStoreLocalIncrement1">Store Local Increment1</Button><br> 
    <Button v-on:click="onStoreLocalIncrement2">Store Local Increment2</Button><br> 
    <Button v-on:click="onStoreLocalIncrement3">Store Local Increment3</Button><br> 
    <Button v-on:click="onStoreLocalGet">Store Local Get</Button><br> 
  </div>
</template>
<script>
import Vue from "vue";
import Utils from "@/components/plugin/utils.js";

// use
Vue.use(Utils, {});

export default {
  name: "child21",
  props: ["mainData", "mainFunction"],
  data: function() {
    return {
      mainLocalData: {}
    };
  },
  watch: {
    mainData: {
      handler: function(mainDataObj) {
        this.mainLocalData = mainDataObj;
      },
      deep: true,
      immediate: false
    }
  },
  methods: {
    //
    onStoreIncrement: function() {
      let mf = this.mainFunction;
      mf.onStoreIncrement();
    },
    //
    onStoreLocalIncrement1: function() {
      this.$store.commit("increment");
      let mf = this.mainFunction;
      mf.onUpdateSMainData("count", this.$store.state.count);
    },
    onStoreLocalIncrement2: function() {
      this.$store.commit("increment");
      Vue.updateSMainData("count", this.$store.state.count, this.mainData);
    },
    onStoreLocalIncrement3: function() {
      this.$store.dispatch("increment");
      Vue.updateSMainData("count", this.$store.state.count, this.mainData);
    },
    onStoreLocalGet: function() {
      this.$store.dispatch("increment");
      Vue.updateSMainData("count", this.$store.getters.getCount, this.mainData);
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
