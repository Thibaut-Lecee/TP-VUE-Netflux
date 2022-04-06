<template>
<div id="carousel">
  <h2 class="mx-10 grey--text">Prochaines Exclusivités</h2>
  <carousel-3d :controls-visible="true" :clickable="false" :key="sortieFilm.length"
               :listData="sortieFilm" :height="400">

    <slide :index="i" :key="i" v-for="(movie,i) in this.sortieFilm">
      <figure>
        <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"/>
        <figcaption>
          <v-btn :to="`/movie/${movie.id}`">
{{movie.title}}
          </v-btn>
        </figcaption>
      </figure>
    </slide>
  </carousel-3d>

</div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d"
export default {
data() {
  return{
    sortieFilm : []
  }
},
  components: {
  Carousel3d,
    Slide,
  },
  mounted() {

  this.getSortieFilm();
  },

  methods: {
 async getSortieFilm() {
   const response = await this.$request.get('https://api.themoviedb.org/3/movie/upcoming');
   this.sortieFilm = response.data.results
   console.log(this.sortieFilm)
 }

  }
}
</script>

<style scoped>
.carousel-3d-container figure {
  margin: 0;

}
.carousel-3d-container figcaption {
  position:absolute;
  background-color: grey;
  color: white;
  bottom:0;
  padding: 10px;
  font-size: 12px;
}
.next span,
.prev span{
  color: red;
}
</style>