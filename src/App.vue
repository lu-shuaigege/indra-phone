<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import "../src/assets/rem";
import Header from "./components/header/header.vue";
import Footer from "./components/footer/footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
#app {
  margin: 0px;
  padding: 0px;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: #222222;
}
</style>
