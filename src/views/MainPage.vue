<template>
  <div class="main">
    <div class="main__container">
      <Header/>
      <SneakersList/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SneakersList from "@/components/main-page/SneakersList";
export default {

  components: {SneakersList, Footer, Header}
}
</script>
