<template>
    <section id="grid">
        <div id="container" v-for="pa in pixelarts" :style="{ gridColumn: pa.x, gridRow: pa.y }">
            <div id="child" :class="pa.class" :style="{ backgroundColor: pa.color, backgroundImage: `url(`+ require(`@/assets/imgPF/pa/${pa.img}`)  + `)` }"></div>
        </div>

        <div id="container" v-for="po in photos" :style="{ gridColumn: po.x, gridRow: po.y }">
            <div id="child" :class="po.class" :style="{backgroundColor: po.color, backgroundImage: `url(`+ require(`@/assets/imgPF/photo/${po.img}`)  + `)` }"></div>
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
                    img: "pa1.png",
                    class: "center"
                },
                {
                    x: "3",
                    y: "1",
                    color: "#030303",
                    img: "pa2.png",
                    class: "center"
                },
                {
                    x: "2",
                    y: "1",
                    color: "#93a7ae",
                    img: "pa4.png",
                    class: "center"
                },
                {
                    x: "1",
                    y: "1",
                    color: "#4f4537",
                    img: "pa6.png",
                    class: "center"
                },
                {
                    x: "1",
                    y: "2",
                    color: "#898989",
                    img: "pa7.png",
                    class: "center"
                },
                {
                    x: "2",
                    y: "2",
                    color: "#c9c6b5",
                    img: "pa8.png",
                    class: "center"
                },
                {
                    x: "3",
                    y: "2",
                    color: "#5f5f6a",
                    img: "pa3.png",
                    class: "center"
                },
                {
                    x: "1/3",
                    y: "3",
                    color: "#e7a79d",
                    img: "pa5.png",
                    class: "cover"
                },
                {
                    x: "3",
                    y: "4",
                    color: "#41474e",
                    img: "pa13.png",
                    class: "center"
                },
                {
                    x: "1",
                    y: "4",
                    color: "#41474e",
                    img: "pa10.png",
                    class: "center"
                },
                {
                    x: "2",
                    y: "4",
                    color: "#5c5c5c",
                    img: "pa11.png",
                    class: "center"
                }
            ],
            photos: [
                {
                    x: "1/3",
                    y: "6",
                    img: "photo1.jpg",
                    class: "cover"
                },
                {
                    x: "2/4",
                    y: "7",
                    img: "photo2.jpg",
                    class: "cover"
                },
                {
                    x: "1/3",
                    y: "8",
                    img: "photo3.jpg",
                    class: "cover"
                },
                {
                    x: "3",
                    y: "6",
                    img: "photo4.jpg",
                    class: "cover"
                },
                {
                    x: "1",
                    y: "7",
                    img: "photo5.jpg",
                    class: "cover"
                },
                {
                    x: "3",
                    y: "8",
                    img: "photo6.jpg",
                    class: "cover"
                },
                {
                    x: "2/4",
                    y: "9",
                    img: "photo7.jpg",
                    class: "cover"
                },
                {
                    x: "1",
                    y: "9",
                    img: "photo8.jpg",
                    class: "cover"
                },
                {
                    x: "3",
                    y: "10",
                    img: "photo9.jpg",
                    class: "cover"
                },
                {
                    x: "2",
                    y: "10",
                    img: "photo10.jpg",
                    class: "cover"
                },
                {
                    x: "1",
                    y: "10",
                    img: "photo11.jpg",
                    class: "cover"
                },
            ]
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/sass/pf.sass";
</style>