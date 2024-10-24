import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

export const handleSearchProductByName = () => {
    const inputHeader = document.getElementById("inputHeader");
    const products = handleGetProductLocalStorage();
    console.log(products);
    const result = products.filter((el) => el.name.toLowerCase().includes(inputHeader.value));
    handleRenderList(result);
};