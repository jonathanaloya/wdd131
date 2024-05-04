const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    const input = document.querySelector('#favchap').value;
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = input;
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', function() {
        li.remove();
        input.focus();
    });
    li.appendChild(deleteButton);
    list.appendChild(li);
    document.querySelector('#favchap').value = '';
});