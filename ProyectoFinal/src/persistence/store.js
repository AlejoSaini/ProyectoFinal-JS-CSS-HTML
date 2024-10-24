import { setProductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { openModal } from "./modal";

/* =====STORE===== */
export const handleGetProductsToStore = () =>{
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
};

export const handleRenderList = (productsIn) =>{
    const burgers = productsIn.filter((el)=>el.categoria === "Hamburguesas");
    const fries = productsIn.filter((el)=>el.categoria === "Papas");
    const drinks = productsIn.filter((el)=>el.categoria === "Gaseosas");

    const renderProductGroup = (products, title) =>{
        if(products.length > 0){
            const productsHTML = products.map((product, index) =>{
                return `
                <div id="product-${product.categoria}-${index}" class="containerTargetItem">
                    <div>
                        <img src='${product.img}'/>
                        <div>
                            <h2>${product.name}</h2>
                        </div>
                        <div class="targetProps">
                            <p><b>Precio: </b> $ ${product.price} </p>
                        </div>
                    </div>
                </div>
                `
            });
            return `
            <section class='sectionStore'>
                <div class="containerTitleSection">
                    <h3>${title}</h3>
                </div>
                <div class='containerProductStore'>
                    ${productsHTML.join("")}
                </div>
            </section>
            `;
        } else{
            return "";
        };
    };
    //Renderizar cada uno de los productos dentro de su categoria
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(fries, "Papas")}
    ${renderProductGroup(drinks, "Gaseosas")}
    `;

    const addEvent = (productsIn) => {
        productsIn.forEach((element, index) => {
            const productContainer = document.getElementById(`product-${element.categoria}-${index}`);
                productContainer.addEventListener("click", ()=>{
                    setProductoActivo(element);
                    openModal();
                })
        });
    };
    addEvent(burgers);
    addEvent(fries);
    addEvent(drinks);
};