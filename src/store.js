import { reactive } from "vue";

export const store = reactive({
    config: {
        apiKey: 'a29c9e647c80d6250e34be499ecb299e',
        apiMovie: 'https://api.themoviedb.org/3/search/movie',
        apiSeries: 'https://api.themoviedb.org/3/search/tv',
        apiFlag : 'https://flagsapi.com',
        apiImage: 'https://image.tmdb.org/t/p/w342',
        logoNetflix: 'https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
    },
    generalList: {
        movie: [],
        series: [],
        general: [],
    },
    searchName: '',
})