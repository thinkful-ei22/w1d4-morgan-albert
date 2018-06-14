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


const checkedItems = function () {
$('.shopping-list').on('click', '.shopping-item-toggle', function(event){
  $(event.currentTarget).parents('li').children('span').toggleClass('shopping-item__checked')
  })
}
$(checkedItems)


const removeItems = function (){
  $('.shopping-list').on('click', '.shopping-item-delete', function(event){
    $(event.currentTarget).parents('li').remove();
    })
  }

$(removeItems)




// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list
