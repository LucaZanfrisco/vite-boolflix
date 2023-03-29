<script>
import { store } from '../store';
export default {
    name: 'AppMain',
    data(){
        return{
            store,
        }
    },
    methods:{
        flag(movie){
            if(movie.original_language === 'en'){
                return `${store.config.apiFlag}/US/flat/16.png`
            }else if(movie.original_language === 'ja'){
                return `${store.config.apiFlag}/JP/flat/16.png`
            }else if(movie.original_language === 'ko'){
                return `${store.config.apiFlag}/KR/flat/16.png`
            }else if(movie.original_language === 'zh'){
                return `${store.config.apiFlag}/CN/flat/16.png`    
            }else if(movie.original_language === 'da'){
                return `${store.config.apiFlag}/DK/flat/16.png`
            }else{
                return `${store.config.apiFlag}/${movie.original_language.toUpperCase()}/flat/16.png`
            }
        }
    }
}
</script>
<template lang="">
    <main>
        <ul>
            <li v-for="movie in store.generalList.general">
                <div>{{ movie.title }}</div>
                <div>{{ movie.original_title }}</div>
                <div><img :src="flag(movie)" :alt="flag(movie)"></div>
                <div>{{ movie.vote_average }}</div>
                <div>------</div>
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>
    
</style>