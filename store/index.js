import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            {
                                id: '1', title: 'LiNing D-Wades', previewText: 'LiNing D-Wades', thumbnail: 'https://stockx.imgix.net/Li-Ning-Way-Of-Wade-6-The-Edition-Boutique-Art-Basel.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1538080256&w=400'
                            },
                            {
                                id: '2', title: 'New Balance Bodegas', previewText: 'Bodegas', thumbnail: 'https://stockx.imgix.net/New-Balance-997S-Bodega.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1552959563&w=400'
                            },
                            {
                                id: '3', title: 'New Balance Aime Leon Dore', previewText: 'Aime Leon Dores', thumbnail: 'https://stockx-360.imgix.net/New-Balance-997-Aime-Leon-Dore/Images/New-Balance-997-Aime-Leon-Dore/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1555081992&w=400'
                            },
                            {
                                id: '4', title: 'New Balance Aime Leon Dore', previewText: 'Aime Leon Dore Pinks', thumbnail: 'https://stockx.imgix.net/New-Balance-997-Aime-Leon-Dore-Pink-Tongue.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1555081992&w=400'
                            }
                        ]);
                        resolve();
                    }, 1000);
                });
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore