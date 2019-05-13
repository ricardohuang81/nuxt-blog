<template>
  <div class="home-page">
    <section class="intro">
      <!-- <h1>Flippin' Supreme</h1> -->
      <img src="../assets/images/Supreme-Logo-Red-White-01.jpg">
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>


<script>

export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-color: #778899;
}

.intro img {
  display: block;
  height: 92%;
  width: 50%;
  margin: auto;
  margin-top: 10px;
}

/* .intro h1 {
  text-align: center;
  position: absolute;
  top: 20%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: #FF0000;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
} */

/* @media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
} */

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}


</style>

