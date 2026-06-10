function calcularTorque() {
    const tipoPerno = document.getElementById('tipoPerno').value;
    const diametro = parseFloat(document.getElementById('diametro').value);
    const clase = document.getElementById('clase').value;

    if (isNaN(diametro) || diametro <= 0) {
        document.getElementById('resultado').textContent = 'Introduce un diámetro válido';
        return;
    }

    let torque = 0;

    if (tipoPerno === 'iso') {
        if (clase === '8.8') {
            torque = diametro * 10;
        } else if (clase === '10.9') {
            torque = diametro * 12;
        } else if (clase === '12.9') {
            torque = diametro * 14;
        }
    } else if (tipoPerno === 'sae') {
        if (clase === 'grado2') {
            torque = diametro * 8;
        } else if (clase === 'grado5') {
            torque = diametro * 10;
        } else if (clase === 'grado8') {
            torque = diametro * 12;
        }
    }

    document.getElementById('resultado').textContent = `El torque recomendado es: ${torque} Nm`;
}