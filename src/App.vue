<script setup>
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const CounterStore = useCounterStore()
console.log(CounterStore)
const {count,doublecount}=storeToRefs(CounterStore)
console.log(count,doublecount);

onMounted(()=>{
  CounterStore.getList()
})
</script>

<template>
<div>
  <button  @click="CounterStore.increment">{{ CounterStore.count }}</button>
  {{ CounterStore.doublecount }}

  
  <!-- <ul>
    <li v-for="item in CounterStore.list"  :key="item.id">{{ item.name }}</li>
  </ul> -->
</div>
</template>

<style  scoped>
  
</style>