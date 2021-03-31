function shoppingList() {
  
    $('#js-shopping-list-form').submit(function(event){
      event.preventDefault();
      
      const listItem = $('#newText').val();
      
      
     if (listItem !== "") {
        $('.Lista').append(`<li>
          <span class="shopping-item">${listItem}</span>
            <button class="shopping-item-toggle">Check
            </button>
            <button class="shopping-item-delete">
              Delete
            </button>
        </li>
        <li>`);
        $('#newText').val("");
    }
  });
  
  
  $('.Lista').on('click', '.shopping-item-toggle', function(event) {
    $(this).siblings('.shopping-item').toggleClass('checked');
  });
  
  
  
  $('.Lista').on('click', '.shopping-item-delete', function(event) {
    $(this).parent().remove();
  });
  }
   
  
  
  
  $(shoppingList);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  