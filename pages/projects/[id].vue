<template>
    <div class="content-container">
        Project {{ id }}
    </div>
</template>

<script setup>
    const { id } = useRoute().params;    
    const loaderText = useLoaderText();
    loaderText.value = `Project ${id}`;
</script>

<style scoped>

</style>