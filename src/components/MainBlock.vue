<template>
  <div class="main-block main">
    <div class="logo"><img src="../assets/logo.png" alt="" /></div>
    <div class="main__menu">
      <MainItem text="Начать работу" path="/work" :imageSrc="workIcon" />
      <MainItem text="Уведомления" path="/notifications" :imageSrc="letterIcon" :notifications="person.notifications" />
      <MainItem text="Обучение" path="/education" :imageSrc="bookIcon" />
      <MainItem text="Достижения" path="/achievements" :imageSrc="medalIcon" />
    </div>
  </div>
</template>

<script>

import MainItem from "./MainItem.vue";
import {mapState} from "vuex";

export default {
  name: "MainBlock",
  components: { MainItem },
  data() {
    return {
      workIcon: require("@/assets/images/work.svg"),
      letterIcon: require("@/assets/images/letter.svg"),
      medalIcon: require("@/assets/images/medal.svg"),
      bookIcon: require("@/assets/images/book.svg"),
    };
  },
  methods: {},
    computed: {
        ...mapState({
            person: (state) => state.person,
        }),
    },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  &__menu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
    align-self: center;
    justify-self: center;
  }
}

.logo {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 183px;
}
</style>
