<script>
import { store } from "../store";
export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
};
</script>
<template lang="">
  <header class="container">
    <div class="row justify-content-center justify-content-sm-between align-items-center">
      <div class="col-12 col-sm-2 text-center mb-5 mb-sm-0">
        <img :src="store.config.logoNetflix" alt="logo" class="img-fluid"/>
      </div>
      <div class="col-12 col-sm-6">
        <ul class="row flex-nowrap">
            <li class="col-auto">Home</li>
            <li class="col-auto">Film</li>
            <li class="col-auto">TV Series</li>
            <li class="col-auto">Recently Added</li>
            <li class="col-auto">My List</li>
        </ul>
      </div>
      
      <div class="col-12 col-sm-2">
        <div class="row">
            <div class="col-8">
                <input type="text" v-model="store.searchName" minlength="1" placeholder="Cerca film o serie tv" class="form-control text-center"/>
            </div>
            <div class="col-4">
                <button type="button" @click="$emit('search')" class="btn btn-secondary">Cerca</button>
            </div>
        </div>
      </div>
    </div>
    <!-- <div>Film/Serie Trovati: {{ store.generalList.general.length }}</div> -->
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 100px;
  padding: 1.25rem;
    li{
    cursor: pointer;
    border-radius: 10px;
    margin: 0 .9375rem;
    &:hover{
        text-decoration: underline 5px white;
    }
    }
}
</style>
