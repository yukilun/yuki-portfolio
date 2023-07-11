<template>
    <NuxtLink :to="`/projects/${project.id}`">
        <ScrollParallax :translateYpc="20" :opacityFrom="0.7" :opacityTo="1"
            class="project-thumbnail-row h-fit flex flex-col justify-center relative mb-16 md:mb-32 group"
            :class="project.id % 2 !== 0 ? `items-end` : `items-start`">
            <div class="project-thumbnail shadow-lg bg-[#e2be8e] w-[85%] md:w-[70%] aspect-[6/4] overflow-hidden relative flex flex-col justify-center items-center duration-700 scale-100 group-hover:scale-105 transition-all">
                <img class="target w-full h-[150%] object-cover" :src="`${project.thumbnail}`" alt="">
                <div class="white-filter w-full h-full absolute top-0 left-0 bg-neutral-100 opacity-10 transition-all transition-500 group-hover:opacity-0"></div>
            </div>

            <div class="project-title w-full h-full absolute top-0 left-0 flex flex-col justify-end"
                :class="project.id % 2 == 0 && 'text-end'">
                <div :class="project.id % 2 !== 0 ? `ml-5 md:ml-10 xl:ml-20` : `mr-5 md:mr-10 xl:mr-20`">
                    <ScrollToggle :class="project.id % 2 !== 0 ? `project-type-left` : `project-type-right`">
                        <h2 class="text-2xl sm:text-5xl lg:text-6xl text-white-800 capitalize"
                            :class="project.id % 2 == 0 && `sm:mr-10 xl:mr-0-20 `">
                            {{ project.type }} -
                        </h2>
                    </ScrollToggle>
                    <ScrollToggle :class="project.id % 2 !== 0 ? `project-name-left` : `project-name-right`">
                        <h3 class="text-2xl sm:text-5xl lg:text-6xl mt-3 sm:mt-5 md:mt-10 text-white-800 text-slate-500 capitalize"
                            :class="project.id % 2 !== 0 && `sm:ml-10 xl:ml-20 `">
                            {{ project.name }}
                        </h3>
                    </ScrollToggle>
                    <h1 class="project-num text-[60px] sm:text-[75px] md:text-[100px] lg:text-[180px] leading-tight tracking-wider">
                        {{ project.id.toString().padStart(2, '0') }}
                    </h1>
                </div>
            </div>
        </ScrollParallax>
    </NuxtLink>
</template>

<script setup>
const { project } = defineProps(['project']);
</script>

<style scoped>
.project-type-left,
.project-name-left,
.project-type-right,
.project-name-right {
    text-shadow: -1px -1px 0 rgb(245, 245, 220), 1px -1px 0 rgb(245, 245, 220), -1px 1px 0 rgb(245, 245, 220), 1px 1px 0 rgb(245, 245, 220);
    opacity: 0;
    transition: ease-out 300ms;
}

@media (min-width: 1024px) {

    .project-type-left,
    .project-name-left,
    .project-type-right,
    .project-name-right {
        text-shadow: -1.5px -1.5px 0 rgb(245, 245, 220), 1.5px -1.5px 0 rgb(245, 245, 220), -1.5px 1.5px 0 rgb(245, 245, 220), 1.5px 1.5px 0 rgb(245, 245, 220);
    }
}

.project-type-left,
.project-name-left {
    transform: translateX(-20px);
}

.project-type-right,
.project-name-right {
    transform: translateX(20px);
}

.project-type-left,
.project-type-right {
    transition-delay: 600ms;
}

.project-name-left,
.project-name-right {
    transition-delay: 700ms;
}

.inview {
    opacity: 1;
    transform: translateX(0) translateY(0);
}

.project-num,
.project-num {
    color: rgb(245, 245, 220);
    background: linear-gradient(180deg, rgba(99, 96, 91, 0) 25%, rgba(99, 96, 91, 0.3));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-stroke: 3px transparent;
}</style>