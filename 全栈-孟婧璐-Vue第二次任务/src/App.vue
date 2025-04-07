<template>
  <div id="app">
    <h2>总价:￥{{ totalPrice }} 当前选中书籍：{{ selectedBookName }}</h2>
    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>

        <Project v-for="(book, index) in books" :key="index" :book="book" :index="index"
          :selected="index === selectedIndex" @selected-onebook="handleRowSelected(index)"
          @update-quantity="updateQuantity" @del-book="delBook" />

        <!--新增-->
        <tr v-if="isAdding">
          <td>{{ books.length + 1 }}</td>
          <td><input v-model="newBook.name" /></td>
          <td><input v-model.number="newBook.price" type="number" /></td>
          <td>
            <div>
              <button @click="decreaseNewQuantity" :disabled="newBook.quantity <= 0">-</button>
              <span>{{ newBook.quantity }}</span>
              <button @click="increaseNewQuantity">+</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>


    <div>

      <button v-if="!isAdding" @click="qiehuanButton(true)">添加</button>
      <div v-else>
        <button @click="confirmAddBook">确认</button>
        <button @click="cancelAddBook">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
import Project from "./components/Project.vue";

export default {
  components: {
    Project,
  },
  data() {
    return {
      books: [
        { name: "《JavaScript高级程序设计》", price: 126, quantity: 1 },
        { name: "《你不知道的 JS(上卷)》", price: 78, quantity: 1 },
        { name: "《你不知道的 JS(中卷)》", price: 76, quantity: 1 },
        { name: "《你不知道的 JS(下卷)》", price: 64, quantity: 1 }
      ],
      newBook: { name: "", price: 0, quantity: 1 },
      isAdding: false,  //初始状态没有进入添加模式
      selectedIndex: -1, // 初始没有选行
    };
  },
  computed: {
    totalPrice() {
      return this.books.reduce(
        (sum, book) => sum + book.quantity * book.price,
        0
      );
    },
    selectedBookName() {
      if (this.selectedIndex !== -1) {
        return this.books[this.selectedIndex].name;
      }
      else {
        return "";
      }

    },
  },
  methods: {
    //添加或确认取消按钮的切换，true开启添加模式
    qiehuanButton(bool) {
      this.isAdding = bool;
      this.newBook = { name: "", price: 0, quantity: 1 };
    },

    confirmAddBook() {
      if (!this.newBook.name.trim()) {
        alert("书名不能为空");
        return;
      }

      if (isNaN(this.newBook.price) || this.newBook.price <= 0) {
        alert("价格应为正数");
        return;
      }

      this.books.push({
        ...this.newBook
      });
      this.qiehuanButton(false);
    },
    cancelAddBook() {
      this.qiehuanButton(false);
    },
    increaseNewQuantity() {
      this.newBook.quantity++;
    },
    decreaseNewQuantity() {
      if (this.newBook.quantity > 0) {
        this.newBook.quantity--;
      }

    },
    handleRowSelected(index) {
      this.selectedIndex = index;
    },
    updateQuantity(index, change) {
      this.books[index].quantity += change;

    },
    delBook(index) {
      this.books.splice(index, 1);
      this.selectedIndex = -1;
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  text-align: center;
  width: 800px;
  height: 200px;
  margin-bottom: 15px;
}
</style>