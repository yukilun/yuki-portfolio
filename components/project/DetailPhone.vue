<template>
    <ScrollToggle class="project-detail flex-1 max-w-[300px] aspect-phone my-5 rounded-2xl shadow-lg overflow-hidden" :class="index % 2 != 0 ? `mt-24` : `mb-24` ">
        <img :src="`${images.front}`" :alt="`${projectName} phone detail ${index+1} front`" class="front-image"/>
        <img :src="`${images.back}`" :alt="`${projectName} phone detail ${index+1} back`" class="back-image"/>
    </ScrollToggle>
</template>

<script setup>
const { images, index, projectName } = defineProps(['images', 'index', 'projectName']);
</script>

<style scoped>
/** refer to DetailLabtop style */
</style>