<template>
  <div>
    <Home/>
    <div class="artice">
      <List/>
    </div>
  </div>
</template>

<script setup>
import Home from '../../../components/home.vue'
import List from '../../../components/list.vue'
</script>

<style lang="scss">
.artice {
  width: 100vw;
  min-width: 1000px;
}
// span {
//   color: var(--vp-c-text-1);
// }
.artice {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
</style>