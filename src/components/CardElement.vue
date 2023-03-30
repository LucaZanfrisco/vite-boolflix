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
    }
}
</script>
<template>
        <div class="poster">
            <img :src="poster" :alt="title" class="img-fluid border border border-opacity-25 border-light poster-path">
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
    overflow-y: auto;
    &:hover .poster-path{
        opacity: 25%;
    }
    &:hover .info{
        
        display: block;
    }
}

.info {
    position: absolute;
    top: 10%;
    left: 10%;
    transform: translate(-10%,-10%);
    padding: .625rem;
    display: none;
}
</style>