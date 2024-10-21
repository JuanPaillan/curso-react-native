// Función para calcular el área de un círculo
function calcularAreaCirculo(radio) {
    const PI = Math.PI;
    return PI * Math.pow(radio, 2);
}

// Función para calcular el área de un triángulo
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Función para calcular el área de un rectángulo
function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

// Función principal para pedir datos al usuario y calcular las áreas
function calcularAreas() {
    // Obtener datos para el círculo
    let radio = parseFloat(prompt("Ingresa el radio del círculo:"));
    let areaCirculo = calcularAreaCirculo(radio);
    console.log("Área del círculo: " + areaCirculo);

    // Obtener datos para el triángulo
    let baseTriangulo = parseFloat(prompt("Ingresa la base del triángulo:"));
    let alturaTriangulo = parseFloat(prompt("Ingresa la altura del triángulo:"));
    let areaTriangulo = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
    console.log("Área del triángulo: " + areaTriangulo);

    // Obtener datos para el rectángulo
    let baseRectangulo = parseFloat(prompt("Ingresa la base del rectángulo:"));
    let alturaRectangulo = parseFloat(prompt("Ingresa la altura del rectángulo:"));
    let areaRectangulo = calcularAreaRectangulo(baseRectangulo, alturaRectangulo);
    console.log("Área del rectángulo: " + areaRectangulo);
}

// Llamar a la función principal para calcular las áreas
calcularAreas();
