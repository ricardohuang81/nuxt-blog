import Vuex from 'vuex';
import axios from 'axios';


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
        return axios.get(process.env.baseUrl + '/posts.json')
            .then(res => {
                const postsArray = []
                for (const key in res.data) {
                    postsArray.push({ ...res.data[key], id: key })
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
        return axios
            .post(process.env.baseUrl + '/posts.json', createdPost)
            .then(result => {
                vuexContext.commit('addPost', { ...createdPost, id: result.data.name })
            })
            .catch(event => console.log('[event]', event))
    },
    editPost(vuexContext, editedPost) {
        return axios.put(process.env.baseUrl + '/posts/' + editedPost.id + '.json', editedPost)
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