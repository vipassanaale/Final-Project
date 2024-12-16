<script setup>

</script>

<template>
  <h2>Menu Options</h2>
  <section class="top-menu">
    <aside>
      <img src="../assets/spencer-davis-hs2076lrvKQ-unsplash.jpg" alt="tacos menu">
      <p>Taco</p>
    </aside>


    <aside>
      <img src="../assets/IMG_2931.jpg" alt="burritos">
      <p>Burritos</p>
    </aside>


    <aside>
      <img src="../assets/jarritos-mexican-soda-ncTkuQ9-XFQ-unsplash.jpg" alt="jarritos bottles">
      <p>Drinks</p>
    </aside>

    <div class="order">
    <aside>
      <img src="../assets/IMG_2939.jpg" alt="birria burritos">
      <p>Order Now</p>
    </aside>
    </div>
  </section>
</template>

<style scoped>
/*Phone First*/

h2 {
  text-align: center;
  font-size: 32px;
  font-family: "PT Sans", sans-serif;
  justify-content: center;
}

section.top-menu {
  display: flex;
  flex-direction: column;
  gap: 0;

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem 0 1rem;

    p {
      text-align: center;
      font-family: "Arial", sans-serif;
      justify-content: space-between;
      margin: 0 6rem 10rem 8.9rem;
      font-weight: bold;
      font-size: 28px;
    }
    img {
      justify-content: space-between;
      margin: 3rem;
      max-width: 40%;
      height: auto;
      border-radius: 100%;
      border: solid 7px #1D84A6;
    }
  }
  div.order{
    display: none;
  }
}

@media screen and (min-width: 600px) {
  section.top-menu {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2rem;

    aside {
      flex-direction: column;
      width: 16%;
      text-align: center;

      img {
        max-width: 80%;
        margin-bottom: 1rem;
        flex-direction: row;
        border: solid 7px #1D84A6;
      }

      p {
        font-size: 22px;
      }
    }
  }
  h2 {
    width: 100%;
    font-size: 36px;
    text-align: center;
    margin-bottom: 2rem;
  }
  div.order{
    display: inline-block;
  }
}

</style>