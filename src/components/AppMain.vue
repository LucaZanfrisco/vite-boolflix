<script>
import CardElement from './CardElement.vue'
import { store } from '../store';

export default {
    name: 'AppMain',
    components:{
        CardElement,
    },
    data(){
        return{
            store,
        }
    },
    methods:{
        // Funzione che controlla la lingua e la corregge se non coincidente a quella della nazione (mancano ancora delle nazioni)
        flag(movie){
            switch(movie.original_language){
                case 'en':
                    return `${store.config.apiFlag}/US/flat/16.png`;
                case 'ja':
                    return `${store.config.apiFlag}/JP/flat/16.png`;
                case 'ko':
                    return `${store.config.apiFlag}/KR/flat/16.png`;
                case 'zh':
                    return `${store.config.apiFlag}/CN/flat/16.png`;    
                case 'da':
                    return `${store.config.apiFlag}/DK/flat/16.png`;
                default:
                    return `${store.config.apiFlag}/${movie.original_language.toUpperCase()}/flat/16.png`;
            }
        },
        // Funzione che da come risultato l'immagine di copertina
        poster(movie){
            return `${store.config.apiImage}${movie.poster_path}`;
        },
        // Funzione che converte il voto in stelle
        stars(movie){
            return Math.ceil(movie.vote_average / 2); 
        }
    },
}
</script>
<template lang="">
    <main class="container mt-5">
        <div class="text-center mb-3 fs-4 fw-bold" v-if="store.generalList.general.length !== 0">Film/Serie Trovati: {{ store.generalList.general.length }}</div>
        <div v-else class="text-center mb-3 fs-4 fw-bold">Nessun Film/Serie trovato</div>
        <!-- Lista delle card -->
        <ul class="row justify-content-center">
            <!-- Elemento della lista che si ripete in base alla lunghezza della lista general -->
            <li v-for="movie in store.generalList.general" class="col-6 col-md-4 col-lg-3 col-xxl-2 my-3">
                <!-- Componente carta dove vengono passati i dati tramite props -->
                <CardElement :poster="poster(movie)"
                :title="movie.title"
                :original_title="movie.original_title"
                :flag="flag(movie)"
                :stars="stars(movie)"
                :language="movie.original_language"></CardElement>
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>
    
</style>