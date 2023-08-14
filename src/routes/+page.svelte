<script lang="ts">
    import { onMount } from "svelte";
    import anime from "animejs";
    let y = 0;

    let textAnimation;

    onMount(() => {
        textAnimation = (function () {
            var mainText = document.querySelector(".main-text");
            var bgText = document.querySelector(".bg-text");

            //main text rotate movement
            anime({
                targets: mainText,
                rotate: ["8deg", "0deg", "-8deg", "0deg"],
                translateX: ["20px", "0px", "-20px", "0px"],
                translateY: ["-20px", "-25px", "-10px", "-0px"],
                duration: 10000,
                easing: "easeInOutQuad",
                loop: true,
            });
            //bg text rotate
            anime({
                targets: bgText,
                rotate: ["-5deg", "0deg", "5deg", "0deg"],
                translateX: ["-10px", "0px", "10px", "0px"],
                translateY: ["-20px", "-25px", "-10px", "-0px"],
                duration: 15000,
                easing: "easeInOutQuad",
                loop: true,
            });
        })();
    });
</script>

<div class="first-page" id="first-page">
    <nav class={y === 0 ? "fadeOut" : "fadeIn"}>
        <img src="logo.png" alt="" />
        <div class="nav-links">
            <a href="">About</a>
            <a href="">Schedule</a>
            <a href="">Sponsors</a>
            <a href="">FAQ</a>
            <a href="">Contact Us</a>
        </div>
    </nav>
    <div class="title-text">
        <div class="main-text">
            <h1 class="glitch one">Montgomery County</h1>
            <h1 class="glitch two">Hackathon</h1>
        </div>
        <div class="bg-text">
            <h1 class="glitch">2023</h1>
        </div>
    </div>
</div>

<svelte:window bind:scrollY={y} />
