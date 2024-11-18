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

  <section class="top-menu">
    <div class="header">
      <h2>Menu Options</h2>
      <div class="meal-images">
        <img src="../assets/spencer-davis-hs2076lrvKQ-unsplash.jpg" alt="tacos menu">
        <img src="../assets/IMG_2931.jpg" alt="burritos">
        <img src="../assets/jarritos-mexican-soda-ncTkuQ9-XFQ-unsplash.jpg" alt="jarritos bottles">
        <img src="../assets/IMG_2939.jpg" alt="birria burritos">
      </div>
      <div class="menu-titles">
      <p>Taco</p>
      <p>Burritos</p>
      <p>Drinks</p>
      <p>Order Now</p>
      </div>
    </div>
  </section>

  <section class="middle-guts">
    <div class="GTKU">
        <h3>get to know us</h3>
        <p>Localz Cafe, established in the summer of 2020 by three Minnetonka High School graduates, aims to provide Lake Minnetonka visitors with fresh and delicious lake day meals. Our food is prepared with care, using nutritious ingredients and served with a perfect char.
          Find our current locations on our map!</p>
        <a href="#">read more</a>
    </div>

    <div class="GTKU-img">
    <img src="../assets/IMG_2933.jpg" alt="owners of Localz Cafe">
    </div>

    <div class="catering">
        <h3>Catering</h3>
        <p>In need of food for an event? We’ve gotcha covered!
          Whether its a quaint get together or a large gathering,
          let us help you curate the best event possible. Our food truck
          brings the same fresh, delicious meals that have made us a local
          favorite to you special occasion. </p>
        <a href="#">order catering</a>
      </div>

    <div class="catering-img">
      <img src="../assets/frank-zhang-uZj6OAYPqrQ-unsplash.jpg" alt="catering image">
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

section.top-menu{
  display: flex;
  h2{
    display: flex;
    font-size: 48px;
    font-family: "PT Sans", sans-serif;
    margin-bottom: 2rem;
    justify-content: center;
  }
  .meal-images{
    display: flex;
    justify-content: center;
  }
  img{
    justify-content: space-between;
    margin: 3rem;
    max-width: 15%;
    height:auto;
    border-radius: 100%;
    border: solid 7px #1D84A6;
  }
  .menu-titles{
    display: flex;
    justify-content: center;
    p{
      justify-content: space-between;
      margin: 0 6rem 10rem 8.9rem;
      font-family: "Arial", sans-serif;
      font-weight: bold;
      font-size: 28px;
    }
  }
}

section.middle-guts{
  background-color:#DC6327;
  padding: 2rem;
  display: flex;
  justify-content: space-between;

  .GTKU{
    max-width: 500px;

    h3{
      font-size: 27px;
      font-family: "Arial", sans-serif;
      text-transform: uppercase;
      margin-bottom: 2rem;
      color: #f9f9f9;
    }

    p{
      font-size: 18px;
      font-family: "Arial", sans-serif;
      margin-bottom: 4rem;
      color: #f9f9f9;
    }
  }

  .catering{
    max-width: 500px;

    h3{
      font-size: 27px;
      font-family: "Arial", sans-serif;
      text-transform: uppercase;
      margin-bottom: 2rem;
      color: #f9f9f9;
    }

    p{
      font-size: 18px;
      font-family: "Arial", sans-serif;
      margin-bottom: 4rem;
      color: #f9f9f9;
    }
  }

  .GTKU-img{
    img{
      max-width: 200%;
      height: auto;
    }
  }
  .catering-img{
    img{
      max-width: 100%;
      height: auto;
    }
  }
}
</style>