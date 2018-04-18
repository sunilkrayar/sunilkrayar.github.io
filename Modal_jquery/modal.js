$(document).ready(()=>{
    $('.test').click(()=>{               //search bar

      $('.test').addClass('search')          //adding css class
    });
    $('.test').mouseleave(()=>{           //leave the searchbar

      $('.test').removeClass('search')
    });

        $('#menu').click(()=>{                       //click the button mentu
           $('.side').slideToggle();                  //show the list item

         
        });



        $('.btn1').click(()=>{

        $('.modal1').slideDown();	
       
        });
        $('.close').click(()=>{
        	$('.modal1').hide();

        });
       });
