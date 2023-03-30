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
  <header>
    <div>
      <div>
        <img :src="store.config.logoNetflix" alt="logo" class="img-fluid"/>
      </div>
      <div>
        <ul>
            <li>Home</li>
            <li>Film</li>
            <li>TV Series</li>
            <li>Recently Added</li>
            <li>My List</li>
        </ul>
      </div>
      
      <div>
        <div>
          <input type="text" v-model="store.searchName" minlength="1" placeholder="Cerca film o serie tv" class="form-control text-center"/>
          <button type="button" @click="$emit('search')" class="btn btn-secondary">Cerca</button>
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

  li {
    cursor: pointer;
    border-radius: 10px;
    margin: 0 .9375rem;

    &:hover {
      text-decoration: underline 5px white;
    }
  }
}
</style>
