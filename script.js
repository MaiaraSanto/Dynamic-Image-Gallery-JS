// Capturando elementos do DOM
const imageInput = document.getElementById('imageInput');
const addButton = document.getElementById('addButton');
const imageContainer = document.getElementById('imageContainer');

// Verificar se há imagens previamente adicionadas no localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const images = JSON.parse(localStorage.getItem('images')) || [];
    images.forEach(image => {
        addImageToGallery(image);
    });
});

// Adicionar imagem ao clique do botão
addButton.addEventListener('click', () => {
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const imageData = {
                id: Date.now(), // Identificador único para a imagem
                dataURL: reader.result // Dados da imagem em formato de URL
            };
            // Verificar se a imagem já foi adicionada anteriormente
            const alreadyAdded = JSON.parse(localStorage.getItem('images')) || [];
            const exists = alreadyAdded.some(img => img.dataURL === imageData.dataURL);
            if (!exists) {
                addImageToGallery(imageData);
                saveImageToLocalStorage(imageData);
            } else {
                alert('Esta imagem já foi adicionada.');
            }
        };
    }
});

// Função para adicionar imagem à galeria
function addImageToGallery(imageData) {
    const imageElement = document.createElement('img');
    imageElement.src = imageData.dataURL;
    imageElement.setAttribute('data-id', imageData.id);
    imageElement.addEventListener('click', () => {
        removeImageFromGallery(imageData.id);
    });
    imageContainer.appendChild(imageElement);
}

// Função para remover imagem da galeria
function removeImageFromGallery(imageId) {
    const imageElement = document.querySelector(`img[data-id="${imageId}"]`);
    if (imageElement) {
        imageElement.remove();
        removeFromLocalStorage(imageId);
    }
}

// Função para salvar imagem no localStorage
function saveImageToLocalStorage(imageData) {
    const images = JSON.parse(localStorage.getItem('images')) || [];
    images.push(imageData);
    localStorage.setItem('images', JSON.stringify(images));
}

// Função para remover imagem do localStorage
function removeFromLocalStorage(imageId) {
    let images = JSON.parse(localStorage.getItem('images')) || [];
    images = images.filter(image => image.id !== imageId);
    localStorage.setItem('images', JSON.stringify(images));
}
