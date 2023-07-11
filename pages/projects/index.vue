<template>
    <div class="content-container" :class="isLoading && 'h-0 overflow-hidden'" ref="container">
        <div class="projects w-[95%] mx-auto">
            <SectionHeader heading="Projects" :canScroll="canScroll" />
            <div class="projects-thumbnails max-w-[1400px] mx-auto">
                <ProjectThumbnailRow v-for="project in data.projects" :project="project" />
            </div>
            <SectionNav path="about"/>
        </div>
    </div>
</template>

<script setup>
import data from '~/assets/data.json';

const isLoading = useIsLoading();
const loaderText = useLoaderText();
loaderText.value = 'Projects';

const canScroll = ref(true);
const container = ref(null);

onMounted(()=> {
    canScroll.value = container.value.scrollHeight > document.body.clientHeight;
})
</script>

<style scoped>

</style>