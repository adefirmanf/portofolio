<template>
<client-only>
  <body class="profile-page">
    <Navbar></Navbar>
    <div class="container">
      <div class="squares square-1"></div>
      <div class="squares square-3"></div>
      <div class="squares square-4"></div>
      <MyBackground></MyBackground>
      <!-- Projects !-->
      <MyProject></MyProject>
      <!-- Experience !-->
      <MyExperience></MyExperience>
    </div>
    <Footer></Footer>
  </body>
</client-only>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import MyBackground from "~/components/MyBackgroud.vue";
import MyProject from "~/components/Project";
import MyExperience from "~/components/Experience.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navbar,
    MyBackground,
    MyProject,
    MyExperience,
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap");

* {
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  /* Hide horizontal scrollbar */
}
body {
  overflow-x: hidden;
}
</style>
