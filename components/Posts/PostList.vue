<template>
    <section class="post-list">
        <PostPreview
            id="1"
            :is-admin="isAdmin"
            thumbnail="https://stockx.imgix.net/New-Balance-997S-Bodega.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1552959563&w=400"
            title="New Balance Bodega"
            previewText="NB Bodega" 
        />
        <PostPreview
            id="2"
            :is-admin="isAdmin"
            thumbnail="https://stockx.imgix.net/Li-Ning-Way-Of-Wade-6-The-Edition-Boutique-Art-Basel.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1538080256&w=400"
            title="LiNing Wades"
            previewText="LiNing Wade" 
        />
        <PostPreview
            id="3"
            :is-admin="isAdmin"
            thumbnail="https://stockx-360.imgix.net/New-Balance-997-Aime-Leon-Dore/Images/New-Balance-997-Aime-Leon-Dore/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1555081992&w=400"
            title="New Balance Aime Leon"
            previewText="NB Aime Leon" 
        />
        <PostPreview
            id="4"
            :is-admin="isAdmin"
            thumbnail="https://stockx.imgix.net/New-Balance-997-Aime-Leon-Dore-Pink-Tongue.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1555081992&w=400"
            title="New Balance Aime Leon Dore Pink"
            previewText="NB Dore Pink" 
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
        }
    }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>