<template>
    <div class="my-hobbies flex flex-col md:flex-row gap-10 md:gap-16 justify-center items-center mb-8 md:mb-32">
        <ScrollParallax :opacityFrom="0.3" :opacityTo="1" class="my-hobbies-image w-[80%] max-w-[400px] md:order-2">
            <img src="/images/photos/painting.jpg" alt="painting" class="target">
        </ScrollParallax>
        <div class="my-hobbies-text flex-grow w-[90%] md:order-1">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl mb-6">Apart From Coding...</h2>
            <p class="text-base sm:text-lg lg:text-xl !leading-relaxed mb-5">
                My passion for coding comes from my love of <span class="text-highlight font-bold">creating things</span>. 
                When I have free time, I also want to try creating something new by myself. 
                I learned <span class="text-highlight font-bold">painting</span> a few years ago and the picture shown is one of my favorite paintings. 
                Recently, I started <span class="text-highlight font-bold">playing piano</span> and hope to compose my songs soon. 
            </p>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.my-hobbies-image {
    box-shadow: -15px 15px 0px #E4C6BF;
}
</style>