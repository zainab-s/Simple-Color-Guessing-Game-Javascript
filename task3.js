
let counter = 0;

var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
color.sort();
var rand = color[Math.floor(Math.random() * color.length)];

function myFunction() {
    var inputColor=document.getElementById("inputColor").value;
    var i = color.indexOf(inputColor);
    //iF Input Color is not in the Array
    if( i < -1){
        $('#ModalMessage').modal('show');
    var ChangeBody=document.getElementById("Message");
    ChangeBody.innerHTML="";
    ChangeBody.innerHTML="<div><p>Sorry, I dont Recognize your color . <br> Please try again.</p></div>";
}
else if(rand>inputColor){
    $('#ModalMessage').modal('show');
   // alert(rand);
    var ChangeBody=document.getElementById("Message");
    ChangeBody.innerHTML="";
    ChangeBody.innerHTML="<div><p>Sorry, Your guess is not correct . <br> Hint:Your guess is alphabetically higher than mine . <br>Please try again.</p></div>";
}
else if(rand<inputColor){
    $('#ModalMessage').modal('show');
    //alert(rand);
    var ChangeBody=document.getElementById("Message");
    ChangeBody.innerHTML="";
    ChangeBody.innerHTML="<div><p>Sorry, Your guess is not correct . <br> Hint:Your guess is alphabetically lower than mine . <br>Please try again.</p></div>";
}
else if (rand==inputColor){
    $('#ModalMessage').modal('show');
    var ChangeBody=document.getElementById("Message");
    ChangeBody.innerHTML="";
    ChangeBody.innerHTML="<div><p>Congratulations ! You have guessed the color . <br> It took "+counter+" gusses to finish the game . <br>You can see the color in Background.</p></div>";
    document.body.style.backgroundColor = rand;
    counter=-1;

}


}
function myMessageFunction() {
    if(counter===-1)
    { location.reload();
}
else { $('#myModal').modal('show');
    counter++;  }
       
}
