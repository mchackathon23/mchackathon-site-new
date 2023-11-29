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
            window.open("https://forms.gle/4t9iutwZvbrXfqoF7");
        }}
    >
        REGISTER
    </button>
    <div class="scroll" />
    <div class="bg-fade" />
    <video id="first-page-bg" preload="auto" autoplay loop muted>
        <source src="first-bg-compressed.mp4" />
    </video>
    
    <button
    class="discord-button hover-scale"
    on:click={() => {
        window.open("https://discord.gg/JXZwNHeS");
    }}
>
    DISCORD
    </button>
</div>

<style lang="scss">
    /* Existing SCSS styles */

    .discord-button {
        /* Add styles for Discord button */
        background-color: #7289da; /* Discord's default color */
        color: #fff; /* Text color */
        padding: 10px 20px; /* Adjust padding as needed */
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px; /* Adjust font size */
        margin-top: 20px; /* Add margin for spacing */
        transition: background-color 0.3s ease, transform 0.3s ease;

        &:hover {
            background-color: #6277a2; /* Darker shade on hover */
            transform: scale(1.05); /* Scale effect on hover */
        }
    }
</style>
