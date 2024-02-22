<template>
  <div class="sneaker-list">
    <div class="sneaker-list__container">
      <div class="sneaker-list__actions">
        <h2 class="sneaker-list__title">Все кроссовки</h2>
        <input
            type="search"
            class="sneaker-list__search"
            placeholder="Поиск..."
        >
      </div>
      <sneakers-item/>
    </div>
  </div>
</template>

<script>
import SneakersItem from "@/components/main-page/SneakersItem";

export default {
  components: {SneakersItem},

}
</script>
