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
    <div>
        <div><img :src="poster" :alt="title" class="img-fluid border border border-opacity-25 border-light"></div>
        <div>{{ title }}</div>
        <div>{{ original_title }}</div>
        <div><img :src="flag" :alt="language" class="img-fluid"></div>
        <div >
            <font-awesome-icon icon="fa-solid fa-star" class="vote" v-for="n in stars"/>
            <font-awesome-icon icon="fa-solid fa-star" v-for="n in 5-stars"/>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.vote{
    color: gold;
}
</style>