<template>
    <div class="cursor fixed z-50 top-0 left-0 h-[30px] w-[30px] rounded-full bg-white mix-blend-difference pointer-events-none"
        ref="cursor">
    </div>
</template>

<script setup>
    const cursor = ref(null);
    onMounted(()=> {
        function getDimensions(event) {
            cursor.value.style.top = `${event.clientY - 15}px`
            cursor.value.style.left = `${event.clientX - 15}px`
        }

        document.addEventListener("mousemove", (event) => {
            getDimensions(event);
        });

        document.addEventListener("mousedown", (event) => {
            cursor.value.classList.add('click');
        });

        document.addEventListener("mouseup", (event) => {
            cursor.value.classList.remove('click');
        });

        const links = [...document.querySelectorAll('a'), ...document.querySelectorAll('button')];

        links.forEach(link => {
            link.addEventListener('mouseover', () => {
                cursor.value.classList.add('hover');
            });
            link.addEventListener('mouseleave', () => {
                cursor.value.classList.remove('hover');
            });
        })
    })
</script>

<style scoped>
.cursor {
    transition: transform 300ms;
}
.cursor.click {
    transform: scale(0.5);
}

.cursor.hover {
    transform: scale(1.5);
}

</style>