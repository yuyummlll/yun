<template>
    <tr :class="{ selected: selected }" @click="handleRow">
        <td>{{ index + 1 }}</td>
        <td>{{ book.name }}</td>
        <td>￥{{ book.price }}</td>
        <td>
            <div>
                <button @click="handleDecrease" :disabled="book.quantity <= 0">-</button>
                <span>{{ book.quantity }}</span>
                <button @click="handleIncrease">+</button>
            </div>
        </td>
        <td>
            <button @click="handleDel">移除</button>
        </td>
    </tr>
</template>

<script>
export default {

    emits: ['selected-onebook', 'update-quantity', 'del-book'],
    props: {
        book: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
        selected: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        handleRow() {
            this.$emit("selected-onebook", this.index);
        },
        handleIncrease() {
            this.$emit("update-quantity", this.index, 1);
        },
        handleDecrease() {
            if (this.book.quantity > 0) {
                this.$emit("update-quantity", this.index, -1);
            }
        },
        handleDel() {
            this.$emit("del-book", this.index);
        },
    },
};
</script>

<style>
th {
    background-color: rgb(245, 244, 244);
}

th,
td,
tbody {
    border: 1px solid black;
    padding: 10px;
}

.selected {
    background-color: orange;
}
</style>