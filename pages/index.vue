<template>
  <div class="home-page">
    <section class="intro">
      <h1>Dope Kicks</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>


<script>
// const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
  // asyncData(context, callback) {
  //   setTimeout(() => {
  //     callback(null, {loadedPosts: 
  //       [{ 
  //         id: '1', title: 'LiNing D-Wades', previewText: 'LiNing D-Wades', thumbnail: 'https://stockx.imgix.net/Li-Ning-Way-Of-Wade-6-The-Edition-Boutique-Art-Basel.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1538080256&w=400'
  //       },
  //       { 
  //         id: '2', title: 'New Balance Bodegas', previewText: 'Bodegas', thumbnail: 'https://stockx.imgix.net/New-Balance-997S-Bodega.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1552959563&w=400'
  //       },
  //       { 
  //         id: '3', title: 'New Balance Aime Leon Dore', previewText: 'Aime Leon Dores', thumbnail: 'https://stockx-360.imgix.net/New-Balance-997-Aime-Leon-Dore/Images/New-Balance-997-Aime-Leon-Dore/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1555081992&w=400'
  //       },
  //       { 
  //         id: '4', title: 'New Balance Aime Leon Dore', previewText: 'Aime Leon Dore Pinks', thumbnail: 'https://stockx.imgix.net/New-Balance-997-Aime-Leon-Dore-Pink-Tongue.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1555081992&w=400'
  //       }]
  //       })
  //   }, 1500)
  // }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/flight-club.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  text-align: center;
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
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

