<template>
    <div class="main-item" @click="$router.push(`${path}`)">
        <h2>{{ text }}</h2>
        <div class="img-wrapper">
            <img :src="imageSrc" alt="icon"/>
        </div>
        <span v-if="notifications" class="notifications-count">{{ notifications }}</span>
    </div>
</template>
<script>
export default {
    name: "MainItem",
    props: {
        text: String,
        imageSrc: String,
        path: String,
        notifications: String
    },
};
</script>
<style lang="scss" scoped>

@import "@/assets/scss/variables.scss";

.main-item {
  position: relative;
  padding-top: 50px;
  width: 390px;
  height: 300px;
  background-color: #586c92;
  cursor: pointer;
  transition: 0.3s all;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  background-color: $orange-common;
  border-radius: 5px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  opacity: 0.99;

  &:hover {
    background-color: lighten($color: $orange-common, $amount: 7);
  }

  h2 {
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    display: block;
    line-height: 43.48px;
  }
}

.notifications-count {
  background-color: $green-common;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  font-size: 32px;
  border-radius: 100%;
  position: absolute;
  top: -25px;
  right: -25px;
}
</style>
