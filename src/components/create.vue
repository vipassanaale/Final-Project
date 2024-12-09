<script setup>

</script>

<template>
  <h2>Order Now</h2>
  <section class="create">
    <br/>
    <aside>
    <div class="one">
      <img src="../assets/IMG_2931.jpg" alt="burritos">
      <h3>Choose your shell</h3>
      <p>whole grain soft shells, plain corn tortillas, or Plain flour tortillas </p>
    </div>

    <div class="two">
      <img src="../assets/IMG_2931.jpg" alt="burritos">
      <h3>Choose your toppings</h3>
      <p>Korean chicken, birria, or pork carnitas</p>
    </div>
    </aside>

    <aside>
    <div class="three">
      <img src="../assets/IMG_2931.jpg" alt="burritos">
      <h3>Choose your sauce</h3>
      <p>Jalapeño mayo, spicy habanero chili, or mild tomato salsa</p>
    </div>

    <div class="four">
      <img src="../assets/IMG_2931.jpg" alt="burritos">
      <h3>Time to Eat!</h3>
      <p>Enjoy taco your taco, but don’t forget to grab a drink</p>
    </div>
    </aside>
  </section>

  <a href="#">Order Now</a>
</template>

<style scoped>
/*mobile first*/

h2{
  font-family: "PT Sans", sans-serif;
  font-size: 28px;
  text-align: center;
}

section.create {
  display: flex;
  gap: 1rem;

  h3 {
    font-size: 18px;
    font-family: "PT Sans", sans-serif;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    max-height: auto;
    border-radius: 10px;
  }

  p {
    font-size: 14px;
    margin-bottom: 2rem;
    font-family: "Arial", sans-serif;
  }
}

@media screen and (width > 600px) {
  flex-direction: row;
  flex-wrap: wrap;

  aside{
    flex-basis: 48%;
  }


}
</style>