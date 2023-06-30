<template>
    <div class="loader fixed w-full h-screen z-40 bg-[#617079] flex flex-col justify-center items-center gap-6" :class="isActive && 'active'">
        <LoaderBubbles />
        <LoaderText/>
    </div>
</template>

<script setup>
    const isActive = ref(true);
    const timer = ref();
    onMounted(()=> {
        timer.value = setTimeout(()=> {
            isActive.value = false;
        }, 2500);
    })
    onUnmounted(() => {
        clearTimeout(timer);
    })
</script>

<style scoped>
.loader {
    height: 200vh;
    padding-top: 100vh;
    bottom: 0;
    transform: translateY(-100%);
    opacity: 0;
	transition: all 1500ms cubic-bezier(.8,-.2,.2,1);
}

.loader.active {
    transform: translateY(0) !important;
	opacity: 100%;
    transition: all 1500ms cubic-bezier(.8,-.2,.2,1);
}
</style>