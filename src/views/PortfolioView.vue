<template>
    <section id="grid">
        <div v-for="pa in pixelart" :style="{ backgroundColor: pa.color, gridColumn: pa.x, gridRow: pa.y }">
            <img :src="getImgUrl(pa.img)">
        </div>
    </section>
</template>

<script>
export default {
    data: () => {
        return {
            pixelart: [
                {
                    x: "1",
                    y: "1",
                    color: "#FF0000",
                    img: "logo"
                },
                {
                    x: "2/4",
                    y: "1",
                    color: "#00FF00",
                    img: "logo"
                },
                {
                    x: "2",
                    y: "2",
                    color: "#0000FF",
                    img: "logo"
                },
            ]
        }
    },
    methods: {
        getImgUrl(name) {
            var images = require.context('../assets/imgPF/', false, /\.png$/)
            return images('./' + name + ".png")
        },
        createGridPlacement(array) {
            //Array de 3x3

            //Compteur de taille

            // Récupère dans l'array donné un éléménet
            // Lui donne une place libre
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/sass/pf.sass";
</style>