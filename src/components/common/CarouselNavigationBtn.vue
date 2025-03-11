<script setup>
    const props = defineProps({
        next: {
            type: Function
        },
        prev: {
            type: Function
        }
    })
</script>

<template>
    <div class="control flex gap-2 justify-between absolute top-1/2 left-0 right-0 z-[99] px-10">
        <button
          @click="props.prev"
          class="border border-default-500 rounded-full w-10 h-10 flex justify-center items-center bg-slate-200 hover:bg-default-500 duration-200 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            class="size-5 text-default-500 group-hover:text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          @click="props.next"
          class="border border-default-500 rounded-full w-10 h-10 flex justify-center items-center bg-slate-200 hover:bg-default-500 duration-200 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            class="size-5 text-default-500 group-hover:text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
</template>