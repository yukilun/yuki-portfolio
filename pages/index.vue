<template>
    <div class="content-container h-full flex flex-col justify-center items-center lg:flex-row lg:justify-between">
        <HomeBlobs/>
        <div class="home-content flex-shrink-0 flex-grow pb-20 lg:pb-0 lg:pl-10">
            <h1 class="home-content-intro-1 text-4xl md:text-5xl lg:text-6xl xl:text-7xl capitalize mb-3 md:mb-5">I'm <span class="text-highlight">Yuki</span>,</h1>
            <h3 class="home-content-intro-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl capitalize mb-1 md:mb-3">a full stack</h3>
            <h3 class="home-content-intro-3 text-3xl md:text-4xl lg:text-5xl xl:text-6xl capitalize mb-12 md:mb-16 lg:mb-24"><span class="text-highlight">web developer</span>.</h3>
            <NuxtLink to="/projects" class="home-content-projects-button button text-xl md:text-2xl lg:text-3xl font-serif py-3 px-6 group">
                View My Projects&nbsp;
                <Icon class="inline group-hover:hidden" name="mingcute:eye-close-fill" color="white" size="28"/> 
                <Icon class="!hidden group-hover:!inline" name="mingcute:eye-2-fill" color="white" size="28"/> 
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
    const loaderText = useLoaderText();
    loaderText.value = 'Welcome';
</script>

<style scoped>
    .home-content > h1,.home-content > h3{
        opacity: 0;
        transform: translateY(50%);
        animation: fadeUp 300ms linear forwards 3800ms;
    }
    .home-content-projects-button {
        visibility: hidden;
        opacity: 0;
        transform: translateY(50%);
        animation: fadeUpButton 300ms linear forwards 5000ms;
    }
    .home-content-intro-1 {
        animation-delay: 3800ms !important;
    }
    .home-content-intro-2 {
        animation-delay: 4200ms !important;
    }
    .home-content-intro-3 {
        animation-delay: 4500ms !important;
    }
    @keyframes fadeUp {
        0% { opacity: 0; transform: translateY(50%) }
        100% { opacity: 1; transform: translateY(0%) }
    }
    @keyframes fadeUpButton {
        0% { visibility:hidden; opacity: 0; transform: translateY(50%) }
        100% { visibility:visible; opacity: 0.8; transform: translateY(0%) }
    }
</style>