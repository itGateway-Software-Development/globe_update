<script setup>
    import { computed } from 'vue';

    const emits = defineEmits(['cityChange'])

    const props = defineProps({
        states: Array,
        formData: Object,
        city_error: Boolean
    })

    const cities = computed(() => {
        return props.states.find(state => state.id == props.formData.state_id)?.cities
    })

    const handleCityChange = (city) => {
        emits('cityChange', city)
    }

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div class="col-span-1">
            <div :class="`w-full border ${state.id == formData.state_id ? 'bg-slate-300' : ''} rounded mb-[2px]`" v-for="state in states" :key="state.id">
                <div :class="`flex items-center ps-3 `">
                    <input 
                        v-model="formData.state_id" 
                        :id="`horizontal-list-radio-${state.id}`" 
                        type="radio" 
                        :value="state.id" 
                        name="list-state" 
                        :checked="state.id == formData.state_id"
                        class="w-4 h-4 text-amber-600 bg-gray-200 border-gray-300 focus:ring-amber-500   focus:ring-2 "
                    >
                    <label :for="`horizontal-list-radio-${state.id}`" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">{{state.name}}</label>
                </div>
            </div>
        </div>
        <div class="col-span-2">
            <div 
                v-for="city in cities" 
                :key="city.slug"
                @click="handleCityChange(city)"
                :class="`w-full border ${city.id == formData.city_id ? 'bg-slate-300' : ''} rounded mb-[2px] flex justify-between items-center pe-2 cursor-pointer`"
            >
                <div class="flex items-center ps-3">
                    <input 
                        v-model="formData.city_id" 
                        :id="`horizontal-list-radio-${city.slug}`" 
                        type="radio" 
                        :value="city.id" 
                        name="list-city" 
                        @click.stop
                        class="w-4 h-4 text-amber-600 bg-gray-200 border-gray-300 focus:ring-amber-500 focus:ring-2"
                    >
                    <label 
                        :for="`horizontal-list-radio-${city.slug}`" 
                        class="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                    >
                        {{ city.name }}
                    </label>
                </div>
                <span class="text-amber-700 text-base font-bold">
                    <span class="text-slate-700 text-sm">Ks</span> {{ city.delivery_charges.toLocaleString() }} 
                </span>
            </div>
        </div>
        
    </div>
</template>