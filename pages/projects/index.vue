<template>
    <div class="content-container" :class="isLoading && 'h-0 overflow-hidden'" ref="container">
        <div class="projects w-[90%] mx-auto max-w-[1200px]">
            <SectionHeader heading="Projects" :canScroll="canScroll" />
            <div class="projects-table">
                <ProjectsRow v-for="project in data.projects" :project="project" />
            </div>
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