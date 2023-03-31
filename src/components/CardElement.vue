<script>
export default {
    name: 'Card',
    props: {
        poster: String,
        title: String,
        original_title: String,
        flag: String,
        stars: Number,
        language: String,
        overview: String
    }
}
</script>
<template>
    <div class="poster">
        <!-- Elemento che viene mostrato nel caso in cui il poster non fosse disponibile -->
        <div v-if="poster === null" class="fallback-poster">
            <div class="fs-1 text-center"><font-awesome-icon icon="fa-solid fa-circle-exclamation" /></div>
            <div class="text-center">Poster Non Disponibile</div>
        </div>
        <!-- Immagine di copertina -->
        <img v-else :src="poster" :alt="title" class="img-fluid border border border-opacity-25 border-light poster-path">
        <!-- Informazioni riguardanti film o serie tv che compaiono all'hover sul poster -->
        <div class="info">
            <div v-if="title == original_title" class="fs-4">{{ title }}</div>
            <div v-else>
                <div class="fs-4 mb-3">{{ title }}</div>
                <div>{{ original_title }}</div>
            </div>
            <div><img :src="flag" :alt="language" class="img-fluid"></div>
            <div>
                <font-awesome-icon icon="fa-solid fa-star" class="vote" v-for="n in stars" />
                <font-awesome-icon icon="fa-solid fa-star" v-for="n in 5 - stars" />
            </div>
            <div>{{ overview }}</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.vote {
    color: gold;
}

.poster {
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 100%;

    &:hover .poster-path,&:hover .fallback-poster {
        opacity: 15%;
    }

    &:hover .info {

        display: block;
    }

    .fallback-poster {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

.info {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: .625rem;
    display: none;
    overflow-y: scroll;
}</style>