<template>
    <div>
        <h2>我是Home组件</h2>
        <nav>
            <p @click="toggleList" :class="{ active: showList }">展示列表|你的选择</p>
        </nav>

        <!-- 列表区域 -->
        <div v-show="showList">
            <ul>
                <li v-for="(item, index) in items" :key="index" @click="selectItem(item)">
                    {{ item }}
                </li>
            </ul>
        </div>

        <!-- 选择结果 -->
        <div>
            <p>你的选择是：{{ selected }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: Array,
        selected: String,
        inputValue: String
    },
    data() {
        return {
            showList: false
        }
    },
    methods: {
        selectItem(item) {
            this.$router.replace({
                name: 'Home',
                query: { selected: item },
                meta: { inputValue: this.inputValue }
            })
        },
        toggleList() {
            this.showList = !this.showList
        }
    }
}
</script>
<style></style>