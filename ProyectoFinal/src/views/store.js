// ==============STORE================
import { setProductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { openModal } from "./modal";


// funcion que se encarga de traer elementos y llamar al render
export const handleGetProductsToStore = () => {

    const products = handleGetProductLocalStorage()
    handleRenderList(products);

};

// se encarga de filtrar y de renderizar la sección con todos sus respectivos elementos
export const handleRenderList = (productsIn) => {
    // filtrado de arrays por categoria
    const burgers = productsIn.filter((el) => el.categories == 'Hamburguesas')
    const papas = productsIn.filter((el) => el.categories == 'Papas')
    const gaseosas = productsIn.filter((el) => el.categories == 'Gaseosas')

    // renderiza los elementos de la sección
    const renderProductGroup = (productos, title) => {
        if (productos.lenght > 0) {
            const productosHTML = productos.map((producto, index) => {

                return `
                <div id="product-${producto.categories}-${index}" class="containerTargetItem">
                    <div>
                        <img src=${producto.imagen}/>
                        <div>
                            <h2>${producto.nombre}</h2>
                        </div>
                        <div>
                            <p><b>Precio:</b> $ ${producto.precio}</p>
                            <p><b>Precio:</b> $ ${producto.categoria}</p>
                        </div>
                    </div>
                </div>`
            });
            // retorna la sección con todos los elementos dentro
            return `
                <section class='sectionStore'>
                    <div class="containerTitleSection">
                        <h3>${title}</h3>
                    </div>
                    <div class='containerProductStore'>
                        ${productosHTML.join("")}
                    </div>
                </section>
            `;
        } else {
            return "";
        }
    };

    // renderizar cada uno de los prodcutos dentro de su categoria
    const appContainer = document.getElementById('storeContainer');
    appContainer.innerHTML = `

        ${renderProductGroup(burgers, "Hamburguesas")}
        ${renderProductGroup(papas, "Papas")}
        ${renderProductGroup(gaseosas, "Gaseosas")}
    `;

    //añaden los eventos de manera dinámica 
    const addEvents = (productsIn) => {

        productsIn.forEach((element, index) => {

            const productContainer = document.getElementById(`product-${element.categories}-${index}`);

            productContainer.addEventListener("click", () => {
                setProductoActivo(element);
                openModal();
            });

        });


    };

    addEvents(burgers)
    addEvents(papas)
    addEvents(gaseosas)

};