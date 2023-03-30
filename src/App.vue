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
        if(store.searchName !== ''){
          store.generalList.general = [];
          store.generalList.series = [];
          store.generalList.movie = [];
          axios.get(store.config.apiMovie,{
          params: {
            api_key: store.config.apiKey,
            query: store.searchName,
            include_adult: false,
            language: 'it-IT'
          }
        }).then((response) => {
          response.data.results.forEach((element) => {
            const {id, original_language,original_title,title,vote_average,poster_path} = element;
            const movie = {
              id,
              original_language,
              original_title,
              title,
              vote_average,
              poster_path
            }
            store.generalList.movie.push(movie);
            store.generalList.general.push(movie)
          });
        })
        axios.get(store.config.apiSeries,{
          params:{
            api_key: store.config.apiKey,
            query: store.searchName,
            include_adult: false,
            language: 'it-IT'
          }
        }).then((response) => {
          response.data.results.forEach((element) => {
            const { id, original_language,original_name,name,vote_average,poster_path} = element;
            const series = {
              id,
              original_language,
              original_title: original_name,
              title: name,
              vote_average,
              poster_path
            }
            store.generalList.series.push(series);
            store.generalList.general.push(series);
          });
        })
        console.log(store.generalList.series);
        console.log(store.generalList.movie)
        console.log(store.generalList.general);
        }else{
          store.generalList.movie = [];
          store.generalList.general = [];
        }
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
