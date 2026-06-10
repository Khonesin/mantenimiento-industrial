function calcularTorque() {
    const tipoPerno = document.getElementById('tipoPerno').value;
    const diametro = parseFloat(document.getElementById('diametro').value);
    const clase = document.getElementById('clase').value;
    const coeficiente = parseFloat(document.getElementById('coeficiente').value || 0.2); // Valor predeterminado 0.2

    if (isNaN(diametro) || diametro <= 0) {
        document.getElementById('resultado').textContent = 'Introduce un diámetro válido';
        return;
    }

    if (isNaN(coeficiente) || coeficiente <= 0) {
        document.getElementById('resultado').textContent = 'Introduce un coeficiente de fricción válido';
        return;
    }

    let fuerzaAxial = 0;

    if (tipoPerno === 'iso') {
        if (clase === '8.8') {
            fuerzaAxial = diametro * 60; // Valores aproximados
        } else if (clase === '10.9') {
            fuerzaAxial = diametro * 80;
        } else if (clase === '12.9') {
            fuerzaAxial = diametro * 100;
        }
    } else if (tipoPerno === 'sae') {
        if (clase === 'grado2') {
            fuerzaAxial = diametro * 50;
        } else if (clase === 'grado5') {
            fuerzaAxial = diametro * 70;
        } else if (clase === 'grado8') {
            fuerzaAxial = diametro * 90;
        }
    }

    const torque = coeficiente * diametro * fuerzaAxial;
    const unidad = tipoPerno === 'iso' ? 'Nm' : 'lb-in';

    document.getElementById('resultado').textContent = `El torque recomendado es: ${torque.toFixed(2)} ${unidad}`;
}