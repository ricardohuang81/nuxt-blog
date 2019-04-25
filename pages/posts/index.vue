<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts" />
    </div>
</template>

<script>
// const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
    // fetch(context) {
    //     // if (context.store.state.loadedPosts.length > 0) {
    //     //     return null;
    //     // }
        
    //     .then(data => {
    //         context.store.commit('setPosts', data.loadedPosts)
    //     })
    //     .catch(e => {
    //         context.error(new Error())
    //     })
    // },
    middleware: 'log',
    computed: {
        loadedPosts() {
            return this.$store.getters.loadedPosts
        }
    }
    // created() {
    //     this.$store.dispatch('setPosts', this.loadedPosts)
    //     // console.log("[this.$store.getters.loadedPosts]", this.$store.getters.loadedPosts)
    // }
}
</script>

<style scoped>

.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
