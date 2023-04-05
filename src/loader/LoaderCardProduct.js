import { getShoppingCart } from "../utilities/fakedb";

// custome loader ar jonno..
const cardProductsLoader=async()=>{
    const loaderProducts=await fetch('products.json');
    const products=await loaderProducts.json();
    // 3.akta const declear kore empty akta array bosabo jano ja ase ta push kora jai
    const savedCart=[]
    // 1async use
    const storedCart=getShoppingCart();
    console.log(storedCart);
    // console.log(products);
// 2.storedCart akta object sejonno for in calabo..
for(const id in storedCart){
    const addedProduct=products.find(pd=>pd.id===id);
    if(addedProduct){
        const quantity=storedCart[id];
        addedProduct.quantity=quantity
        console.log(addedProduct)
        // step 4 add the addedproduct to the saved cart..
        savedCart.push(addedProduct)
    }
}
    return savedCart;


}
export default cardProductsLoader;
// loader k custome korar jonno async/fetch diye data load kora hoyeche
// then aita loader ar jaigay cardproductsLoader k call kore dawa hoyeche.