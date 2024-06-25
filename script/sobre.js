// JavaScript para controlar o atraso da exibição do texto "SOBRE"
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('texto-sobre').classList.add('mostrar');
    }, 1000); // 1000 milissegundos = 1 segundo
});