<template>
  <div class="basket" v-if="this.$store.state.basketStatus">
    <div class="basket__container" v-click-away="onClickAway">
      <div class="basket__wrapper">
        <h2 class="basket__title">Корзина</h2>
        <div class="basket__list">
          <sneakers-item/>
        </div>
      </div>
      <div class="basket__create-order">
        <div class="basket__total">
          <div class="basket__total-item">
            <p class="basket__total-text">Итого: </p>
            <p class="basket__total-sum">21 498 руб. </p>
          </div>
          <div class="basket__total-item">
            <p class="basket__total-text">Налог 5%: </p>
            <p class="basket__total-sum">1074 руб. </p>
          </div>
        </div>
        <a href="#" class="basket__btn-create">
          Оформить заказ
          <img src="@/assets/images/arrow-next.svg" alt="">
        </a>
      </div>

    </div>
  </div>
</template>

<script>
import SneakersItem from "@/components/main-page/SneakersItem";
import {mapMutations} from "vuex";

export default {
  components: {SneakersItem},
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations(["changeBasketStatus", "unLockBodyScroll"]),
    onClickAway() {
      this.changeBasketStatus();
      this.unLockBodyScroll();
    }
  },
}
</script>
