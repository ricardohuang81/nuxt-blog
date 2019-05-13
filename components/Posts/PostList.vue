<template>
    <section class="post-list">
        <PostPreview
            v-for="post in posts"
            :key="post.id"
            :id="post.id"
            :is-admin="isAdmin"
            :thumbnail="post.thumbnail"
            :title="post.title"
            :previewText="post.previewText" 
        />
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
    components: {
        PostPreview
    },
    props: {
        isAdmin: {
            type: Boolean,
            default: false
        },
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.post-list {
    background-image: url('../../assets/images/Mock-Up-01-edited.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>