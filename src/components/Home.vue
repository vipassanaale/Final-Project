<script setup>
import MainTemplate from "../templates/MainTemplate.vue";
</script>

<template>
  <main-template>
  <section class="top">
    <div class="landing">
    <h1>Localz Cafe, Your Life Boat Meal</h1>
    <p>Localz Cafe is a local food truck based off Lake Minnetonka that sells the best
      tacos and burritos you need, for your perfect lake day.</p>
    <a href="#">learn more</a>
    </div>

    <div class="image">
      <img src="../assets/landingimage.jpeg" alt="tacos landing">
    </div>
  </section>

  </main-template>

</template>

<style scoped>
section.top {
  display: flex;
  max-width: 2500px;
  justify-content: space-between;
  padding: 1rem 0 0 3rem;
  margin-bottom: 90px;

  .landing {
    max-width: 400px;
   h1 {
     font-size: 48px;
     font-family: "PT Sans", sans-serif;
     margin-bottom: 2rem;
   }
   p{
      font-size: 18px;
      font-family: "Arial", sans-serif;
      margin-bottom: 4rem;
   }
   a {
     font-size: 16px;
     font-family: "Arial", sans-serif;
     color: white;
     background-color: #DC6327;
     padding: 1rem;
     border-radius: 12px;
     text-transform: uppercase;
     font-weight: bold;
   }
  }

  .image {
    img {
      height: 90%;
      width: 90%;
    }
  }
}
.image {
  display: flex;
}
</style>