<template>
  <div>
    <ProchaineSortie/>
    <FilmPopulaire/>
  </div>
</template>

<script>

import FilmPopulaire from "../components/FilmPopulaire";
import ProchaineSortie from "@/components/ProchaineSortie";

export default {
  name: 'HomeView',
  components: {
    ProchaineSortie,
    FilmPopulaire,
  }
}
</script>
