'use strict';

const main = function (){
  $('a').click(event => {
    const  thumbCat = $(event.currentTarget).children('img').attr('src');
    $('.hero img').attr('src', thumbCat);
  });
};


$(main);

