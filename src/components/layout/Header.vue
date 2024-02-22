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
          <a href="#"
             class="header__menu-link"
             v-for="item in menuList"
             :key="item"
          >
            <img class="header__menu-img" :src="item.img" :alt="item.title">
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      price: 0,
      menuList: [
        {
          title: "1205 руб.",
          img: require("@/assets/images/cart.svg")
        },
        {
          title: "Закладки",
          img: require("@/assets/images/heart.svg")
        },
        {
          title: "Профиль",
          img: require("@/assets/images/profile.svg")
        }
      ]
    }
  },
}
</script>

<style lang="scss">

</style>
