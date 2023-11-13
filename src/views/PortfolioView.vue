<template>
    <div id="general">
        <div id="paBG">
            <h2>Pixel-Art</h2>
        </div>
        <section id="grid">
            <div id="container" v-for="pa in pixelarts" :style="{ gridColumn: pa.x, gridRow: pa.y }">
                <div id="child" :class="pa.class"
                    :style="{ backgroundColor: pa.color, backgroundImage: `url(` + require(`@/assets/imgPF/pa/${pa.img}`) + `)` }">
                </div>
            </div>
        </section>

        <div id="photoBG">
            <h2>Photographie</h2>
        </div>
        <section id="grid">
            <div id="container" v-for="po in photos" :style="{ gridColumn: po.x, gridRow: po.y }">
                <div id="child" :class="po.class"
                    :style="{ backgroundColor: po.color, backgroundImage: `url(` + require(`@/assets/imgPF/photo/${po.img}`) + `)` }">
                </div>
            </div>
        </section>

        <div id="modBG">
            <h2>Modélisation 3D</h2>
        </div>
        <section id="grid">
        </section>

        <div id="footer">
            <h2>Plus d'informations sûr</h2>

            <div id="contact">
                <a id="insta" href="https://www.instagram.com/kalyptien_pixelart/" target="_blank"><img src="../assets/Instagram_simple_icon.svg" /></a>
            </div>
        </div>
        <p id="CopyR">Copyright © 2023 - Tout droits réservés Pierre-Loup Costes-Pinget - France</p>
    </div>
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
                    y: "1",
                    img: "photo1.jpg",
                    class: "cover"
                },
                {
                    x: "2/4",
                    y: "2",
                    img: "photo2.jpg",
                    class: "cover"
                },
                {
                    x: "1/3",
                    y: "3",
                    img: "photo3.jpg",
                    class: "cover"
                },
                {
                    x: "3",
                    y: "1",
                    img: "photo4.jpg",
                    class: "cover"
                },
                {
                    x: "1",
                    y: "2",
                    img: "photo5.jpg",
                    class: "cover"
                },
                {
                    x: "3",
                    y: "3",
                    img: "photo6.jpg",
                    class: "cover"
                },
                {
                    x: "2/4",
                    y: "4",
                    img: "photo7.jpg",
                    class: "cover"
                },
                {
                    x: "1",
                    y: "4",
                    img: "photo8.jpg",
                    class: "cover"
                },
                {
                    x: "3",
                    y: "5",
                    img: "photo9.jpg",
                    class: "cover"
                },
                {
                    x: "2",
                    y: "5",
                    img: "photo10.jpg",
                    class: "cover"
                },
                {
                    x: "1",
                    y: "5",
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