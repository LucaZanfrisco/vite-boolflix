<script>
import { store } from '../store';
export default {
    name: 'AppHeader',
    data(){
        return{
            store,
        }
    }
}
</script>
<template lang="">
    <header>
        <div>Film/Serie Trovati: {{ store.generalList.general.length }}</div>
        <label for="searchText">Cerca il nome del film</label>
        <input type="text" name="searchText" id="searchText" v-model="store.searchName" minlength="1">
        <button type="button" @click="$emit('search')">Cerca</button>
    </header>
</template>

<style lang="scss" scoped>
    
</style>