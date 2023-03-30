<script>
export default {
    name: 'Card',
    props: {
        poster: String,
        title: String,
        original_title: String,
        flag: String,
        stars: Number,
    }
}
</script>
<template>
    <div>
        <div><img :src="poster" alt=""></div>
        <div>{{ title }}</div>
        <div>{{ original_title }}</div>
        <div><img :src="flag" :alt="flag"></div>
        <div >
            <font-awesome-icon icon="fa-solid fa-star" class="vote" v-for="n in stars"/>
            <font-awesome-icon icon="fa-solid fa-star" v-for="n in 5-stars"/>
        </div>
    </div>
</template>
<style lang="scss">
.vote{
    color: gold;
}
</style>