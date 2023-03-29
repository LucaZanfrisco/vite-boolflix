<script>
import { store } from '../store';
export default {
    name: 'AppMain',
    data(){
        return{
            store,
        }
        
    }
}
</script>
<template lang="">
    <main>
        <ul>
            <li v-for="movie in this.store.generalList.movie">
                <div>{{ movie.title }}</div>
                <div>{{ movie.original_title }}</div>
                <div>{{ movie.original_language }}</div>
                <div>{{ movie.vote_average }}</div>
                <div>------</div>
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>
    
</style>