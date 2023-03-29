import { reactive } from "vue";

export const store = reactive({
    confing: {
        apiKey: 'a29c9e647c80d6250e34be499ecb299e',
        apiMovie: 'https://api.themoviedb.org/3/search/movie',
        apiSeries: 'https://api.themoviedb.org/3/tv/'
    },
    generalList: {
        movie: [],
        series: []
    },
    searchName: '',
})