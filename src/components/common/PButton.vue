<script setup>
import { Check, ShoppingCart } from 'lucide-vue-next';

    defineProps({
        text: String,
        onClick: Function,
        className: String,
        cartbtn: Boolean,
        alreadyAdded: {
            type: Boolean,
            default: false
        },
        isAddable: {
            type: Boolean,
            default: true
        }
    })
</script>

<template>
    <button 
        :disabled="!isAddable" 
        :class="`bg-cyan-500 text-white font-bold py-2 px-3 rounded flex items-center gap-3 hover:-translate-y-1 duration-200 ${isAddable ? '' : 'line-through'} ${className}`" 
        @click="onClick">
            {{text}} 
            <ShoppingCart v-if="cartbtn" />
            <Check v-if="alreadyAdded" />
    </button>
</template>