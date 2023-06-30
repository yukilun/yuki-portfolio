<template>
    <div class="content-container h-full flex flex-col justify-center items-center lg:flex-row lg:justify-between">
        <div class="home-intro lg:ml-10">
            <h1 class="home-intro-1 text-4xl sm:text-6xl md:text-7xl capitalize mb-5">I'm <span class="text-highlight">Yuki</span>,</h1>
            <h3 class="home-intro-2 text-3xl sm:text-5xl md:text-6xl capitalize mb-3">a full stack</h3>
            <h3 class="home-intro-3 text-3xl sm:text-5xl md:text-6xl capitalize"><span class="text-highlight">web developer</span>.</h3>
        </div>
        <HomeBlobs />
    </div>
</template>

<script setup>
    const loaderText = useLoaderText();
    loaderText.value = 'Welcome';
</script>

<style scoped>
    .home-intro > * {
        opacity: 0;
        transform: translateY(50%);
        animation: fadeUp 300ms linear forwards 3800ms;
    }
    .home-intro-1 {
        animation-delay: 3800ms;
    }
    .home-intro-2 {
        animation-delay: 4200ms;
    }
    .home-intro-3 {
        animation-delay: 4500ms;
    }
    @keyframes fadeUp {
        0% { opacity: 0; transform: translateY(50%) }
        100% { opacity: 1; transform: translateY(0%) }
    }
</style>