<template>
  <div class="main">
    <div class="main__container">
      <Header/>
      <SneakersList/>
      <Basket/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SneakersList from "@/components/main-page/SneakersList";
import Basket from "@/components/basket/Basket";
export default {

  components: {Basket, SneakersList, Footer, Header}
}
</script>
