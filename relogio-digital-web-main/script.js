function updateClock() {
    const now = new Date();
    const hora = now.getHours().toString().padStart(2, '0');
    const minuto = now.getMinutes().toString().padStart(2, '0');
    const segundo = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('hora').textContent = hora;
    document.getElementById('minuto').textContent = minuto;
    document.getElementById('segundo').textContent = segundo;


    const dia = now.getDate().toString().padStart(2, '0');
    const mes = (now.getMonth() + 1).toString().padStart(2, '0');
    const ano = now.getFullYear();

    document.getElementById('data').textContent = `${dia}/${mes}/${ano}`;
}

setInterval(updateClock, 1000);

updateClock();
