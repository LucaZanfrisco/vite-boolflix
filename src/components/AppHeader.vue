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
<template >
  <!-- Header -->
  <header class="border-bottom border-danger border-2">
    <!-- Container generale -->
    <div class="container">
      <!-- Riga flex -->
      <div class="row justify-content-center align-items-lg-center">
        <!-- Logo -->
        <div class="col-12 col-lg-1 text-center mb-3 mb-lg-0">
          <img :src="store.config.logoNetflix" alt="logo" class="img-fluid" />
        </div>
        <!-- NavBar che appare solo a dimensione md dello schermo -->
        <nav class="col-12 col-lg-auto d-none d-md-block">
          <ul class="row justify-content-center mb-3 mb-lg-0">
            <li class="col-auto">Home</li>
            <li class="col-auto">Film</li>
            <li class="col-auto">Series</li>
            <li class="col-auto">Recently</li>
            <li class="col-auto">My List</li>
          </ul>
        </nav>
        <!-- Container della parte mobile -->
        <div class="col-12 col-lg-3">
          <!-- DropDown con all'interno la nav -->
          <div class="row row-cols-3 align-items-center justify-content-between">
            <div class="dropdown col-2 col-sm-1 col-md-4 d-md-none">
              <button class="btn btn-danger me-0" type="button" data-bs-toggle="dropdown">
                <font-awesome-icon icon="fa-solid fa-bars" />
              </button>
              <ul class="dropdown-menu">
                <li>Home</li>
                <li>Film</li>
                <li>TV Series</li>
                <li>Recently</li>
                <li>My List</li>
              </ul>
            </div>
            <!-- Campo di testo per la ricerca -->
            <div class="col-8 col-sm-10">
              <input type="text" v-model="store.apiParams.query" minlength="1" placeholder="Cerca film o serie tv"
              class="form-control" @keyup.enter="$emit('search')" />
            </div>
            <!-- Pulsante che effettua un EMIT per andare ad attivare la chiamata all'API -->
            <div class="col-2 col-sm-1">
              <button type="button" @click="$emit('search')"  class="btn btn-danger">Cerca</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 1.25rem;

  li {
    cursor: pointer;
    border-radius: 10px;
    margin: 0 .9375rem;
    &:hover {
      text-decoration: underline 3px;
    }
  }
}
</style>
