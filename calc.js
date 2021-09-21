$(document).ready(function(){

    // Function for calculating the result.
$('#equal').click(function(){
    $('#tarea').val($('#tarea').val() + $('#exp').val() + " = ")
    $('#exp').val(eval($('#exp').val()))
})    


    //Function for clearing the textbox value.
$('#clr').click(function(){
    $('#tarea').val($('#tarea').val() + $('#exp').val()  +"\n" )
    $('#exp').val('')
})  


})

// For inserting the characters or numbers to the text box.
function clicked(ch){
    var exp = document.getElementById('exp');
 exp.value = exp.value + ch;

}