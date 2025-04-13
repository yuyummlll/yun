<template>
    <div class="project-container">

        <div class="header">
            <h2>{{ title }}</h2>
            <img v-if="coverImgUrl" :src="coverImgUrl" class="cover-image" />
        </div>
        <p v-if="description" style="color:gray; border-bottom:2px solid black">{{ description }}</p>

        <ul>
            <li v-for="(item, index) in items" :key="index" class="list">
                <slot :item="item" :index="index"></slot>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Project',
    props: {
        title: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        },
        coverImgUrl: {
            type:String
        },
        picUrl: {
            type: String,
        },
        description: {
            type:String
        },
    },
}
</script>

<style scoped>
.project-container {
    margin: 20px;
}

.header {
    display: flex;
    margin-left: 10px;
}

.cover-image {
    width: 80px;
    height: 80px;
    margin-left: 80px;
    padding: 20px;
}

.list {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid black;
}
</style>
