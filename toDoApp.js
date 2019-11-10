'use strict';

let addButton = document.getElementById('addBtn');
addButton.addEventListener('click', function () {

  let todoItems = [];
  let todoItem = document.getElementById('input').value;
  todoItems.push(todoItem);

  if (document.getElementById('input').value === '') {
    window.alert('Первая проверка');
  } else {
    let li = document.createElement('li');
    let p = document.createElement('p');
    p.className = 'text';
    li.className = 'todo';
    for (let i = 0; i < todoItems.length; i++) {
      p.innerText = todoItems[i];
    }
    document.getElementById('input').value = '';

    li.appendChild(p);
    document.getElementById('todoList').appendChild(li);

    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let date = now.getDate();
    let hour = now.getHours();
    let min = now.getMinutes();
    let output = year + '/' + (month + 1) + '/' + date + ' ' + hour + ':' + min;
    li.insertAdjacentHTML('beforeend', '<div class="date">' + output + '</div>');
  }
});

  let list = document.getElementById('todoList');
  list.addEventListener('click', function (e) {
    if (e.target.tagName === 'P') {
      e.target.classList.toggle('checked');
    }
  });
