<template>
  <div id="app">
    <router-view>
      <mainPage />
    </router-view>

  </div>
</template>

<script>
import MainPage from "./pages/MainPage.vue";

export default {
  name: "App",
  components: { MainPage },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    updateTheme(isActive) {
      this.isActive = isActive;
      console.log(this.isActive);
    },
  },
};
</script>

<style lang="scss"></style>
