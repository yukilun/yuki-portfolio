<template>
    <div class="content-container" :class="isLoading && 'h-0 overflow-hidden'" ref="container">
        <div class="about w-[90%] mx-auto">
            <SectionHeader heading="About" :canScroll="canScroll" />
            <div class="about-content max-w-[900px] mx-auto">
                <AboutShortBio />
                <AboutMyJourney />
                <AboutMySkills />
                <AboutMyHobbies />
            </div>
            <SectionNav path="contact"/>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: "About | Yuki Lun's Portfolio",
    meta: [
        { name: "description", content: "Yuki is a full-stack web developer. She is passionate about coding. Find out more about her." },
        { name: "twitter:title", content: "About | Yuki Lun's Portfolio" },
        { name: "twitter:description", content: "Yuki is a full-stack web developer. She is passionate about coding. Find out more about her." },
        { property: "og:title", content: "About | Yuki Lun's Portfolio" },
        { property: "og:description", content: "Yuki is a full-stack web developer. She is passionate about coding. Find out more about her." },
    ]
});

const isLoading = useIsLoading();
const loaderText = useLoaderText();
loaderText.value = 'About';

const canScroll = ref(true);
const container = ref(null);

onMounted(()=> {
    canScroll.value = container.value.scrollHeight > document.body.clientHeight;
})
</script>

<style scoped>
</style>