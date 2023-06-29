<template>
    <div class="loader-text flex flex-col gap-3">
        <div class="title text-white text-center text-xl pb-2 md:text-2xl">Yuki Lun's Portfolio</div>
        <div class="divider"> </div>
        <svg class="w-full h-[60px] text-center font-serif text-3xl uppercase pt-2 md:h-[72px] md:text-4xl">
            <text x="50%" y="50%" text-anchor="middle" letter-spacing="3">
                {{ loaderText }}
            </text>
        </svg>
    </div>
</template>

<script setup>
    const loaderText = useLoaderText();
    // const { loaderText } = defineProps(['loaderText']);
</script>

<style scoped>
    .title {
        opacity: 0%;
        animation: appear 2000ms forwards;
    }
    .divider {
        margin: 0 auto;
        width: 25%;
        height: 2px;
        background: #ACA393;
        opacity: 0%;
        animation: appear 1000ms forwards 300ms;
    }
    svg text {
        stroke: white;
        stroke-dasharray: 0 50%;
        stroke-width: 0.2px;
        fill: transparent;
        animation: textAnimate 2000ms forwards 1000ms, fill 500ms forwards 2000ms;
    }
    @keyframes appear {
        from { opacity: 0% }
        to { opacity: 100% }
    }
    @keyframes textAnimate {
        from { stroke-dasharray: 0 50%; }
        to {stroke-dasharray: 50% 0; }
    }
    @keyframes fill {
        from { fill: transparent; }
        to { fill: white; }
    }

</style>