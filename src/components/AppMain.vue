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
                return `${store.config.apiFlag}/US/flat/16.png`;
            }else if(movie.original_language === 'ja'){
                return `${store.config.apiFlag}/JP/flat/16.png`;
            }else if(movie.original_language === 'ko'){
                return `${store.config.apiFlag}/KR/flat/16.png`;
            }else if(movie.original_language === 'zh'){
                return `${store.config.apiFlag}/CN/flat/16.png`;    
            }else if(movie.original_language === 'da'){
                return `${store.config.apiFlag}/DK/flat/16.png`;
            }else{
                return `${store.config.apiFlag}/${movie.original_language.toUpperCase()}/flat/16.png`;
            }
        },
        poster(movie){
            return `${store.config.apiImage}${movie.poster_path}`;
        },
        stars(movie){
            return Math.ceil(movie.vote_average / 5); 
        }
    },
}
</script>
<template lang="">
    <main>
        <ul>
            <li v-for="movie in store.generalList.general">
                <div><img :src="poster(movie)" alt=""></div>
                <div>{{ movie.title }}</div>
                <div>{{ movie.original_title }}</div>
                <div><img :src="flag(movie)" :alt="flag(movie)"></div>
                <div v-for="n in 5"><font-awesome-icon icon="fa-solid fa-star" /> {{ stars(movie) }}</div>
                <div>------</div>
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>
    
</style>