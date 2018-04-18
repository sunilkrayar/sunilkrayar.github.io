$(document).ready(()=>{
    $('.test').click(()=>{//search bar

      $('.test').addClass('search')//adding css class
    });
    $('.test').mouseleave(()=>{//leave the searchbar

      $('.test').removeClass('search')
    });

        $('#menu').click(()=>{//click the button mentu
           $('.sidebar').slideToggle();//show the list item

         
        });


});