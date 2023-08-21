<script>
    import FirstPage from "../lib/pages/FirstPage.svelte";
    import SecondPage from "../lib/pages/SecondPage.svelte";
    import TeamPage from "../lib/pages/TeamPage.svelte";
    import ThirdPage from "../lib/pages/ThirdPage.svelte";
    import { onMount } from "svelte";

    let y = 0;
    let registerOn = false;

    onMount(() => {
        let registerAnimate = 0;
        let logo = document.querySelector(".main-text");
        let year = document.querySelector(".bg-text");
        let register = document.querySelector(".register-button");
        let scroll = document.querySelector(".scroll");
        let about = document.getElementById("about");
        let sponsors = document.getElementById("sponsors");
        let team = document.getElementById("team");

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

            about.style.transform =
                "translate(" +
                Math.sin(tick + Math.PI / 4) +
                "vw, " +
                Math.cos(tick * 2) +
                "vw";
            about.style.transform +=
                "rotate(" + Math.sin(tick + Math.PI / 4) * 3 + "deg)";

            sponsors.style.transform =
                "translate(" +
                Math.sin(tick + Math.PI / 4) +
                "vw, " +
                Math.cos(tick * 2) +
                "vw";
            sponsors.style.transform +=
                "rotate(" + Math.sin(tick + Math.PI / 4) * 3 + "deg)";

            team.style.transform =
                "translate(" +
                Math.sin(1.5 * tick + Math.PI / 4) +
                "vw, " +
                Math.cos(tick * 2) +
                "vw";
            team.style.transform +=
                "rotate(" + Math.sin(1.5 * tick + 3 * Math.PI / 4) * 3 + "deg)";

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

<svelte:head>
    <title>MC Hackathon 2023</title>
    <meta name="description" content="MC Hackathon 2023" />
</svelte:head>
<svelte:window bind:scrollY={y} />

<FirstPage {y} bind:registerOn />
<SecondPage />
<TeamPage />
<ThirdPage />
