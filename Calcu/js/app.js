    var onedato=0;
    var twodato=0;

$('button').click(function(){;
      var tipo=$(this).attr('tipo-botton');
      var dato=$(this).attr('valor');
      $('#barra').val(dato);
      if (tipo=='number') {
      if (operation==true) {
        twodato=onedato+dato;
        $('#barra').val(onedato.replace(/^0+/, ''));
      }else{
        onedato= onedato+dato;
        $('#barra').val(onedato.replace(/^0+/, ''));
      }
      }else if(tipo=='operation'){
      var operation=true;
      onedato=onedato+dato;
      $('#barra').val(onedato.replace(/^0+/, ''));
      }
      if (tipo=='delete_all') {
        $('#barra').val('');
        onedato=0;
        twodato=0;
      }
}); 
    

    $('#igual').click(function(){
       var dato=$('#barra').val();
     
      var suma=dato.indexOf('+');
      var resta=dato.indexOf('-');
      var divicion=dato.indexOf('/');
      var multiplicacion=dato.indexOf('*');
      var raiz cuadrada=dato.indexOf('*');
      var multiplicacion=dato.indexOf('*');
      if(suma=="1"){
         var array_dato=dato.split('+');
          var num1=array_dato[0];
          var num2=array_dato[1];
          var resultado=parseInt(num1)+parseInt(num2);
      $('#barra').val(resultado);
      }else if(resta=='1'){
           var array_dato=dato.split('-');
            var num1=array_dato[0];
            var num2=array_dato[1];
            var resultado=parseInt(num1)-parseInt(num2);
            $('#barra').val(resultado); 
          }else if(multiplicacion=='1'){
           var array_dato=dato.split('*');
            var num1=array_dato[0];
            var num2=array_dato[1];
            var resultado=parseInt(num1)*parseInt(num2);
            $('#barra').val(resultado); 
          }else if(divicion=='1'){
           var array_dato=dato.split('/');
            var num1=array_dato[0];
            var num2=array_dato[1];
            var resultado=parseInt(num1)/parseInt(num2);
            $('#barra').val(resultado);
            }else if(raiz cuadrada=='1'){
           var array_dato=dato.split('/');
            var num1=array_dato[0];
            var num2=array_dato[1];
            var resultado=parseInt(num1)/parseInt(num2);
            $('#barra').val(resultado);
            }else if(divicion=='1'){
           var array_dato=dato.split('/');
            var num1=array_dato[0];
            var num2=array_dato[1];
            var resultado=parseInt(num1)/parseInt(num2);
            $('#barra').val(resultado);
      }
Math.sqrt

      

    });
 
    
