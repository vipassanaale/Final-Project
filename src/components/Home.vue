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
    <div class="section-container">
      <div class="text-container">
          <h3>Get to Know Us</h3>
          <p>Localz Cafe, established in the summer of 2020 by three Minnetonka High School graduates, aims to provide Lake Minnetonka visitors with fresh and delicious lake day meals. Our food is prepared with care, using nutritious ingredients and served with a perfect char. Find our current locations on our map!</p>
          <a href="#">Read More</a>
        </div>
        <div class="image-container">
          <img src="../assets/IMG_2933.jpg" alt="owners of Localz Cafe">
        </div>
      </div>
  </div>

      <div class="section-container">
        <div class="catering">
        <div class="image-container">
          <img src="../assets/frank-zhang-uZj6OAYPqrQ-unsplash.jpg" alt="catering image">
        </div>
        <div class="text-container">
          <h3>Catering</h3>
          <p>In need of food for an event? We’ve gotcha covered! Whether it’s a quaint get-together or a large gathering, let us help you curate the best event possible. Our food truck brings the same fresh, delicious meals that have made us a local favorite to your special occasion.</p>
          <a href="#">Order Catering</a>
        </div>
      </div>
  </div>
    </section>


  <section class="create">
    <div class ="one">
      <img src="../assets/IMG_2931.jpg" alt="burritos">
       <h3>Choose your shell</h3>
       <p>whole grain soft shells, plain corn tortillas, or Plain flour tortillas </p>
    </div>

     <div class ="two">
       <img src="../assets/IMG_2931.jpg" alt="burritos">
        <h3>Choose your toppings</h3>
      <p>Korean chicken, birria, or pork carnitas</p>
     </div>

     <div class ="three">
       <img src="../assets/IMG_2931.jpg" alt="burritos">
      <h3>Choose your sauce</h3>
      <p>Jalapeño mayo, spicy habanero chili, or mild tomato salsa</p>
     </div>

     <div class ="four">
       <img src="../assets/IMG_2931.jpg" alt="burritos">
      <h3>Time to Eat!</h3>
      <p>Enjoy taco your taco, but don’t forget to grab a drink</p>
     </div>

      <a href="#">Order Now</a>
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

section.middle-guts {
  background-color: #DC6327;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem; 
}

.middle-guts {

  .section-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
    flex-wrap: nowrap;
  }

  .text-container {
    flex: 1;
    min-width: 300px;
    max-width: 600px;
    color: #f9f9f9;
    text-align: left;

    h3 {
      font-size: 27px;
      font-family: "PT Sans", sans-serif;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    p{
      font-size: 18px;
      line-height: 1.6;
      margin-bottom: 2rem;
      font-family: "Arial", sans-serif;
    }

    a {
      display: inline-block;
      background-color: #f9f9f9;
      color: #DC6327;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      text-transform: uppercase;
      font-weight: bold;
      text-decoration: none;
      font-size: 18px;
      font-family: "Arial", sans-serif;
    }
  }
  .image-container img{
   flex: 1;
   max-width: 500px;
   width: 100%;
   height: auto;
   border-radius: 12px;
   object-fit: cover;
  }
}

section.create {
  display: flex;
  padding: 10rem 0 10rem 0;
  
  img {
    max-width: 90%;
    max-height: auto;
    border-radius: 10px;             
  }
  h3{
    font-size: 18px;
    font-family: "PT Sans", sans-serif;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  p {
    font-size: 14px;
    margin-bottom: 2rem;
    font-family: "Arial", sans-serif;
  }
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