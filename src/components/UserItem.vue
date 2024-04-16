<template>
    <div class="user-item">
        <h2 class="user-item__text">{{ text }}</h2>


        <div class="progress" :class="progressName">

            <svg>
                <circle cx="72.5" cy="72.5" r="60"/>


                <circle :class="circleClass" class="fillDiagram"
                        :style="`stroke-dashoffset: calc(440 - (440 * ${percentValue}) / 100)`"
                        cx="72.5" cy="72.5" r="60"/>
            </svg>
            <div class="progress__count">
                <div v-if="imageSrc" class="img-wrapper">
                    <!-- Делаем условную отрисовку компонента если передаётся пропс imageSrc то рендерится картинка, иначе span -->
                    <img class="user-item__icon" :src="imageSrc" alt=""/>
                </div>

                <span :class="progressClass" v-else
                >{{ progressValue }}<b>{{ progressClass === "atistation" ? " дней" : "" }}</b></span
                >
                <!-- Если класс переданный в компонент равен atistation , то добавляем к нему 'дней'-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserItem",

    props: {
        text: String,
        icon: String,
        progressValue: {
            type: [String, Boolean, Number],
        },
        progressClass: String,
        progressName: String,
        imageSrc: String,
        percentValue: Number
    },

    computed: {
        circleClass() {
            if (this.progressName === 'exam') {
                if (this.progressValue === true) {
                    return "fullFillSucess";
                } else if (this.progressValue === false) {
                    return "fullFillWarning";
                } else {
                    return null; // темно-синий
                }
            } else if (this.progressName === 'breefing') {
                if (this.progressValue === true) {
                    return "fullFillSucess";
                } else if (this.progressValue === false) {
                    return "fullFillWarning";
                } else {
                    return null; // темно-синий
                }
            } else if (this.progressClass === 'tests') {
                return "fullFillSucess"; // зеленый цвет для выполненных тестов
            } else if (this.progressClass === 'atistation') {
                if (this.progressValue < 30) {
                    return "fullFillWarning"; // оранжевый цвет, если осталось меньше 30 дней
                } else {
                    return "fullFillSucess"; // зеленый цвет для остальных случаев
                }
            } else {
                return null;
            }
        }
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

%center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-item__icon {
  fill: #353d54;
}

.user-item__icon {
  width: 75px;
  height: 75px;
}

.img-wrapper {
  @extend %center;
  position: absolute;
  top: 45%;
  left: 55%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}

.progress {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;

  &__count {
    @extend %center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;

    span {
      max-width: 88px;
        padding-bottom: 15px;
      @extend %center;
    }
  }
}
.tests {
  span {
    font-size: 40px;
  }
}

.atistation {
  text-align: center;
  max-width: 88px;
  display: flex;
  flex-direction: column;

  span {
    font-size: 45px;
  }

  b {
    font-size: 20px;
  }
}

.user-item {
  width: 281px;
  height: 260px;
  background-color: $dark-theme-right;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__text {
    font-size: 20px;
    font-weight: 700;
    max-width: 177px;
    text-align: center;
    margin-bottom: 30px;
  }
}

svg {
  position: relative;
  width: 145px;
  height: 145px;
  transform: rotate(-85deg);

  circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: #353d54;
    stroke-width: 12;
    stroke-linecap: round;
    transform: translate(5px, 5px);
  }

  .fillDiagram {
    stroke-dasharray: 400;
    stroke-dashoffset: 440;
    stroke: $dark-theme-main;
    stroke-dashoffset: calc(440 - (440 * 100) / 100);
  }

  .fullFillSucess {
    stroke-dashoffset: calc(440 - (440 * 100) / 100);
    stroke:$green-common ;
  }

  .fullFillWarning {
    stroke-dashoffset: calc(440 - (440 * 100) / 100);
    stroke: $orange-common;
  }
}
</style>
