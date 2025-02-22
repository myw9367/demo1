import axios from 'axios';
import { defineStore } from "pinia";
import { computed, ref } from 'vue';

const API_URL = 'http://geek.itheima.net/v1_0/channels'
//导入一个方法
export const useCounterStore =  defineStore('counter',()=>{
// 定义数据
const count = ref(0)
// 定义修改数据的方法（ action 同步+异步 ）
const increment =()=>{
    count.value++
}
//getter定义
const doublecount =computed(()=>count.value*2)

// 定义异步action
const list = ref([])
const getList = async ()=>{
const res = axios.get(API_URL)
list.value = (await res).data.data.channels

}
// 以对象的方式return以便调用
return{
    count,
    doublecount,
    increment,
    getList,
    list
}
})


