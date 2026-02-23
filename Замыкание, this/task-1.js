const userService = {
  currentFilter: "active",
  users: [
    { name: "Alex", status: "active" },
    { name: "Nick", status: "deleted" },
  ],
  getFilteredUsers: function () {
    return this.users.filter(function (user) {
      return user.status === this.currentFilter;
    });
  },
};
console.log(userService.getFilteredUsers());

/*
Вывод: []
Ошибка: this теряется в функции обратного вызова filter.
Исправление: Использовать стрелочную функцию или привязать контекст.

getFilteredUsers: function() {
    return this.users.filter(user => 
        user.status === this.currentFilter
    );
}

или

getFilteredUsers: function() {
    return this.users.filter(function(user) {
        return user.status === this.currentFilter;
    }.bind(this));
}
*/

/*
    .bind(this) ставим на внутреннюю функцию, которую передаем в .filter(), 
    чтобы у нее был правильный this. Не на сам filter, 
    не на внешнюю функцию — а именно на ту, внутри которой нужен доступ к this.currentFilter
*/