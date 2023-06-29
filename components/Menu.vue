<template>
    <div class="menu flex-shrink-0 w-full z-30 bg-[#617079] px-6 overflow-hidden"
        :class="isOpenMenu ? 'h-[350px] md:h-[400px] pb-[100px] pt-6': 'h-0'">
        <div class="menu-container flex gap-5 max-w-fit mx-auto pb-6 overflow-x-auto" ref="menuContainer">
            <MenuCard path="home" />
            <MenuCard path="projects" />
            <MenuCard path="about" />
            <MenuCard path="contact" />
        </div>
    </div>
</template>

<script setup>
    const { isOpenMenu } = defineProps(['isOpenMenu']) ;
    const menuContainer = ref(null);
    onMounted(() => {
        menuContainer.value.addEventListener('mouseover', (event) => {
            if ((event.pageX - menuContainer.value.offsetLeft) < menuContainer.value.offsetWidth / 2) {
                menuContainer.value.scrollLeft -= 300;
            }
            else {
                menuContainer.value.scrollLeft += 300;
            }
        })
    });
</script>

<style scoped>
.menu {
    transition: all 700ms;
}
.menu-container {
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    scrollbar-width: thin;
    scroll-behavior: smooth;
}

::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    border: 5px solid transparent;
}

::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.2);
}
</style>