<template>
    <section id="inicio" class="seccion">
        <div class="home" style="height: 100vh; width: 95%">
            <br>
            <p class="Ibody my-5" style="display: inline-block;" /> <br>
            <h1 class="TextHome mt-5 ">Hola</h1> <br>
            <h1 class="TextHome">Soy, Julio</h1> <br>
            <h1 class="TextHome TextAfter">desarrollador web</h1><br>
            <h2 class=" TextP mt-2" style="display: inline-block;"> <br> <span class="TextSub">Desarrollador Full
                    Stack</span>
                <br>
            </h2> <br>
            <p class="Fbody" style="display: inline-block" /><br>
            <div class="scroll-down">
                <span>SCROLL </span>
                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-down" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    class="svg-inline--fa fa-arrow-down fa-w-14 fa-5x">
                    <path fill="currentColor"
                        d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z"
                        class=""></path>
                </svg>
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

.home {
    display: inline-block;
    position: relative;
    left: 4vw;
    z-index: 98;
    user-select: none;
}

.home::before {
    content: "<html>";
    position: relative;
    top: 15vh;
    color: #515152;
    font-family: 'La Belle Aurore', cursive;
    font-weight: bold;
    font-size: 1.2em;
}

p.Ibody::before {
    content: "<body>";
    position: relative;
    left: 20%;
    top: 15vh;
    color: #515152;
    font-family: 'La Belle Aurore', cursive;
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 10px;
}

p.Ibody::after {
    content: "<h1>";
    position: relative;
    top: 19vh;
    color: #515152;
    font-family: 'La Belle Aurore', cursive;
    font-weight: bold;
    font-size: 1.2em;
}

h1.TextHome {
    display: inline-block;
    position: relative;
    left: 5%;
    top: 13vh;
    color: white;
    font-family: 'Bruno Ace SC', cursive;
    font-weight: 10px;
    font-size: 4.5em;
    line-height: 1em;

}

h1.TextAfter::after {
    display: inline;
    content: "</h1>";
    position: relative;
    left: 1vw;
    color: #515152;
    font-family: 'La Belle Aurore', cursive;
    font-weight: bold;
    font-size: .26em;

}

h2.TextP::before {
    content: "<p>";
    position: relative;
    left: 6%;
    top: 10vh;
    color: #515152;
    font-family: 'La Belle Aurore', cursive;
    font-weight: bold;
    font-size: .8em;
    display: inline-block
}

h2.TextP::after {
    content: "</p>";
    position: relative;
    left: 6%;
    top: 10vh;
    color: #515152;
    font-family: 'La Belle Aurore', cursive;
    font-weight: bold;
    font-size: .8em;
}

h2 span.TextSub {
    position: relative;
    left: 8%;
    top: 10vh;
    color: #8d8d8d;
    font-weight: bold;
    font-size: 1.5em;
    margin-bottom: 10%;
    letter-spacing: 0.5em;
    font-family: 'Lobster', cursive;
}

p.Fbody::before {
    content: "</body>";
    position: relative;
    left: 13%;
    top: 10vh;
    color: #515152;
    font-family: 'La Belle Aurore', cursive;
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 10px;
}

p.Fbody::after {
    content: "</html>";
    position: relative;
    left: -60%;
    top: 15vh;
    color: #515152;
    font-family: 'La Belle Aurore', cursive;
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 10px;
}

.scroll-down {
    -webkit-text-size-adjust: 100%;
    line-height: 1.5;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
    position: absolute;
    right: 10px;
    bottom: 2rem;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 14px;
    color: #fff;
}

.scroll-down span {
    -webkit-text-size-adjust: 100%;
    line-height: 1.5;
    font-family: "Open Sans", sans-serif;
    -webkit-box-direction: normal;
    font-size: 14px;
    color: #fff;
    box-sizing: border-box;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    animation-name: bounce-1;
    animation-timing-function: linear;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}

.scroll-down svg {
    margin-top: 10px;
    width: 20px
}

@media screen and (max-width: 1200px) {
    h1.TextHome {
        font-size: 3.5em;
        left: 9%;
    }

    h1.TextAfter::after {
        font-size: .34em;
    }

    h2 span.TextSub {
        font-size: 1.2em;
        left: 10%;
    }

    h2.TextP::before {
        position: relative;
        left: 8%;
    }

    h2.TextP::after {
        position: relative;
        left: 8%;
    }

}

@media screen and (max-width: 900px) {
    h1.TextHome {
        font-size: 2.5em;
        left: 10%;
    }

    h1.TextAfter::after {
        font-size: .43em;
    }

    h2 span.TextSub {
        font-size: .9em;
        left: 16%;
    }

    h2.TextP::before {
        position: relative;
        left: 11%;
    }

    h2.TextP::after {
        position: relative;
        left: 11%;
    }

}

@media screen and (max-width: 650px) {
    h1.TextHome {
        font-size: 1.8em;
        left: 12%;
    }

    h1.TextAfter::after {
        font-size: .58em;
    }

    h2 span.TextSub {
        font-size: .7em;
        left: 16%;
    }

    h2.TextP::before {
        position: relative;
        left: 11%;
    }

    h2.TextP::after {
        position: relative;
        left: 11%;
    }

}

@media screen and (max-width: 480px) {
    h1.TextHome {
        font-size: 1.5em;
        left: 15%;
    }

    h1.TextAfter::after {
        font-size: .68em;
    }

    h2 span.TextSub {
        font-size: .6em;
        left: 18%;
    }

    h2.TextP::before {
        position: relative;
        left: 15%;
    }

    h2.TextP::after {
        position: relative;
        left: 15%;
    }

}

@media screen and (max-width: 420px) {
    h1.TextHome {
        font-size: 1.2em;
        left: 20%;
    }

    h1.TextAfter::after {
        font-size: .75em;
    }

    h2 span.TextSub {
        font-size: .5em;
        left: 25%;
    }

    h2.TextP::before {
        position: relative;
        left: 18%;
    }

    h2.TextP::after {
        position: relative;
        left: 18%;
    }

}

@media screen and (max-width: 375px) {
    h1.TextHome {
        font-size: 1.1em;
        left: 23%;
    }

    h1.TextAfter::after {
        font-size: .78em;
    }

    h2 span.TextSub {
        font-size: .4em;
        left: 30%;
    }

    h2.TextP::before {
        position: relative;
        left: 20%;
    }

    h2.TextP::after {
        position: relative;
        left: 20%;
    }

}</style>
