import {createStore} from 'vuex'

export default createStore({
    state: {
        basketStatus: false,
        bodyScroll: false,
    },
    getters: {},
    mutations: {
        changeBasketStatus(state) {
            state.basketStatus = !state.basketStatus;
        },
        lockBodyScroll() {
            let body = document.querySelector("body");
            body.classList.add("locked");
        },
        unLockBodyScroll() {
            let body = document.querySelector("body");
            body.classList.remove("locked");
        },
    },
    actions: {},
    modules: {}
})
