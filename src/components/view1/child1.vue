<template>
  <div style="border:2px solid black;margin:10px;padding:10px;"> 
       <h3>child1</h3> 
   mainData : {{mainData.name}}<br>
   mainLocalData : {{mainLocalData.name}}<br>
   <input  v-model="mainLocalData.name"/>
   <Button v-on:click="onComfirm">확인</Button><br>
   <Button v-on:click="onUpdateSMainData">갱신 단수 mainData</Button>
    <Button v-on:click="onUpdatePMainData">갱신 복수 mainData</Button>
     <Button v-on:click="onDebugMainData">Debug mainData</Button>
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
      let mf = this.mainFunction;
      mf.onComfirm(name);
    },
    onUpdateSMainData: function() {
      let mf = this.mainFunction;
      mf.onUpdateSMainData("name", "이순신");
    },
    onUpdatePMainData: function() {
      let mf = this.mainFunction;
      let obj = {};
      obj["name"] = "이순신";
      obj["obj"] = { tel: "010-444-111" };
      obj["add"] = { add: "서울시 서대문구 현저동" };
      mf.onUpdatePMainData(obj);
    },
    onDebugMainData: function() {
      let mf = this.mainFunction;
      mf.onDebugMainData();
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
