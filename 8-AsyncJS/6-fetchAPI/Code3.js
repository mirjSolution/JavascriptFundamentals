let todo = {
  userId: 101,
  id: 1,
  title: 'New title',
  completed: false,
};
const response = fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(todo),
}).then((res) => console.log(res));
