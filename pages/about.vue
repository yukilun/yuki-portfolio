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
// import data from '~/assets/data.json';

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