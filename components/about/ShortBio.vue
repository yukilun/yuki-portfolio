<template>
    <div class="short-bio flex flex-col md:flex-row gap-10 md:gap-16 justify-center items-center mb-14 md:mb-20">
        <ScrollParallax :opacityFrom="0.3" :opacityTo="1" class="short-bio-image w-[70%] max-w-[300px]">
            <img src="/images/photos/selfie.jpg" alt="selfie" class="target">
        </ScrollParallax>
        <div class="short-bio-text flex-grow w-[90%]">
            <h1 class="text-3xl sm:text-4xl lg:text-5xl mb-6">
                Hi there! <nobr>I am <span class="text-highlight">Yuki</span>.</nobr>
                <br />Nice to meet you.
            </h1>
            <p class="text-lg sm:text-xl lg:text-2xl !leading-relaxed">
                I am a <span class="text-highlight font-bold">full-stack web developer</span> from Hong Kong.
                I am passionate about <span class="text-highlight font-bold">creating websites</span>.
                Recently, I graduated from <span class="text-highlight font-bold">Douglas College</span> in New Westminster, BC Canada.
                <!-- I am now seeking <span class="text-highlight font-bold">job opportunities</span> in web development. -->
            </p>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.short-bio-image {
    box-shadow: 15px 15px 0px #E4C6BF;
}
</style>