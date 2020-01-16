<template>
  <nuxt-link :to="postLink"  class="post-preview">
    <article>
      <div
        class="post-thumbnail"
        v-bind:style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
      <div class="post-content"></div>
        <h1>{{ title }}</h1>
        <p>{{ previewText }}</p>
    </article>
  </nuxt-link>
</template>

<script>
export default {
    name: 'PostPreview',
    props: {
        id: {
            type: String,
            required: true
        },
        isAdmin: {
          type: Boolean,
          required: true
        },
        title: {
            type: String,
            required: true
        },
        previewText: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        }
    },
    computed: {
      postLink() {
        return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
      }
    }
}
</script>

<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 70%;
  margin: 20px;
}

.post-preview h1,
.post-preview p {
  text-align: center;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 320px;
    margin: 40px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 240px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  /* background-color: #7FFFD4; */
  background-color: #FFC0CB;
}
</style>
