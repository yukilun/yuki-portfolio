<template>
    <div class="backgound absolute w-full h-screen -z-50 overflow-hidden bottom-0">
        <div class="bubbles relative flex justify-around w-full min-w-max">
            <span v-for="index in 20" :style="`--i: ${Math.random() * 10 + 10}`"
                class="bubble relative w-[30px] h-[30px] mx-1 rounded-full"> </span>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.bubble {
    background: white;
    box-shadow: 0 0 0 10px rgba(255,255,255, 0.2),
        0 0 50px white,
        0 0 100px white;
    animation: float 15s linear infinite;
    animation-duration: calc(120s / var(--i));
}

@keyframes float {
    0% {
        transform: translateY(100vh) scale(0);
    }

    100% {
        transform: translateY(-10vh) scale(1);
    }
}
</style>