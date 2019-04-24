import Vuex from 'vuex';

export const state = () => {
    loadedPosts: []
}

export const mutations = {
    setPosts(state, posts) {
        state.loadedPosts = posts
    },
    addPost(state, post) {
        state.loadedPosts.push(post)
    },
    editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
        state.loadedPosts[postIndex] = editedPost
    }
}

export const actions = {
    nuxtServerInit(vuexContext, context) {
        return context.app.$axios
            .$get('/posts.json')
            .then(data => {
                const postsArray = []
                for (const key in data) {
                    postsArray.push({ ...data[key], id: key })
                }
                vuexContext.commit('setPosts', postsArray)
            })
            .catch(e => context.error(e))
    },
    addPost(vuexContext, post) {
        const createdPost = {
            ...post,
            updatedDate: new Date()
        }
        return this.$axios
            .$post('/posts.json', createdPost)
            .then(data => {
                vuexContext.commit('addPost', { ...createdPost, id: data.name })
            })
            .catch(event => console.log('[event]', event))
    },
    editPost(vuexContext, editedPost) {
        return this.$axios
            .$put('/posts/' + editedPost.id + '.json', editedPost)
            .then(res => {
                vuexContext.commit('editPost', editedPost)
            })
            .catch(e => console.log('[e]', e))
    },
    setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', postsArray)
    }
}

export const getters = {
    loadedPosts(state) {
        return state.loadedPosts
    }
}