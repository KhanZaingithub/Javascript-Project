let productshtml = '';
products.forEach(element => {
    productshtml += `
            <div class="product-container">
                <div class="product-image-container">
                    <img class="product-image" src="${element.image}" alt="">
                </div>
                <div class="product-name limit-to-2-lines">
                    ${element.name}
                </div>
                <div class="product-rating-container">
                    <img class="product-rating-stars" src="images/ratings/rating-${(element.rating.stars)*10}.png">
                    <div class="product-rating-count link-primary">
                    ${element.rating.count}
                    </div>
                </div>
                <div class="product-price">
                    &#8377;${element.price}
                </div>
                <div class="product-quantity-container">
                    <select class="js-quantity-selector">
                        <option selected = "" value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                <div class="product-spacer"></div>
                </div>
                <div class="js-added-to-cart-message added-to-cart-message">
                    <img src="images/icons/checkmark.png">
                    Added
                </div>
                <button class="js-add-to-cart-button
                add-to-cart-button button-primary" data-product-name="${element.name}">
                    Add to Cart
                </button>
            </div>`
});

document.querySelector('.js-products-grid').innerHTML = productshtml;

// Imp
document.querySelectorAll('.js-add-to-cart-button').forEach((element) =>{
    element.addEventListener('click',()=>{ 
        const productname = element.dataset.productName;
        let matching;
        cart.forEach((cart_name)=>{
            if(cart_name.name === productname){
                matching = cart_name;
            }
        })    
        if(matching){
            matching.quantity += 1;
        }
        else{
            cart.push({
                name: productname,
                quantity: 1,
            })
        }  
        let cart_quantity = 0;  
        cart.forEach((item)=>{
            cart_quantity += item.quantity;
        })  

        document.querySelector('.js-cart-quantity').innerHTML = cart_quantity;
    });
});



// document.querySelectorAll('.js-quantity-selector').forEach((quanttity)=>
// {   
//                 quanttity.addEventListener('keyup',(element)=>{
//                 let a = 0;
//                 if(element.key === 'Enter'){
//                     if(quanttity.value === 1){
//                     a++; 
//                     }
//                     else{
//                     a = quanttity.value;
//                     } 
//                 } 
//                 // console.log(a);
//                 const b = (quanttity.querySelector('option').innerHTML = a);
//                 return b;
//             })
//     })



   
