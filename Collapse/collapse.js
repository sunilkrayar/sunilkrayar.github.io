$(document).ready(()=>{
    $('.test').click(()=>{                 //search bar

      $('.test').addClass('search')              //adding css class
    });
    $('.test').mouseleave(()=>{                   //leave the searchbar

      $('.test').removeClass('search')
    });

        $('#menu').click(()=>{                           //click the button mentu
           $('.sidebar').slideToggle();                         //show the list item

         
        });

        $('#ex1').click(()=>{

         $('.info').slideToggle('slow');


        });



        $('#ex2').click(()=>{

         $('.note').slideToggle('slow');


        });
     
     
$('#ex3').click(()=>{

         $('.note').addClass('colo');


        });
     
     });