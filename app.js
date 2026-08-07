// Seleciona todos os elementos que possuem a classe "reveal"
const elementos = document.querySelectorAll(".reveal");


// Cria um observador para verificar quando
// cada elemento aparece na tela
const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      // Se o elemento estiver visível na tela
      if (entry.isIntersecting) {

        // Adiciona a classe "active"
        entry.target.classList.add("active");

        // Para de observar o elemento
        // depois que a animação acontecer
        observer.unobserve(entry.target);

      }

    });

  },

  {
    // A animação começa quando aproximadamente
    // 15% da seção estiver visível
    threshold: 0.15
  }

);


// Aplica o observador em cada seção
elementos.forEach((elemento) => {

  observer.observe(elemento);

});