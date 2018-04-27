// main document ready function to check if dom is loaded fully or not

let myFacebookToken;

$(document).ready(() => {
   
    myFacebookToken=prompt('Please Enter the Movie Name')

    if (myFacebookToken == null || myFacebookToken == "") {

        alert("Please enter the  Input");


    } else {
         
        getAllDetails();
      
        

    }
 // end if condition
}); // end document.ready function

let getAllDetails = () => {


    // API call to get user details

    $.ajax({
        type: 'POSt',
        dataType: 'json',
        async: true,
        url: ' http://www.omdbapi.com/?apikey=d5892be4&t=' + myFacebookToken,

        success: (response) => {


            console.log(response);

            $('#title').append(response.Title);

            $('#language').append(response.Language);
             $('#country').append(response.Country);
            $('#year').append(response.Year);
             $('#actors').append(response.Actors);
             $('#director').append(response.Director);
              $('#imdbID').append(response.imdbID);
              $('#ratings').append(response.imdbRating,'/10');
                $('#genre').append(response.Genre);
              
                 $('#plot').append(response.Plot);
              $('#error').append(response.Error);
              

            $('#profilePhoto').html('<img src="' + response.Poster + '" class="img-fluid profileHeight"/ alt=" Sorry No Image">');

            $('#cover').css(response.Poster);


        }, error: (err) => {

              alert("some error occured")


        },

        beforeSend:()=>{
                          $('#dataSection').show();
        },
        complete:()=>{
            
        },


    });// end ajax call 

}//getallDetails//