let menu = prompt("Elige una opción:\n1. Triangulo \n2. Regtangulo \n3. Cuadrado\n4. Circulo");

switch (menu) {
    case "1":     //triangulo
        let bt = parseFloat(prompt("Ingrese la medida de la base del triangulo"));
        let ht = parseFloat(prompt("Ingrese la medida de la altura del triangulo"));
        let c1 = parseFloat(prompt("Ingrese la medida del cateto1 del triangulo"));
        let c2 = parseFloat(prompt("Ingrese la medida del cateto2 del triangulo"));
        let c3 = parseFloat(prompt("Ingrese la medida del cateto3 del triangulo"));

        let areat = (bt*ht)/2;
        let perimetrot = (c1+c2+c3);

        alert("El area del triangulo es: " + areat + " cm cuadrados");
        alert("El perimetro del triangulo es: " + perimetrot + " cm");

        break;
    case "2": // regtangulo

        let br = parseFloat(prompt("Ingrese la medida de un lado del regtangulo: "));
        let hr = parseFloat(prompt("Ingrese la medida del otro lado del regtangulo: "));
    
        let arear = br*hr;
        let perimetror = (br+hr)*2;
    
        alert("El area del regtangulo es: " + arear +" cm cuadrados");
        alert("El perimetro del regtangulo es: " + perimetror + " cm");
        
        break;
    case "3": // cuadrado
        let lc = parseFloat(prompt("Ingrese la medida de un lado del cuadrado: "));

        let areac = lc*4;
        let perimetroc = lc ** 2;
    
        alert("El area del cuadrado es: " + areac +" cm cuadrados");
        alert("El perimetro del cuadrado es: " + perimetroc + " cm");
        
        break;
    case "4": //circulo
        let radio = parseFloat(prompt("ingresa el radio del circulo: "));

        let areaCirculo = Math.PI * Math.pow(radio, 2);
        let perimetroCirculo = 2 * radio * Math.PI;
    
        alert("El area del circulo es: " + areaCirculo +" cm cuadrados");
        alert("El perimetro del circulo es: " + perimetroCirculo + " cm");
        
        break;
    default:
        alert("Opción no válida");
}

