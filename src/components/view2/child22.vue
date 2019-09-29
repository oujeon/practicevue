<template>
  <div style="border:2px solid black;margin:10px;padding:10px;"> 
    <h3>child22</h3> 
    mainData : {{mainData.count}}<br>
    mainLocalData : {{mainLocalData.count}}<br> 
  </div>
</template>
<script>
export default {
  name: "child22",
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
  methods: {},
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
