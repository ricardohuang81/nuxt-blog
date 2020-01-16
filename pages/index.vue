<template>
  <div class="home-page">
    <section class="intro">
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
  background-color: #7FFFD4;
}

.intro img {
  display: block;
  height: 92%;
  width: 50%;
  margin: auto;
  margin-top: 10px;
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

