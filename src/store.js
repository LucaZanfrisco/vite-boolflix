import { reactive } from "vue";

export const store = reactive({
  // Dati per la configurazione iniziale che teoricamente non devono cambiare
  config: {
    apiMovie: "https://api.themoviedb.org/3/search/movie",
    apiSeries: "https://api.themoviedb.org/3/search/tv",
    apiFlag: "https://flagsapi.com",
    apiImage: "https://image.tmdb.org/t/p/w342",
    logoNetflix:
      "https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
  },
  // Paramatri da passare alla chiamata API
  apiParams: {
    apiKey: "a29c9e647c80d6250e34be499ecb299e",
    query: "",
    includeAdult: false,
    language: "it-IT",
  },
  // Liste per le risposte dell'API: movie=film, series=serie tv, general=film/serieTV
  generalList: {
    movie: [],
    series: [],
  },
  // Dato che legge l'input nel campo di ricerca
//   searchName: "",
});
