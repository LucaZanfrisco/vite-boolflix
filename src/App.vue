<script>
  import axios from 'axios';
  import { store } from './store';
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  export default {
    name: 'App',
    components:{
      AppHeader,
      AppMain
    },
    data(){
      return{
        store,
      }
    },
    methods:{
      search(){
        this.store.generalList.movie = []
        axios.get(store.confing.apiMovie,{
        params: {
          api_key: store.confing.apiKey,
          query: store.searchName,
        }
      }).then((response) => {
        console.log(response.data);
        response.data.results.forEach((element) => {
          const {id, original_language,original_title,title,vote_average} = element
          this.store.generalList.movie.push({
            id,
            original_language,
            original_title,
            title,
            vote_average
          })
        });
        console.log(this.store.generalList.movie)
      })
      }
    },
    created(){
      this.search();
    }
  }
</script>

<template>
  <AppHeader @search="search"></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped>

</style>
