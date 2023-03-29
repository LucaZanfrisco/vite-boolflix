import { reactive } from "vue";

export const store = reactive({
    config: {
        apiKey: 'a29c9e647c80d6250e34be499ecb299e',
        apiMovie: 'https://api.themoviedb.org/3/search/movie',
        apiSeries: 'https://api.themoviedb.org/3/search/tv',
        apiFlag : 'https://flagsapi.com',
    },
    generalList: {
        movie: [],
        series: [],
        general: [],
    },
    flagList: [],
    searchName: '',
})