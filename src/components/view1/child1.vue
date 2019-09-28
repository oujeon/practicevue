<template>
  <div style="border:2px solid black;margin:10px;padding:10px;"> 
       <h3>child1</h3> 
   mainData : {{mainData.name}}<br>
   mainLocalData : {{mainLocalData.name}}<br>
   <input  v-model="mainLocalData.name"/>
   <Button v-on:click="onComfirm">확인</Button>
   <Button v-on:click="onAddSingularMainData">addSingularMainData</Button>
  </div>
</template>

<script>
export default {
  name: "child1",
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
    onComfirm: function() {
      let name = this.mainLocalData.name;
      this.mainFunction.onComfirm(name);
    },
    onAddSingularMainData: function() {
      alert("child1 : onAddSingularMainData");
     this.mainFunction.onAddSingularMainData();
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
