<template>
    <NuxtLink 
        :to="path === 'home' ? '/': `/${path}`" 
        class="menu-card flex-shrink-0 scale-95 opacity-80 hover:scale-100 hover:opacity-100">
        <div>
            <p class="font-serif text-base md:text-lg tracking-widest uppercase mb-2 text-white">{{ path }}</p>
            <img class="w-[300px] h-[200px] object-cover hidden md:block" src="https://placehold.co/600x400"
                alt="home thumb">
            <img class="w-[120px] h-[180px] object-cover block md:hidden" src="https://placehold.co/400x600"
                alt="home thumb">
        </div>
    </NuxtLink>
</template>

<script setup>
    const { path } = defineProps(['path']);
</script>

<style scoped>
.router-link-active {
    opacity: 100%;
}
</style>