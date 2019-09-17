<template>
  <div id="app"> 
    <exportComponent msg="exportComponent"/>
    <slotSample msg="slotSample"/>
  </div>
</template>

<script>
import exportComponent from "./components/sample1/exportComponent.vue";
import slotSample from "./components/sample2/slotSample.vue";

export default {
  name: "app",
  components: {
    exportComponent,
    slotSample
  }
};
</script>

<style>
</style>
