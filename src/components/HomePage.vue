<template>
    <section>
        <div class="wrapper">
            <div class="welcome">
                <h2>Welcome by </h2><h1>whatBeer</h1>
            </div>

            <hr />

            <div class="slogan">
                <p>The only helper to find the perfect beer you need!</p>
            </div>
        </div>
    </section>
</template>
<script>
export default({
  data: () => ({
    }),
  methods: {
    },
  computed: {
      
    }
});
</script>
<style scoped>
    @import '../assets/base.css';

    .wrapper {
        display: flex;
        flex-direction: column;
        top: 5rem;
        margin: 4rem;
        align-items: center;
    }

        .welcome {
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }

            .welcome h2 {
                font-size: 4rem;
            }

            .welcome h1 {
                font-size: 7rem;
                font-weight: 900;
            }

        hr {
            display: flex;
            border: 1px solid orange;
            width: 40%;
        }

        .slogan {
            margin-top: 0.8rem;
        }

            .slogan p {
                font-size: 1.3rem;
            }

</style>