function mostrarCurso(event, curso) {
  event.preventDefault();

  // Lógica para obter título e descrição do curso selecionado
  var titulo;
  var descricao;

  switch (curso) {
      case 'curso1':
          titulo = 'Tecnologia';
          descricao = 'Descrição detalhada do Curso 1.';
          break;
      case 'curso2':
          titulo = 'Inovação';
          descricao = 'Descrição detalhada do Curso 2.';
          break;
      case 'curso3':
          titulo = 'Negócios';
          descricao = 'Descrição detalhada do Curso 3.';
          break;
      default:
          titulo = 'Curso Indefinido';
          descricao = 'Selecione um curso válido.';
          break;
  }

  // Atualizar o conteúdo do título e da descrição do curso
  document.getElementById('curso-titulo').textContent = titulo;
  document.getElementById('curso-descricao').textContent = descricao;

  // Remover a classe 'mostrar-linha' de todos os elementos .curso-info
  var todosDescricoes = document.querySelectorAll('.curso-info');
  todosDescricoes.forEach(function(descricaoElemento) {
      descricaoElemento.classList.remove('mostrar-linha');
  });

  // Adicionar a classe 'mostrar-linha' apenas ao elemento .curso-info atual
  document.getElementById('curso-descricao').parentNode.classList.add('mostrar-linha');
}
