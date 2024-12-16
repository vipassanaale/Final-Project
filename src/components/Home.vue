<script setup>
import MainTemplate from "../templates/MainTemplate.vue";
import InfoBlock from "./InfoBlock.vue";
import MenuOptions from "./MenuOptions.vue";
import Create from "./create.vue";
import Location from "./location.vue";
import Reviews from "./Reviews.vue";
import Instagram from "./instagram.vue";
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

    <menu-options/>

    <info-block/>

    <create/>

    <location/>

    <reviews/>

    <instagram/>

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

    p {
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
    display: flex;
    padding-left: 6rem;

    img {
      height: auto;
      max-width: 90%;
      border-radius: 4rem;
      border-bottom: solid 2rem #DC6327;
      border-right: solid 2rem #DC6327;
    }
  }
}

section.top-menu {
  display: flex;

  h2 {
    display: flex;
    font-size: 48px;
    font-family: "PT Sans", sans-serif;
    margin-bottom: 2rem;
    justify-content: center;
  }

  .meal-images {
    display: flex;
    justify-content: center;
  }

  img {
    justify-content: space-between;
    margin: 3rem;
    max-width: 15%;
    height: auto;
    border-radius: 100%;
    border: solid 7px #1D84A6;
  }

  .menu-titles {
    display: flex;
    justify-content: center;

    p {
      justify-content: space-between;
      margin: 0 6rem 10rem 8.9rem;
      font-family: "Arial", sans-serif;
      font-weight: bold;
      font-size: 28px;
    }
  }
}

section.middle-guts {
  background-color: #DC6327;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}



@media (max-width: 768px) {
  .middle-guts .section-container {
    flex-direction: column;
    text-align: center;
  }

  .middle-guts .text-container, .middle-guts .image-container {
    max-width: 100%;
  }
}
</style>