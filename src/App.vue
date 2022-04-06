<template>
  <v-app>
    <NavbarItem />
    <v-main>
      <router-view/>
    </v-main>
    <FooterItem />
  </v-app>
</template>

<script>

import NavbarItem from "@/components/NavbarItem";
import FooterItem from "@/components/FooterItem";

export default {
  name: 'App',
  components: {
    NavbarItem,
    FooterItem
  },
  data: () => ({
    //
  }),
};
</script>