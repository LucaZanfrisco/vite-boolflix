<script>
import CardElement from './CardElement.vue'
import { store } from '../store';
export default {
    name: 'AppMain',
    components:{
        CardElement,
    },
    data(){
        return{
            store,
        }
    },
    methods:{
        flag(movie){
            switch(movie.original_language){
                case 'en':
                    return `${store.config.apiFlag}/US/flat/16.png`;
                case 'ja':
                    return `${store.config.apiFlag}/JP/flat/16.png`;
                case 'ko':
                    return `${store.config.apiFlag}/KR/flat/16.png`;
                case 'zh':
                    return `${store.config.apiFlag}/CN/flat/16.png`;    
                case 'da':
                    return `${store.config.apiFlag}/DK/flat/16.png`;
                default:
                    return `${store.config.apiFlag}/${movie.original_language.toUpperCase()}/flat/16.png`;
            }
        },
        poster(movie){
            return `${store.config.apiImage}${movie.poster_path}`;
        },
        stars(movie){
            return Math.ceil(movie.vote_average / 2); 
        }
    },
}
</script>
<template lang="">
    <main>
        <ul>
            <li v-for="movie in store.generalList.general">
                <CardElement :poster="poster(movie)"
                :title="movie.title"
                :original_title="movie.original_title"
                :flag="flag(movie)"
                :stars="stars(movie)"></CardElement>
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>
    
</style>