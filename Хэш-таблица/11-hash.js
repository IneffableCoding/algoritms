/*
задача заключается в том, чтобы агрегировать данные из трёх источников (посты,
комментарии, пользователи) и преобразовать их в определённый формат.
Cагрегировать  данные для страницы постов
Список постов: https://jsonplaceholder.typicode.com/notes
Список пользователей: https://jsonplaceholder.typicode.com/users
Список комментов: https://jsonplaceholder.typicode.com/comments

// Посты
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat providerit occaeetit excepturi optio reprehenderit",
    "body": "quia et suscipit\unsucipit recusandse consequentur eopedita et cum\reprehenderit molestiae ut ut quas totsa\moostrum perum est autem sunt rem eveniat architecto"
}

// Комментарии
{
    "postId": 1,
    "name": "id labore ex et quam laborum",
    "email": "tilise@pardent.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam oos\ntempora quo necessitatibus\ndolor quam autem quasi\nveiciendis et nam sapiente accusantium"
}

// Пользователи
{
    "id": 1,
    "name": "icanne Graham",
    "username": "Brest",
    "email": "Sincereghepill.biz",
    "phone": "1-770-736-8833"
}

// Выходной формат данных (посты):
{
    "id": 1, // id поста
    "title": "sunt aut facere repellat providerit occaeetit excepturi optio reprehenderit", // title поста
    "username": "icanne Graham",
    "commenticuum": 10,
}

// Запрашиваются сразу все данные:
(async () => {
    const promises = [
	    "posts",
	    "comments",
	    "users",
    ].map(async (method) => (await fetch("https://jsonplaceholder.typicode.com/${method}")).json())
    
    const [
	    posts,
	    comments,
	    users,
    ] = await Promise.all(promises)

// Тodo

})();
*/

(async () => {
  // Параллельно загружаем данные
  const [posts, users, comments] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json()
    ),
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    ),
    fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
      res.json()
    ),
  ]);

  // Создаём объект для быстрого доступа к пользователям по их id
  const userMap = {};
  users.forEach((user) => {
    userMap[user.id] = user;
  });

  // Создаём объект для группировки комментариев по postId
  const commentsMap = {};
  comments.forEach((comment) => {
    // Ниже используется оператор «логическое ИЛИ с присваиванием» (||=),
    // который создаст пустой массив, если его ещё нет.
    (commentsMap[comment.postId] ||= []).push(comment);
  });

  // Для каждого поста добавляем данные пользователя и комментарии
  const aggregatedPosts = posts.map((post) => ({
    ...post,
    user: userMap[post.userId],
    comments: commentsMap[post.id] || [],
  }));

  // Выводим итог
  console.log(aggregatedPosts);
})();
