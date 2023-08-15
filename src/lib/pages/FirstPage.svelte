<script lang="ts">
    import { onMount } from "svelte";
    
    export let y = 0;


    let textAnimation;
    let registerAnimate = 0;
    let registerOn = false;

    onMount(() => {
        let logo = document.querySelector(".main-text");
        let year = document.querySelector(".bg-text");
        let register = document.querySelector(".register-button");
        let scroll = document.querySelector(".scroll");

        var tick = 0;

        setInterval(animate, 10);
        function animate() {
            logo.style.transform =
                "translate(" + Math.sin(tick) + "vw, " + Math.cos(tick) + "vw)";
            logo.style.transform += "rotate(" + Math.sin(tick) * 3 + "deg)";

            year.style.transform =
                "translate(" +
                Math.sin(tick * 2) +
                "vw, " +
                Math.cos(tick * 2) +
                "vw)";
            year.style.transform += "rotate(" + Math.sin(tick * 2) * 3 + "deg)";

            if (registerOn) {
                if (registerAnimate < 0.95) {
                    registerAnimate += (1 - registerAnimate) / 20;
                }
            } else {
                if (registerAnimate > 0) {
                    registerAnimate /= 1.2;
                }
            }

            register.style.fontSize = 4 + registerAnimate * 0.7 + "vw";
            register.style.transform =
                "translate(" +
                Math.sin(tick * 0.5 + Math.PI / 8) * 10 +
                "px, " +
                Math.cos(tick * 0.5 - Math.PI / 8) * 10 +
                "px)";
            register.style.transform +=
                "rotate(" + Math.sin(tick * 0.5 - Math.PI / 2) * 3 + "deg)";
            
            scroll.style.opacity = 1 - y / 300;

            tick += Math.PI / 256;
        }
    });
</script>

<div class="first-page" id="first-page">
    <div class="title-text">
        <div class="main-text">
            <h1 class="glitch one">Montgomery County</h1>
            <h1 class="glitch two">Hackathon</h1>
        </div>
        <div class="bg-text">
            <h1 class="glitch">2023</h1>
        </div>
    </div>
    <button
        class="register-button hover-scale"
        on:mouseenter={() => {
            registerOn = true;
        }}
        on:mouseleave={() => {
            registerOn = false;
        }}
    >
        REGISTER
    </button>
    <div class="scroll" />
    <div class="bg-fade" />
</div>
