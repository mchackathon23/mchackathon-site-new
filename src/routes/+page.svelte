<script>
    import FirstPage from "../lib/pages/FirstPage.svelte";
    
    let y = 0;
</script>

<svelte:head>
    <title>MC Hackathon 2023</title>
    <meta name="description" content="MC Hackathon 2023" />
</svelte:head>
<svelte:window bind:scrollY={y} />

<FirstPage y={y}/>
<div class="second-page" />
