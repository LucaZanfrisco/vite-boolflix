<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    // Metodo che chiama l'API al pulsante Cerca
    search() {
      // Controllo se l'input di testo non è vuoto
      if (store.searchName !== '') {
        // Svuotamento di tutte le liste
        this.store.generalList.series = [];
        this.store.generalList.movie = [];
        //  Chiama all'API per i film
        axios.get(this.store.config.apiMovie, {
          params: {
            api_key: this.store.apiParams.apiKey,
            query: this.store.apiParams.query,
            include_adult: this.store.apiParams.includeAdult,
            language: this.store.apiParams.language
          }
        }).then((response) => {
          response.data.results.forEach((element) => {
            const { id, original_language, original_title, title, vote_average, poster_path, overview } = element;
            const movie = {
              id,
              original_language,
              original_title,
              title,
              vote_average,
              poster_path,
              overview
            }
            this.store.generalList.movie.push(movie);
          });
        })
        // -------------------

        // Chiamata all'API per le serie 
        axios.get(this.store.config.apiSeries, {
          params: {
            api_key: this.store.apiParams.apiKey,
            query: this.store.apiParams.query,
            include_adult: this.store.apiParams.includeAdult,
            language: this.store.apiParams.language
          }
        }).then((response) => {
          response.data.results.forEach((element) => {
            const { id, original_language, original_name, name, vote_average, poster_path, overview } = element;
            const series = {
              id,
              original_language,
              original_title: original_name,
              title: name,
              vote_average,
              poster_path,
              overview
            }
            this.store.generalList.series.push(series);
          });
        })
        // ------------
        // Svuotamento delle lista al cerca vuoto
      } else {
        this.store.generalList.movie = [];
        this.store.generalList.series = [];
      }
    }
  }, 
  computed:{
     general(){
      return [...this.store.generalList.movie,...this.store.generalList.series]
    }
  },
  created() {
    // Chiamata della ricerca alla creazione dell'istanza
    this.search();
  }
}
</script>

<template>
  <AppHeader @search="search"></AppHeader>
  <AppMain :result="general"></AppMain>
</template>

<style lang="scss" scoped></style>
