//Actividad 1
const usuario = prompt ('¿Eres bellisimo/a ? Si/No');

if (usuario == 'Si')
{
console.log('Ciertamente');
}
else if(usuario=='No')
{
console.log('No te creo');
}
else{
    console.log('Introduce un Si o un No')
}

//Actividad 2
/*let numero = prompt ('Inserte un numero entero')

if(numero%2==0 && numero>=1)
{
    console.log('x numero es divisible entre dos')
}
else if(numero%2==1)
    {
console.log('x numero no es divisible entre dos')
    }
    else{
        console.log('Inserte un numero entero');
    }
    */
//Actividad 3
/*let numeropar = prompt ('Inserte un numero')
    if(numeropar%2==0 && numeropar>=1)
    {
        alert("Es par");
    }
    else if(numeropar%2==1)
        {
    alert ("No es par");
        }
        else{
            alert('Inserte un numero entero');
        }
        */
       //Actividad 4
       /*let cliente = prompt ('Ingrese su numero de cliente');
       if(cliente == 1000 && cliente >= 1)
       {
        console.log('Ganaste un premio')
       }
       else if(cliente != 1000 && cliente >= 1)
       {
        console.log('Lo sentimos, sigue participando')
       }
       else{
        console.log('Inserte un número de cliente')
       }
       */
      //Actividad 5
      /*let numero1 = prompt('Inserte un numero')
      let numero2 = prompt('Inserte otro numero')
      if(numero1>numero2 &&numero1>=1 && numero2>=1)
      {
        alert(numero2);
      }
      else if(numero1<numero2 &&numero1>=1 && numero2>=1)
      {
        alert(numero1)
      }
      else{
        alert("Inserte un numero")
      }
      */
     //Actividad 6
     /*let numero1 = prompt ('Ingrese un numero');
     let numero2 = prompt ('Ingrese otro numero');
     let numero3 = prompt ('Ingrese un numero más');
     if(numero1 == numero2 && numero2== numero3 &&numero1 ==numero3 && numero1 >= 0 && numero2 >=0 && numero3 >=0 )
     {
        alert('Todos son iguales');
     }
    else if(numero1>numero2 && numero1>numero3 && numero1 >= 0 && numero2 >=0 && numero3 >=0)
     {
        alert(numero1);
     }
     else if(numero2>numero1 && numero2>numero3 && numero1 >= 0 && numero2 >=0 && numero3 >=0)
     {
        alert(numero2);
     }
     else if(numero3>numero1 && numero3>numero2 && numero1 >= 0 && numero2 >=0 && numero3 >=0)
     {
        alert(numero3);
     }
     else{
        alert('Inserte un numero entero');
     }
     */
    //Actividad 7
    /*let dia = prompt ('Ingrese un dia de la semana')
    if (dia == 'sabado' || dia == 'domingo')
    {
        alert ('Es fin de semana y es momento de embriagarse');
    }
    else if (dia == 'lunes')
    {
        alert('Hoy es inicio de semana');
    }
    else if(dia == 'viernes')
    {
        alert('Al fin es viernes y el cuerpo lo sabe');
    }
    else{
        alert('Ingresa un dia que no sea esta de favor');
    }
    */
   //Actividad 8
   /*let cal = prompt ('Ingrese una calificación del 1 al 10')
   if(cal>=1 && cal<=10)
   {
    if(cal<6)
    {
        alert ('Reprobado');
    }
    else if (cal>=6 && cal<=8)
    {
        alert('Regular');
    }
    else if(cal == 9)
    {
        alert ('Bien');
    }
    else if (cal == 10)
    {
        alert ('Excelente');
    }
   }
   else 
   {
    alert('Error');
   }
   */
  //Actividad 9
  /*const preciobase = 50
  const usuario = prompt ('¿Su helado lo quiere con topping? Si/No')
  if(usuario == 'Si')
  {
    let saborhelado =prompt ('¿Que sabor desea adquirir? Los hay en Oreo, Kitkat, Brownie.')
    if(saborhelado == 'Oreo')
    {
        let preciooreo = preciobase + 10
        alert('El precio es:' + preciooreo);
    }
    else if (saborhelado == 'Kitkat')
    {
        let preciokit = preciobase + 15
        alert('El precio es:' + preciokit);
    }
    else if(saborhelado == 'Brownie')
    {
        let preciobrownie = preciobase + 20
        alert('El precio es:' + preciobrownie);
    }
    else{
        alert('Por el momento no se tiene disponible este sabor')
    }
  }
  else 
  {
    alert('El precio del helado sin topping es:' + preciobase);

  }
  */
 //Actividad 10
 /*
 const usuario = prompt ('¿Esta interesado en algun programa de desarrolo de aplicaciones en nuestro protal? Si/No');
 const course = 4999;
 const carrera = 3999;
 const master = 2999;
 if (usuario == 'Si')
 {
    let beca = prompt('Cuenta con una de las siguientes becas: Beca Facebook, Beca Google o Beca Jesua?')
    if( beca == 'Beca Facebook')
    {
        let costcourse = course*0.80
        alert('Costo mensual del course es: ' + costcourse) 
        let costcarrera = carrera*0.80
        alert('El costo mensual de la carrera es: ' + costcarrera)
        let costmaster = master*0.80
        alert ('El costo mensual del master es: ' + costmaster)
        let total = costcourse*2 + costcarrera*6 + costmaster*12
        alert('El costo total del programa educativo es: ' + total)
    }
    else if(beca == 'Beca Google')
    {
        let costcourse = course*0.85
        alert('Costo mensual del course es: ' + costcourse) 
        let costcarrera = carrera*0.85
        alert('El costo mensual de la carrera es: ' + costcarrera)
        let costmaster = master*0.85
        alert ('El costo mensual del master es: ' + costmaster)
        let total = costcourse*2 + costcarrera*6 + costmaster*12
        alert('El costo total del programa educativo es: ' + total)
    }
    else if(beca == 'Beca Jesua')
    {
        let costcourse = course*0.50
        alert('Costo mensual del course es: ' + costcourse) 
        let costcarrera = carrera*0.50
        alert('El costo mensual de la carrera es: ' + costcarrera)
        let costmaster = master*0.50
        alert ('El costo mensual del master es: ' + costmaster)
        let total = costcourse*2 + costcarrera*6 + costmaster*12
        alert('El costo total del programa educativo es: ' + total)
    }
    else if(beca == 'No')
    {
        alert('Costo mensual del course es: ' + course) 
        alert('El costo mensual de la carrera es: ' + carrera)
        alert ('El costo mensual del master es: ' + master)
        let total = course*2 + carrera*6 + master*12
        alert('El costo total del programa educativo es: ' + total)
    }

 }
 else{
    alert('Ok, vuelve pronto')
 }
*/
//Actividad 11
/*const usuario = prompt ('Con cual de los siguientes vehiculos cuentas: Coche, moto o autobús')
if(usuario == 'Coche'|| usuario == 'coche')
{
    let kilometros = 0.20;
    let kilometraje = prompt ('¿Cuantos kilometros recorrio?');
    let extra = 5;
    let extra1 = 10;
    if (kilometraje>=1 && kilometraje<=100)
    {
        let total = kilometros*kilometraje + extra;
        alert('El total a pagar es: ' + total + '$')
    }
    else if (kilometraje>100)
    {
        let total = kilometros*kilometraje + extra1;
        alert('El total a pagar es: ' + total + '$')
    }{

    }
}
else if(usuario == 'Moto' || usuario =='moto')
{
    let kilometros = 0.10;
    let kilometraje = prompt ('¿Cuantos kilometros recorrio?');
    let extra = 5;
    let extra1 = 10;
    if (kilometraje>=1 && kilometraje<=100)
    {
        let total = kilometros*kilometraje + extra;
        alert('El total a pagar es: ' + total + '$')
    }
    else if (kilometraje>100)
    {
        let total = kilometros*kilometraje + extra1;
        alert('El total a pagar es: ' + total + '$')
    }

}
    else if(usuario == 'Autobús' || usuario =='autobús')
{
    let kilometros = 0.5;
    let kilometraje = prompt ('¿Cuantos kilometros recorrio?');
    let extra = 5;
    let extra1 = 10;
    if (kilometraje>=1 && kilometraje<=100)
    {
    let total = kilometros*kilometraje + extra;
            alert('El total a pagar es: ' + total + '$')
    }
    else if (kilometraje>100)
    {
            let total = kilometros*kilometraje + extra1;
            alert('El total a pagar es: ' + total + '$')
    }
}
else{
    alert ('Solo podemos calcular el total a pagar de las opciones: coche, moto o autobús')
}*/