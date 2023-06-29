<template>
    <div class="w-full h-screen flex flex-col justify-end overflow-hidden">
        <Loader :loaderText="loaderText"/>
        <div class="w-full min-h-screen max-h-screen overflow-hidden relative">
            <div class="w-full h-full overflow-auto absolute top-0 left-0">
                <slot  />
            </div>
        </div>
        <Menu :isOpenMenu="isOpenMenu" />
        <MenuToggle :isOpenMenu="isOpenMenu" :toggleOpenMenu="toggleOpenMenu"/>
    </div>
</template>

<script setup>
    useHead({
        title: "Yuki Lun's Portfolio",
        meta: [
            {name: 'description', content: "Welcome to Yuki Lun's portfolio."}
        ]
    });
    const { loaderText } = defineProps(['loaderText']);
    const isOpenMenu = ref(false);
    const toggleOpenMenu = () => {
        isOpenMenu.value = !isOpenMenu.value;
    }
    const route = useRoute();
    watch(route, ()=> {
        isOpenMenu.value = false;
    }, {deep: true, immediate: true});
</script>

<style scoped>
</style>