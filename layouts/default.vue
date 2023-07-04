<template>
    <div class="w-full h-screen flex flex-col justify-end overflow-hidden">
        <Cursor />
        <Loader :key="$route"/>
        <div class="w-full min-h-screen max-h-screen overflow-hidden relative">
            <Header />
            <div class="w-full h-full overflow-auto absolute top-0 left-0" :class="isOpenMenu ? 'overflow-hidden' : 'overflow-auto'">
                <slot  />
            </div>
        </div>
        <Menu />
        <MenuToggle />
    </div>
</template>

<script setup>
    useHead({
        title: "Yuki Lun's Portfolio",
        meta: [
            {name: 'description', content: "Welcome to Yuki Lun's portfolio."}
        ]
    });
    const isOpenMenu = useIsOpenMenu();
</script>

<style scoped>
</style>