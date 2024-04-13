# Dynamic-Image-Gallery-JS

#

### <div align="center" target="_blank"> [Acesse aqui](https://galerry-dynamic.netlify.app/)

<img src="./img.JPG" align="center" height="400em" width="100%"> 
</div>

#

O que fazer?

Conceitos Essenciais:

📌 Manipulação do DOM: Usar métodos como document.createElement , appendChild , removeChild , document.getElementById , para adicionar e remover imagens dinamicamente.

📌Local Storage: Armazenar informações sobre as imagens adicionadas/removidas para que o estado da galeria seja persistido entre
as sessões de navegação.

Desenvolvimento Passo a Passo:

1. Estrutura HTML: Criar uma estrutura básica com um input para carregar imagens, um botão para adicionar e um container onde as imagens serão exibidas.

2. Adicionar Imagens:
Capturar o evento de clique no botão de adicionar.
Ler a imagem do input e criar um elemento img no DOM para exibi-la na
galeria.
Armazenar informações da imagem adicionada no localStorage .

3. Remover Imagens:

- Associar um evento de clique a cada imagem para remoção.
- Remover a imagem do DOM e atualizar o localStorage para refletir essa
mudança.

4. Persistência com Local Storage:

- Ao carregar a página, verificar o localStorage para qualquer imagem previamente adicionada e exibi-las automaticamente.

Dicas:

📌 Utilize identificadores únicos para cada imagem para facilitar a remoção e gerenciamento no localStorage .

📌 Considere o limite de armazenamento do localStorage e implemente medidas para tratá-lo, como compressão de imagem ou limitação do número de imagens.
