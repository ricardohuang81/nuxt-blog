<template>
    <div class="single-post-page">
        <section class="post">
            <h1 class="post-title">{{ loadedPost.title }}</h1>
            <div class="post-details">
                <div class="post-detail">Last Updated on {{ loadedPost.updatedDate }}</div>
                <div class="post-detail">Written By {{ loadedPost.author }}</div>
            </div>
            <p class="post-content">{{ loadedPost.content }}</p>
        </section>
        <section class="post-feedback">
            <p class="post-content">Let me know what you think about this post, send an email to <a href="mailto:feedback@my-sick-domain.com">feedback@my-sick-domain.com</a>.</p>
        </section>
    </div>
</template>

<script>

export default {
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPost: { 
              id: '1', 
              title: "LiNing D-Wades (ID: " + context.route.params.id + ")", 
              previewText: 'LiNing D-Wades', 
              author: 'Ricardo',
              updatedDate: new Date(),
              content: 'YOLO coloring book whatever viral truffaut dreamcatcher. Kickstarter craft beer small batch whatever before they sold out coloring book. Tacos jean shorts jianbing neutra, chicharrones yr health goth narwhal meggings pabst cray. Subway tile chillwave narwhal selfies, lyft marfa skateboard helvetica biodiesel fingerstache. Messenger bag gentrify truffaut enamel pin unicorn.',
              thumbnail: 'https://stockx.imgix.net/Li-Ning-Way-Of-Wade-6-The-Edition-Boutique-Art-Basel.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1538080256&w=400'
          }
        })
      }, 1000)
    })
    .then(data => {
      return data
    })
    .catch(e => {
      context.error(new Error())
    })
  }
}

</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>