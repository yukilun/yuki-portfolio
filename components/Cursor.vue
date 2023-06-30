<template>
    <svg class="cursor fixed z-50 top-0 left-0 pointer-events-none scale-75" ref="cursor"
        width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_17_2)">
        <circle cx="23" cy="22" r="20" fill="#ACA393"/>
        </g>
        <g filter="url(#filter1_d_17_2)">
        <circle cx="23" cy="22" r="20" fill="#A2C5C0"/>
        </g>
        <circle cx="28.5" cy="25.5" r="1.5" fill="#626262"/>
        <circle cx="16.5" cy="25.5" r="1.5" fill="#626262"/>
        <circle cx="8.5" cy="14.5" r="1.5" fill="white"/>
        <path d="M18.814 28.9669C22.1197 31.1157 24.8195 29.8485 26.252 28.9669" stroke="#626262" stroke-linecap="round"/>
        <path d="M17.5 5.5C13.9631 6.73953 12.4294 7.94272 10.5 11" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <defs>
        <filter id="filter0_d_17_2" x="0.355372" y="0.677686" width="45.2893" height="45.2893" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feMorphology radius="0.661157" operator="erode" in="SourceAlpha" result="effect1_dropShadow_17_2"/>
        <feOffset dy="1.32231"/>
        <feGaussianBlur stdDeviation="1.65289"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17_2"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17_2" result="shape"/>
        </filter>
        <filter id="filter1_d_17_2" x="0.355372" y="0.677686" width="45.2893" height="45.2893" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feMorphology radius="0.661157" operator="erode" in="SourceAlpha" result="effect1_dropShadow_17_2"/>
        <feOffset dy="1.32231"/>
        <feGaussianBlur stdDeviation="1.65289"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17_2"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17_2" result="shape"/>
        </filter>
        </defs>
    </svg>
</template>

<script setup>
    const cursor = ref(null);
    onMounted(()=> {
        function getDimensions(event) {
            cursor.value.style.transform = `translate(${event.clientX + 10}px, ${event.clientY + 10}px)`
        };
        window.addEventListener("mousemove", (event) => {
            getDimensions(event);
        });
    });
</script>

<style scoped>
.cursor {
    /* transition: 100ms ease-out; */
}
@media (hover: none) and (pointer: coarse) {
    .cursor {
        display: none;
    }
}
</style>