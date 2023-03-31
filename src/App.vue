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
      // Metodo che chiama l'API al pulsante Cerca
      search(){
        // Controllo se l'input di testo non è vuoto
        if(store.searchName !== ''){
          // Svuotamento di tutte le liste
          store.generalList.general = [];
          store.generalList.series = [];
          store.generalList.movie = [];
          //  Chiama all'API per i film
          axios.get(store.config.apiMovie,{
          params: {
            api_key: store.config.apiKey,
            query: store.searchName,
            include_adult: false,
            language: 'it-IT'
          }
        }).then((response) => {
          response.data.results.forEach((element) => {
            const {id, original_language,original_title,title,vote_average,poster_path,overview} = element;
            const movie = {
              id,
              original_language,
              original_title,
              title,
              vote_average,
              poster_path,
              overview
            }
            store.generalList.movie.push(movie);
            store.generalList.general.push(movie)
          });
        })
        // -------------------
        
        // Chiamata all'API per le serie 
        axios.get(store.config.apiSeries,{
          params:{
            api_key: store.config.apiKey,
            query: store.searchName,
            include_adult: false,
            language: 'it-IT'
          }
        }).then((response) => {
          response.data.results.forEach((element) => {
            const { id, original_language,original_name,name,vote_average,poster_path,overview} = element;
            const series = {
              id,
              original_language,
              original_title: original_name,
              title: name,
              vote_average,
              poster_path,
              overview
            }
            store.generalList.series.push(series);
            store.generalList.general.push(series);
          });
        })
        // ------------

        // Svuotamento delle lista al cerca vuoto
        }else{
          store.generalList.movie = [];
          store.generalList.general = [];
        }
      }
    },
    created(){
      // Chiamata della ricerca alla creazione dell'istanza
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
