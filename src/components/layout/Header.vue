<template>
  <header class="header">
    <div class="header__container">
      <div class="header__content">
        <div class="header__logo">
          <div class="header__logo-img">
            <img src="@/assets/images/logo.png" alt="">
          </div>
          <div class="header__logo-titles">
            <h1 class="header__logo-title">VUE SNEAKERS</h1>
            <p class="header__logo-subtitle">Магазин лучших кроссовок</p>
          </div>
        </div>
        <div class="header__menu">
          <a href="#" class="header__menu-link">
            <img class="header__menu-img" src="@/assets/images/cart.svg" alt="">
            1205 руб.
          </a>
          <a href="#" class="header__menu-link" @click="changeBasketStatusHandler">
            <img class="header__menu-img" src="@/assets/images/heart.svg" alt="">
            Закладки
          </a>
          <a href="#" class="header__menu-link">
            <img class="header__menu-img" src="@/assets/images/profile.svg" alt="">
            Профиль
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations(['changeBasketStatus', 'lockBodyScroll']),
    changeBasketStatusHandler() {
      this.changeBasketStatus();
      this.lockBodyScroll();
    },

  },
}
</script>
