// este es el codigo del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("lados del caudrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
 return lado*4;  
} 
// console.log("perimetro del cuadrado es: " +perimetroCuadrado +"cm");

function areaCuadrado(lado){
    return lado*lado;
}
// console.log("area del cuadrado es: " +areaCuadrado +"cm²");
console.groupEnd();

// este es el codigo del triangulo
// console.group("Triangulo");
// const ladoTrianguloUno = 6;
// const ladoTrianguloDos = 6;
// const baseTriangulo = 4;


// console.log("los lados del trinagulo miden: " 
//     + ladoTrianguloUno 
//     + "cm, " 
//     + ladoTrianguloDos 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm" 
// );

// const alturaTriangulo = 5.5;
// console.log("la altura del triangulo es de : " + alturaTriangulo +"cm");

function perimetroTriangulo(lado1, lado2, base){ 
    return lado1 + lado2 + base;
}
// console.log("perimetro del triangulo es: " +perimetroTriangulo +"cm");

// const areaTriangulo = (baseTriangulo*alturaTriangulo)/2
function areaTriangulo(base, altura){ 
    return (base*altura)/2;
}
// console.log("area del triangulo es: " +areaTriangulo +"cm²");

// console.groupEnd();

// // este es el codigo del triangulo
// console.group("circulo");

// //Radio 

// const radioCirculo = 4;
// console.log("el radio del circulo es de: " + radioCirculo + "cm");

// //Diametro
function diametroCirculo(radio){
    return radio*2;
}

// const diametroCirculo =  radioCirculo *2; 
// console.log("el diametro del circulo es de: " + diametroCirculo + "cm");

// //PI
const PI = Math.PI;
// console.log("PI es igual a: " + PI);


// //Circunferencia
function perimetroCirculo(radio) {
   const  diametro = diametroCirculo(radio);
   return diametro*PI;
}

// const perimetroCirculo = diametroCirculo* PI;
// console.log("el perimtetro  del circulo es de: " + perimetroCirculo + "cm");

// //Area
function areaCirculo(radio) {
    return (radio*radio)*PI;
 }
// const areaCirculo = (radioCirculo*radioCirculo) * PI;
// console.log("el area del circulo es: " + areaCirculo + "cm");

// console.groupEnd();

// aqui interactuamos con el html

// cuadrado
function calcularPerimetroCuardrado(){
     const input = document.getElementById("InputCuadrado");
     const value = input.value;

     const perimetro = perimetroCuadrado(value);
     alert (perimetro);
}
function calcularAreaCuardrado(){
    const input = document.getElementById("InputCuadrado");
     const value = input.value;

     const area = areaCuadrado(value);
     alert (area);
}

// triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert (perimetro);
}
 function calcularAreaTriangulo(){
    const altura = document.getElementById("InputTriangulo1");
    const value1 = altura.value;
    const Base = document.getElementById("InputTriangulo2");
    const value2 = Base.value;

     const area = areaTriangulo(value1, value2);
     alert (area);
}

// circulo

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);

    const perimetro = perimetroCirculo(value);
    alert (perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);

    const area = areaCirculo(value);
    alert (area);
}