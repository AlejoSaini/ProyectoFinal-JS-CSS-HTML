import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";

/* =====POP UP===== */
const buttonCancel = document.getElementById("cancelButton");
buttonCancel.addEventListener("click", () => {
    closeModal();
});

// funciones abrir/cerrar modalL
export const openModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "flex";
    const buttonDelete = document.getElementById("deleteButton");

    if (productoActivo) {
        buttonDelete.style.display = "block";
    } else {
        buttonDelete.style.display = "none";
    }

    if (productoActivo) {

        const name = document.getElementById("name"),
            price = document.getElementById("price"),
            img = document.getElementById("img"),
            categoria = document.getElementById("categoria");

        name.value = productoActivo.name;
        price.value = productoActivo.price;
        img.value = productoActivo.img;
        categoria.value = productoActivo.categoria;

    }
};
export const closeModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "none";
    setProductoActivo(null);
    resetModal();
};
const resetModal = () => {
    const name = document.getElementById("name"),
        price = document.getElementById("price"),
        img = document.getElementById("img"),
        categoria = document.getElementById("categoria");

    name.value = "";
    price.value = 0;
    img.value = "";
    categoria.value = "Seleccione una Categoria";
}

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener('click', () => {
    handleButtonDelete();
})

const handleButtonDelete = () => {
    handleDeleteProduct();
};