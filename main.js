$(document).ready(function(){

    
    $('#telefone').mask('(00) 00000-0000')


    $('#cep').mask('00000-000')

    $('#cpf').mask('000.000.000-00')

    $("#form-cad").validate({
    
        rules:{
            nome:{
                required: true, 
                maxlength: 100,
                minlength:10,
                minWords:2
        },
        email:{
            required: true,
            email:true
        }
        }
    
    })



})