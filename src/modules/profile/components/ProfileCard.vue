<script setup>
    import { House, Mail, Map, Phone } from 'lucide-vue-next';

    const props = defineProps({
        user: {
            type: Object
        }
    })

    const emits = defineEmits(['logout'])
</script>

<template>
    <div class="sticky top-[160px] bg-slate-200 rounded-lg shadow p-5">
        <div class="flex items-center justify-center">
            <img v-if="!user.profile_image" class="w-48 h-48 object-cover rounded-full" src="@/assets/images/profile.jpg" alt="">
            <img v-else class="w-48 h-48 object-cover rounded-full" :src="user.profile_image" alt="">
        </div>
        <div class="mt-5">
            <h3 class="text-xl text-slate-700 font-bold text-center">{{user.name}}</h3>
            <div class="flex gap-5 items-center ps-4 mt-5">
                <div class="">
                    <Mail :size="22" />
                </div>
                <p>{{user.email}}</p>
            </div>
            <div class="flex gap-5 items-center ps-4 mt-3">
                <div class="">
                    <Phone :size="22" />
                </div>
                <p>{{user.phone}}</p>
            </div>
            <div class="flex gap-5 items-center ps-4 mt-3" v-if="user.city && user.state && user.zip_code">
                <div class="">
                    <House :size="22" />
                </div>
                <p>{{user.city}}, {{user.state}}, {{user.zip_code}}</p>
            </div>
            <div class="flex gap-5 items-start ps-4 mt-3" >
                <div class="">
                    <Map :size="22" />
                </div>
                <p>{{user.address}}</p>
            </div>
        </div>
        
        <div class="flex justify-end mt-7">
            <button @click="emits('logout')" class="border border-rose-500 bg-rose-500 hover:bg-transparent hover:text-slate-700 text-center text-sm font-bold text-white rounded-full px-10 py-1 flex items-center justify-center gap-4 ">Log out</button>
        </div>
    </div>
</template>