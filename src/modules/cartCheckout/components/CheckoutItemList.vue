<script setup>
    import { DollarSign } from 'lucide-vue-next';
    import { computed } from 'vue';

    const props = defineProps({
        shippingFee: Number,
        cartItems: Array,
        subtotalMMK: Number,
        totalQty: Number,
        usd_mmk_rate: Number|Array
    })


</script>

<template>
    <div>
        <div v-for="(item,index) in cartItems" :key="index" class="">
            <div class="flex justify-between items-start border-b border-slate-300 py-4">
                <div class="flex items-center">
                    <img :src="item.preview_images[0]?.image_url" alt="Product" class="w-16 h-16 object-cover rounded mr-4">
                    <div>
                        <p class="font-semibold">{{item.name}}</p>
                        <p class="text-gray-500 text-sm" v-if="item.is_attribute">{{ Object.values(item.variations.attributes).join(', ') }}</p>
                        <p class="text-gray-500 text-sm">qty - {{item.quantity}}</p>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="flex justify-end pe-2" v-if="!item.is_attribute">
                        <span class="text-amber-700 text-base font-bold" v-if="item.price_us == 0">
                          <span class="text-slate-700">Ks</span> {{ (item.price_mmk * item.quantity).toLocaleString() }} 
                        </span>
                        <span class="text-amber-700 text-base font-bold flex items-center gap-1" v-else>
                          <span class="text-slate-700">Ks</span> {{ ((item.price_us * item.quantity) * usd_mmk_rate).toLocaleString() }} 
                          <DollarSign class="text-green-700" :size="20" />
                        </span>
                      </div>
                    
                      <div class="flex justify-end pe-2" v-else>
                        <span class="text-amber-700 text-base font-bold" v-if="item.variations.price_us == 0">
                          <span class="text-slate-700">Ks</span> {{ (item.variations.price_mmk * item.quantity).toLocaleString() }} 
                        </span>
                        <span class="text-amber-700 text-base font-bold flex items-center gap-1" v-else>
                          <span class="text-slate-700">Ks</span> {{ ((item.variations.price_us * item.quantity) * usd_mmk_rate).toLocaleString() }}
                        </span>
                      </div>
                </div>
            </div>
        </div>  

        <div class="mt-16 flex flex-col gap-3">
            <div class="flex justify-between">
                <div class="font-semibold text-base">Sub Total - <span class="text-sky-700 text-sm">{{totalQty}} items</span></div>
                <div>
                    <span class="text-amber-700 text-base font-bold flex items-center gap-1">
                        <span class="text-slate-700">Ks</span> {{ subtotalMMK.toLocaleString() }}
                      </span>
                </div>
            </div>
            <div class="flex justify-between">
                <div class="font-semibold text-base">Shipping</div>
                <div>
                    <span class="text-amber-700 text-base font-bold flex items-center gap-1">
                        <span class="text-slate-700">Ks</span> {{ shippingFee.toLocaleString() }}
                      </span>
                </div>
            </div>
        </div>

        <div class="bg-slate-300 w-full h-[2px] mt-5"></div>

        <div class="flex justify-between mt-3">
          <div class="font-semibold text-base">Total </div>
          <div>
              <span class="text-amber-700 text-base font-bold flex items-center gap-1">
                  <span class="text-slate-700">Ks</span> {{ (subtotalMMK + shippingFee).toLocaleString() }}
                </span>
          </div>
      </div>
    </div>
</template>