<template>
  <div >
  <h1>1-2. slot </h1>
  {{msg}}
  </div>
</template>

<script>
export default {
  name: "slotChild1",
  props: {
    msg: String
  }
};
</script>
 
<style scoped>
</style>
