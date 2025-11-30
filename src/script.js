fetch("livros.json")
    .then(resp => resp.json())
    .then(livros => {
        const lista = document.getElementById("lista-livros");
        livros.forEach(l => {
            const card = document.createElement("div");
            card.className = "livro";
            card.innerHTML = `
                <h3>${l.titulo}</h3>
                <p>Autor: ${l.autor}</p>
                <p>Preço: R$ ${l.preco}</p>
            `;
            lista.appendChild(card);
        });
    });
