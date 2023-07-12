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

useHead({
    title: "Projects | Yuki Lun's Portfolio",
    meta: [
        { name: "description", content: "A collection of Yuki's web development and ux/ui design projects." },
        { name: "twitter:title", content: "Projects | Yuki Lun's Portfolio" },
        { name: "twitter:description", content: "A collection of Yuki's web development and ux/ui design projects." },
        { property: "og:title", content: "Projects | Yuki Lun's Portfolio" },
        { property: "og:description", content: "A collection of Yuki's web development and ux/ui design projects." },
    ]
});

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