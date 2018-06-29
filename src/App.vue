<template>
    <div>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    components: {
    },
    methods: {
        ...mapActions(['getUserInfo']),
        bindEvent() {
            GLOBAL.$center.$on('ajax_handle_error', (resData) => {
                if(!!resData.config.noShowDefaultError) return
                this.$store.commit('SET_TO_LOGIN_PATH', this.$route.path)
                this.$store.commit('SET_TO_LOGIN', true)
                return
            })
            GLOBAL.$center.$on('request_error', (resData) => {
            })
            GLOBAL.$center.$on('response_error', (resData) => {
            })
            GLOBAL.$center.$on('scrollToTop', (resData) => {
            })
        },
        init() {
            this.getUserInfo()
        }
    },
    created() {
        this.init()
        this.bindEvent()
    }
}
</script>
<style>
@import './assets/style/index.scss';
</style>

