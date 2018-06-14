'use strict';

const main = function (){
  $('a').click(event => {
    $('.hero img').attr('src', $(event.currentTarget).children('img').attr('src'));
  });
};


$(main);

