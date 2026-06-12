const cart=[];

function addToCart(item){
    cart.push(item);
    console.log("Item added to cart");
}

function listItem(){
    for(let item of cart)
        console.log(item)
}

function deleteItem(name){
    let index;
    for(let i=0;i<cart.length;i++){
        if(cart[i]===name){
            index=i;
            break
        }
    }
    cart.splice(index,1);
    console.log(name,"deleted sucessfully");
}

addToCart("Phone")
addToCart("shirt")
addToCart("Tshirt")
console.log(cart)
listItem()
deleteItem("shirt")
listItem()
