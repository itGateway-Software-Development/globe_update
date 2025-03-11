<script setup>
    defineProps({
        className: {
            type: String,
            default: ''
        }
    })
</script>

<template>
    <section :class="`max-w-[95%] mx-auto ${className}`">
        <slot />
    </section>
</template>