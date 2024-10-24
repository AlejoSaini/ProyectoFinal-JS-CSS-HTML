// ==============LOCALSTORAGE================

export const handleGetProductLocalStorage = () => {

    const products = JSON.parse(localStorage.getItem("products"));

    if (products) {
        return products;
    } else {
        return [];
    }

};

// recibir un producto
export const setInLocalStorage = (productIn) => {
    if (productIn) {
        // traer los elementos
        let productsInLocal = handleGetProductLocalStorage();
        console.log(productIn); 
        const existingIndex = productsInLocal.findIndex((productsLocal) =>
            productsLocal.id === productIn.id);
        // verficar si el elemento existe
        if (existingIndex != -1) {
            // si existe debe reemplazarse
            productsInLocal[existingIndex] = productIn;
        } else {
            // sino debe agregarse
            productsInLocal.push(productIn);
        }

        // setear el nuevo array
        localStorage.setItem("products", JSON.stringify(productsInLocal));
    }

};