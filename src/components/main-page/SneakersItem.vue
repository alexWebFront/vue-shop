<template>
  <div class="sneaker-list__items">
    <div class="sneaker-list__item" v-for="(i, index) in 5" >
      <div class="sneaker-list__item-info">
        <div @click="addToFavorite" class="sneaker-list__item-img-like">
          <img src="@/assets/images/like-1.svg" alt="">
        </div>
        <div v-if="liked" @click="addToFavorite" class="sneaker-list__item-img-liked">
          <img src="@/assets/images/like-2.svg" alt="">
        </div>
        <div class="sneaker-list__item-img">
          <img src="@/assets/images/sneakers-1.jpg" alt="">
        </div>
        <p class="sneaker-list__item-title">
          Мужские Кроссовки Nike Blazer Mid Suede
        </p>
      </div>
      <div class="sneaker-list__item-price">
        <div class="sneaker-list__item-price-container">
          <p class="sneaker-list__item-subtitle">
            Цена:
          </p>
          <p class="sneaker-list__item-cost">12 999 руб.</p>
        </div>

        <div  @click="addToFavorite" class="sneaker-list__item-img-plus">
          <img src="@/assets/images/plus.svg" alt="">
        </div>
        <div v-if="liked" @click="addToFavorite" class="sneaker-list__item-img-add">
          <img src="@/assets/images/checked.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      liked: false
    }
  },
  methods: {
    addToFavorite() {
      this.liked = !this.liked
    }
  },
}
</script>
