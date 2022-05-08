<template>
    <section>
        <button
            @click="getListedBeers">
            press me
        </button>
    </section>
</template>
<script>
export default({
  data: () => ({
    listedBeers: []
    }),
  methods: {
        getListedBeers: function() {
            console.log(this.$store.dispatch("fetchBeers"));
            return this.$store.dispatch("fetchBeers");
        }
    },
  computed: {
      
    }
});
</script>
<style scoped>
@import '../assets/base.css';

@media (max-width: 1024px) {

}
</style>
