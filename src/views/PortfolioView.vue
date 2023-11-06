<template>
    <section id="grid">
        <div id="container" v-for="pa in pixelarts" :style="{ backgroundColor: pa.color, gridColumn: pa.x, gridRow: pa.y }">
            <img :src="getImgUrlPA(pa.img)" :class="pa.class">
        </div>

        <div id="container" v-for="po in photos" :style="{ gridColumn: po.x, gridRow: po.y }">
            <img :src="getImgUrlPhoto(po.img)" :class="po.class">
        </div>
    </section>
</template>

<script>
export default {
    data: () => {
        return {
            pixelarts: [
                {
                    x: "1/4",
                    y: "5",
                    color: "#111111",
                    img: "pa (1)",
                    class: "long"
                },
                {
                    x: "3",
                    y: "1",
                    color: "#030303",
                    img: "pa (2)",
                    class: "square"
                },
                {
                    x: "2",
                    y: "1",
                    color: "#93a7ae",
                    img: "pa (4)",
                    class: "square"
                },
                {
                    x: "1",
                    y: "1",
                    color: "#4f4537",
                    img: "pa (6)",
                    class: "square"
                },
                {
                    x: "1",
                    y: "2",
                    color: "#898989",
                    img: "pa (7)",
                    class: "square"
                },
                {
                    x: "2",
                    y: "2",
                    color: "#c9c6b5",
                    img: "pa (8)",
                    class: "square"
                },
                {
                    x: "3",
                    y: "2/4",
                    color: "#5f5f6a",
                    img: "pa (3)",
                    class: "tall"
                },
                {
                    x: "1/3",
                    y: "3",
                    color: "#e7a79d",
                    img: "pa (5)",
                    class: "long"
                },
                {
                    x: "3",
                    y: "4",
                    color: "#41474e",
                    img: "pa (13)",
                    class: "square"
                },
                {
                    x: "1",
                    y: "4",
                    color: "#41474e",
                    img: "pa (10)",
                    class: "square"
                },
                {
                    x: "2",
                    y: "4",
                    color: "#5c5c5c",
                    img: "pa (11)",
                    class: "square"
                }
            ],
            photos: [
                {
                    x: "1",
                    y: "6",
                    img: "photo (1)",
                    class: "long"
                },
            ]
        }
    },
    methods: {
        getImgUrlPA(name) {
            var images = require.context('../assets/imgPF/pa', false, /\.png$/)
            return images('./' + name + ".png")
        },
        getImgUrlPhoto(name) {
            var images = require.context('../assets/imgPF/photo', false, /\.jpg$/)
            return images('./' + name + ".jpg")
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/sass/pf.sass";
</style>