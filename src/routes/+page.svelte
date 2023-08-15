<script lang="ts">
    import { onMount } from "svelte";
    import anime from "animejs";

    let textAnimation;

    onMount(() => {
        textAnimation = (function () {
            var mainText = document.querySelector(".main-text");
            var bgText = document.querySelector(".bg-text");
            var registerButton = document.querySelector(".register-button");

            //main text rotate movement
            anime({
                targets: mainText,
                rotate: ["3deg", "-3deg", "0deg"],
                translateX: ["5px", "0px", "-5px", "0px"],
                translateY: ["-5px", "-10px", "-15px", "-10px", "-5px", "-0px"],
                duration: 5000,
                easing: "linear",
                loop: true,
            });
            //bg text rotate
            anime({
                targets: bgText,
                rotate: ["-5deg", "5deg", "0deg"],
                translateX: [
                    "-10px",
                    "-12px",
                    "-7px",
                    "0px",
                    "7px",
                    "10px",
                    "12px",
                    "10px",
                    "0px",
                ],
                translateY: [
                    "-10px",
                    "-20px",
                    "-25px",
                    "-20px",
                    "-10px",
                    "-0px",
                ],
                duration: 3500,
                easing: "linear",
                loop: true,
            });
            //register button rotate
            anime({
                targets: registerButton,
                rotate: ["-2deg", "2deg", "0deg"],
                translateX: [
                    "-10px",
                    "-12px",
                    "-7px",
                    "0px",
                    "7px",
                    "10px",
                    "12px",
                    "10px",
                    "0px",
                ],
                translateY: [
                    "-10px",
                    "-20px",
                    "-25px",
                    "-20px",
                    "-10px",
                    "-0px",
                ],
                duration: 10000,
                easing: "linear",
                loop: true,
            });
        })();
    });
</script>

<svelte:head>
    <title>MC Hackathon 2023</title>
    <meta name="description" content="MC Hackathon 2023" />
</svelte:head>

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
    <button class="register-button hover-scale">
        REGISTER
    </button>
    <div class="bg-fade" />
</div>
<div class="second-page" />
