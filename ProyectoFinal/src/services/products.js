/* =====PRODUCT===== */

import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { openModal, closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";

// Guardar o Modificar
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", () => {
    handleSaveOrModifyElements();
});

// Funcion de Guardar
const handleSaveOrModifyElements = () => {
    const name = document.getElementById("name").value,
        price = document.getElementById("price").value,
        img = document.getElementById("img").value,
        categoria = document.getElementById("categoria").value;

    let object = null;

    if (productoActivo) {
        object = {
            ...productoActivo, //Operador split, itera un objeto
            name,
            price,
            img,
            categoria,
        }
    } else {
        object = {
            id: new Date().toISOString(),
            name,
            price,
            img,
            categoria,
        };
    }
    Swal.fire({
        title: "Correcto!",
        text: "Producto guardado correctamente!",
        icon: "success"
    });

    setInLocalStorage(object);
    handleGetProductsToStore(); //Para que se vuelva a llamar cuando se ingrese un nuevo elemento
    closeModal();
};

// Eliminar Elemento

export const handleDeleteProduct = () => {
    Swal.fire({
        title: "¿Está seguro que desea eliminar el producto?",
        text: "Si lo eliminas será permanentemente!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
    }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el) => el.id !== productoActivo.id);

            //Setear el nuevo array
            localStorage.setItem("products", JSON.stringify(result));

            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);

            closeModal();
        } else {
            closeModal();
        }
    });
}