<!-- App.vue -->
<template>
    <div>
        <!-- 顶部导航 -->
        <nav>
            <router-link to="/home">Home</router-link> |
            <router-link to="/about">About</router-link>
        </nav>
        <router-view :items="items" :input-value="inputValue"></router-view>
        <div v-if="$route.path === '/home'">
            <input v-model="inputValue" placeholder="请输入事项" @keyup.enter="addItem">
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputValue: '',
            items: ['吃饭', '睡觉', '打豆豆']
        }
    },
    methods: {
        addItem() {
            if (this.inputValue.trim()) {
                this.items.push(this.inputValue.trim())
                this.inputValue = ''
            }
        }
    }
}
</script> 