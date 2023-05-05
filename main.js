let data = [
    {
        id: 'bm01', 
        image: '/image/anh1.jpg',
        name: 'Bánh mì kẹp thịt',
        price: 20000,
        size: {
            m: 20000,
            l: 30000
        },
    },
    {
        id: 'bm02', 
        image: '/image/anh2.jpg',
        name: 'Piza',
        price: 50000,
        size: {
            m: 50000,
            l: 65000
        },
    },
    {
        id: 'bm03', 
        image: '/image/anh3.jpg',
        name: 'Sandwich',
        price: 25000,
        size: {
            m: 25000,
            l: 40000
        },
    },
    {
        id: 'bm04', 
        image: '/image/anh4.jpg',
        name: 'Bánh mì hun khói',
        price: 30000,
        size: {
            m: 30000,
            l: 45000
        },
    },

]

let list =  document.querySelector('.girl-row')


// hien thi danh sach 


data.forEach(function renderList(item){
   let {id, name, image, price, size} = item;
   let li = document.createElement("li");
   li.classList.add("food-item");
  li.innerHTML=`
  <div class="image" style="background-image: url(${image});"></div> 
                        <div class="food-item_product">
                            <div class="flex">
                                <h3>${name}</h3>
                                <span class="f-w price">${price}</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <div class="flex">
                                <div >
                                    <span class="sizeM active">M</span>
                                    <span class="sizeL">L</span>
                                </div>
                                <div>
                                    <button>Đặt Hàng</button>
                                </div>
                            </div>

                        </div>
  `
  li.addEventListener('click',function InfomationItem(){
   renderCart(item)  
})
list.appendChild(li);
})

// hien thi thong tin cart san pham


 function renderCart(item){
    let {id, name, image, price, size} = item;
    let showCart = document.querySelector(".main_infomation_show")
    let div_card = document.createElement("div")
    div_card.classList.add("card_container")
    const priceCart = document.querySelectorAll('.card_container');
    for(let item of priceCart){
        let productN =  item.querySelector(".infomation_card h3")
        console.log(productN.innerHTML)
        if(productN.innerHTML == name){
            alert("San pham da co trong cua hang")
            let Card_input =  document.querySelector(".Input_card")
            Card_input.value = parseInt(Card_input.value) + 1
            return
        }
    }
   
    div_card.innerHTML=`
    <div class="d-f b-d">
                    <div class="image_card" style="background-image: url(${image});"></div>
                        <div class="infomation_card m-l">                          
                            <h3>${name}</h3>                           
                            <div class="card_cout d-f m-t">
                               <div>
                                <button class= "btn minus">-</button>
                                <input type="number" class="Input_card" value="1" min="1">
                                <button class = " btn total">+</button> 
                               </div>
                                <div class = "d-f">
                                        <p class=" Totalprice m-l f-w">${price}</p> 
                                        <button class = "btn del">X</button>
                                </div>      
                            </div>  
                        </div>
     </div>     
    `
   
    showCart.appendChild(div_card)

    totalProduct()

    totalPrice(priceCart)

    deleteCard(div_card)
}


// tang giam so luong san pham


function totalProduct(){
    let Card_minus = document.querySelector(".minus")
    let Card_total = document.querySelector(".total")
    let Card_input =  document.querySelector(".Input_card")

    Card_minus.addEventListener('click',function(){
        if(Card_input.value >= 1) {
            Card_input.value = parseInt(Card_input.value) - 1
            console.log(Card_input)
            totalPrice(document.querySelectorAll('.card_container'))
        }
    });
    
    Card_total.addEventListener('click',function(){
        Card_input.value = parseInt(Card_input.value) + 1
        totalPrice(document.querySelectorAll('.card_container'))
       
    });
}


// tong tien cac san pham



function totalPrice(priceCart) {
    let productPrice = 0;
    for (let item of priceCart) {     
        const value_Input = item.querySelector('.Input_card').value
        const value_Price = item.querySelector('.Totalprice').innerHTML
        totalProduct = value_Input * value_Price;
        productPrice += totalProduct;
    }
    const cart = document.querySelector(".total span")
    cart.innerHTML = productPrice.toLocaleString();
 }
//  function deleteCard(div_card) {
//     const remove = div_card.querySelector('.del')
    
//     remove.addEventListener('click', () => { 
//         div_card.remove()
//         totalPrice(document.querySelectorAll('.card_container'))
//     })
// }




