import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      toDos: [
        {
          toDoName: "Buy Cheese",
          priority: "low"
        },
        {
          toDoName: "Code This To Do App",
          priority: "high"
        }
      ],
      newToDo: "",
      newPriority: "",
      listPriority: false
    },
    methods: {
      saveToDoItem: function() {
        this.toDos.push({
          toDoName: this.newToDo,
          priority: this.newPriority
        });
        this.newToDo = "";
        this.newPriority = "";
      },
      toggleSort: function() {
        this.listPriority = !this.listPriority
      }
      // saveNewItem: function () {
      //   this.items.push({
      //     name: this.newItem,
      //     isPurchased: false
      //   });
      //   this.newItem = "";
      // },
      // buyItem: function (index) {
      //   this.items[index].isPurchased = true;
      // }
    }
  });
});
