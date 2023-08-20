<script lang="ts">
    export let y = 0;
    export let registerOn;
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
        on:click={() => {
            window.location.href = "https://discord.gg/7bHKWKgD6w";
        }}
    >
        REGISTER
    </button>
    <div class="scroll" />
    <div class="bg-fade" />
    <video id="first-page-bg" preload="auto" autoplay loop muted>
        <source src="first-bg.mp4" />
    </video>
</div>
