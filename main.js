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
        name: 'piza',
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

data.map(function renderList(item){
   let {id, name, image, price, size} = item;
   console.log(item)
   list.innerHTML =` 
   <div class="food-item">
   <div class="image" style="background-image: url(${image});"></div> 
   <div class="food-item_product">
       <div class="flex">
           <h3>${name}</h3>
           <span class="price">${price}</span>
       </div>
       <p>Lorem ipsum dolor sit amet consectetur.</p>
       <div class="flex">
           <div >
               <span class="sizeM">M</span>
               <span class="sizeL">L</span>
           </div>
           <div>
               <button>Đặt Hàng</button>
           </div>
       </div>

   </div>
                        
</div> `
})