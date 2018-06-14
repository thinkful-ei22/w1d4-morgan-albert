'use strict';

const addItem = function() {
  $('#js-shopping-list-form').on('submit', function(event) {
    event.preventDefault();
    const newItem = $('input').val();

    $('ul').append(`
    <li>
    <span class="shopping-item">${newItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
    </li>
    `);
    $('input').val('');
  });
};

$(addItem);
console.log('HI');