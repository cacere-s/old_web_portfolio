<template>
    <v-container style="margin-top: 50px;">
        <v-row>
            <v-col cols="12" sm="12" md="7">
                <section id="portafolio" class="seccion">
                    <div class="contentProject">
                        <v-icon class="iconGit" icon="mdi-github"></v-icon>
                        <div class="content-portfolio">
                            <v-card-title class=" text-white text-h2 font-weight-bold mb-1">Portafolio</v-card-title>
                            <v-card-subtitle class="textProject text-white">Disfruto abordar problemas complejos y
                                convertirlos en diseños de interfaz simples. También me encanta la lógica y la estructura de
                                la codificación y siempre me esfuerzo por lograr un código elegante y eficiente, ya sea
                                HTML, CSS o JavaScript.
                            </v-card-subtitle>
                            <v-btn class="btnProject" style="font-weight: bold; width: 40%;" variant="tonal" rounded
                                color="white" href="https://github.com/JulioCaceres10/JulioCaceres10"
                                target="_blank">EXPLORE</v-btn>
                        </div>


                    </div>
                </section>

            </v-col>
            <v-col cols="12" sm="12" md="5">
                <div class="project">
                    <div v-for="item in projects" :key="item" class="card">
                        <div class="imgBg">
                            <v-img class="img" :src="item.img" cover></v-img>
                            <div class="content">
                                <div class="box1">
                                    <div>
                                        <h4 class="title">{{ item.name }}</h4>
                                        <p class="subtitleSkill">{{ item.skills }}</p>
                                        <p class="subtitle">{{ item.description }}</p>
                                    </div>
                                </div>
                                <div class="box2">
                                    <v-btn class="btn" icon="mdi-github" variant="tonal" color="purple" :href="item.github"
                                        target="_blank"></v-btn>
                                    <v-btn v-if="item.link" class="btn" icon="mdi-open-in-new" variant="tonal" color="green"
                                        :href="item.link" target="_blank"></v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </v-col>
        </v-row>





    </v-container>
</template>

<script>
import data from '@/projects.json'

export default ({
    data() {
        return {
            projects: [],
        }
    },

    methods: {
        datosJson() {
            try {
                data.map((item) => {
                    this.projects.push(item)
                })
            } catch (error) {
                console.log(error)
            }
        }
    },
    created() {
        this.datosJson()
    }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;800&display=swap');

.iconGit {
    position: absolute;
    top: 95vh;
    left: 5%;
    font-size: 700px;
    color: #6c6c6c20;

}

.contentProject {
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.textProject {
    text-align: justify;
    padding: 0 40px;
    margin-bottom: 5%;
}

.project {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;

}

.card {
    position: relative;
    width: 200px;
    height: 220px;
    background: #000;
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    margin: 10px;
}

.card .imgBg .img {
    width: 100%;
    height: 220px;
    transition: 0.3s;
    background-position: center;
    background-size: cover;
}

.card .imgBg .content {
    position: absolute;
    width: 100%;
    height: 220px;
    bottom: 0;
    z-index: 1;
    color: #FFF;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    padding: 0 13px;
    transition: 0.5s;
    background: linear-gradient(to top, #000 55%, transparent);
    opacity: 0;
}

.card .imgBg .content .box1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.card .imgBg .content p.subtitleSkill {
    font-size: 10px;
    color: #6c6c6c;
    font-weight: 800;
}

.card .imgBg .content p.subtitle {
    font-size: 13px;
    text-align: justify;
    color: #b8b8b8;
    font-weight: 800;
    margin-top: 5px;
}

.card .imgBg .content .box2 {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
}

.card:hover .imgBg .img {
    height: 150px;
}

.card:hover .content {
    opacity: 1;
}

@media (max-width: 950px) {
    .content-portfolio {
        text-align: center;
    }

    .iconGit {
        position: absolute;
        left: 11%;
    }
}

@media (max-width: 800px) {
    .iconGit {
        position: absolute;
        left: 5%;

    }
}

@media (max-width: 730px) {
    .iconGit {
        position: absolute;
        left: 0;
        font-size: 700px;

    }
}

@media (max-width: 650px) {
    .iconGit {
        font-size: 1px;
        opacity: 0;
    }
}
</style>