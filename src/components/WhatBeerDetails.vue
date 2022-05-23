<template>
    <div v-if="beer" class="detailedBeer">
        <h3>{{beer.name}}</h3>
        <div class="detailedBeer_wrapper">
            <div class="detailedBeer-wrapper-left">
                <p>{{beer.tagline}}</p>
                <p>{{beer.brewers_tips}}</p>
            </div>
            <div class="detailedBeer-wrapper-right">
                <h3>{{beer.id}}</h3>
                <p>{{beer.first_brewed}}</p>
            </div>
        </div>
    </div>

</template>
<script>
export default({
    data: () => {
        return {};
    },
    methods: {
    },
    computed: {
        beer() {
            console.log(this.$store.getters.detailedBeer);
            return this.$store.getters.detailedBeer;
        }
    }
})
</script>
<style scoped>

    .detailedBeer {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5rem;
    }

        .detailedBeer_wrapper {
            display: flex;
            flex-direction: row;
            justify-items: center;
            align-items: center;
            gap: 2rem;
            width: 100%;
        }

            .detailedBeer-wrapper-left {
                flex-direction: column;
                width: 50%;
            }

            .detailedBeer-wrapper-right {
                flex-direction: column;
                width: 50%;
            }

</style>
