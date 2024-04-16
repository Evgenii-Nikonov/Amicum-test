<template>
  <div :class="{ 'main-wrapper': true, 'dark-theme': !isActive, 'white-theme': isActive }">
    <UserBlock @update-theme="updateTheme" />
    <MainBlock />
  </div>
</template>

<script>

import UserBlock from "../components/UserBlock.vue";
import MainBlock from "../components/MainBlock";
export default {
  name: "MainPage",
  components: { UserBlock, MainBlock },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    updateTheme(value) {
      this.isActive = value;
    },
  },
};
</script>

<style lang="scss"></style>
