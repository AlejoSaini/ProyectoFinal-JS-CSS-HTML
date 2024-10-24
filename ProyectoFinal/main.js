import { setInLocalStorage } from "./src/persistence/localStorage";
import { renderCategories } from "./src/services/categories";
import { handleGetProductsToStore } from "./src/views/store";
import './style.css';

// ============APLICACIÓN============

handleGetProductsToStore();




renderCategories();

// ============PRODUCT===============

const buttonAdd = document.getElementById('buttonAddElement');

buttonAdd.addEventListener('click', () => {

    openModal();

});



// =============POPUP=====================



const cancelButton = document.getElementById('cancelButton');

cancelButton.addEventListener('click', () => {

    handleCancelButton();

});

const handleCancelButton = () => {
    closeModal();
};

// FUNCIONES ABRIR CERRAR MODAL

const openModal = () => {
    const modal = document.getElementById('modalPopUp');
    modal.style.display = 'flex';
};

const closeModal = () => {
    const modal = document.getElementById('modalPopUp');
    modal.style.display = 'none';
};



// GUARDAR O MODIFICAR ELEMENTOS

const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener('click', () => {
    handleSaveOrModifyElements();
});


const handleSaveOrModifyElements = () => {
    const nombre = document.getElementById('nombre').value,
        imagen = document.getElementById('img').value,
        precio = document.getElementById('precio').value,
        categories = document.getElementById('categoria').value;
    
    let object ={
        id: new Date().toISOString(),
        nombre,
        imagen,
        precio,
        categories,
    };

    setInLocalStorage(object);

    closeModal();

};