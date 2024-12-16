<script setup>

</script>

<template>
<section class="instagram">
  <div class="instagram">
    <h3>Find Us on Instagram</h3>
    <p>Check us out on Instagram and make sure to keep those notifications on and ready to watch out for special promotions and events we hold on weekends!</p>
    <p><strong>Don’t forget to tag us with the hashtag #localzcafe! </strong></p>
    <a class="orange-btn" href="#">Instagram</a>
  </div>
  <div class="pictures">
    <img src="" alt="feed">
    <img src="" alt="feed">
    <img src="" alt="feed">
    <img src="" alt="feed">
    <img src="" alt="feed">
    <img src="" alt="feed">
  </div>
</section>
</template>

<style scoped>
/*mobile first*/
section.instagram {
  padding: 2rem;
  color: #1a1a1a;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  div.instagram a.orange-btn {
    display: inline-block;
  }

  div.pictures{
    img{
      max-width: 100%;
      height: auto;
    }
  }

}



@media screen and (min-width: 600px) {
  section.instagram {
    flex-direction: row;
    text-align: center;
    align-items: flex-start;
    gap: 2rem;
    padding: 5rem;

    div.instagram{
      flex: 1;
      flex-direction: column;
      margin: 2rem;
    }
    div.pictures img{
        flex: 1;
        max-width: 50%;
        border-radius: 10px;
      }
    }
  }

</style>