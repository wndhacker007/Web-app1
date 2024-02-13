const wrapper = document.querySelector(".wrapper");
const modal = document.querySelector(".modal");
const cards = document.querySelector(".cards");
const ochish = document.querySelector("#open");
const tostify = document.querySelector(".tostify")
const basketcount = document.querySelector("#basketcount")


const data = [
  {
    id: 1,
    img: "./imgs/coca-cola-classic_product_image-desktop.webp",
    nomi: "Colacola",
    narxi: "12000",
    soni: 1,
  },
  {
    id: 2,
    img: "./imgs/fanta-0-33-glass.970.jpg",
    nomi: "Fanta",
    narxi: "12000",
    soni: 1,
  },
  {
    id: 3,
    img: "./imgs/Sprite.jpg",
    nomi: "Sprite",
    narxi: "12000",
    soni: 1,
  },
  {
    id: 4,
    img: "./imgs/Chortoq.jpg",
    nomi: "Chortoq",
    narxi: "12000",
    soni: 1,
  },
];
  
//modal oyna ochish
ochish.addEventListener("click", () => {
  modal.style.transform = "translateX(0)";
  modal.style.transition = "transform 1s";
});




//yangi bosh box
const basket = JSON.parse(localStorage.getItem("basket")) || [];


// Modalga malumot chiqarish

// ...



// function decrement



function basketmap() {  
  modal.innerHTML = "";  

  let totalPrice = 0; // Umumiy narx uchun o'zgaruvchi

  basket.map((item) => {
    const itemPrice = item.narxi * item.soni; // Element narxi x soni
    totalPrice += itemPrice; 
      modal.innerHTML += `
          <div class="card-modal">
              <img src="${item.img}">
              <p>${item.nomi}</p>
              <p>${item.narxi * item.soni}</p>
              <button class="minus" onclick="decriment(${item.id})"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-patch-minus" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
              <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
            </svg></button>
              <p>${item.soni}</p>
              <button id="pilus" onclick="increment(${item.id})"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-patch-plus" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5"/>
              <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
            </svg></button>
              <button id="btn-a"onclick="deleteItem(${item.id})"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20 " fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg></button>

          </div>
      `;
  });
  modal.innerHTML += `
  <div class="total-price">
    <p>Total Price: ${totalPrice}</p>
  </div>
`;
}


function decriment(id) {
  basket.map((item) => {
    if (item.id === id) {
      if (item.soni > 1) {
        item.soni = item.soni -1
      } 
    }
    });
    basketmap();
}

function increment(id) {
  basket.map((item) => {
    if (item.id === id) {
        item.soni = item.soni +1
      } 
    }
    );
    localStorage.setItem("basket", JSON.stringify(basket)); 
    basketmap();
    
}

// deleteItem funksiyasi
function deleteItem(id) {
  basket.map((item, index) => {
    if (item.id === id) {
      basket.splice(index, 1);
    }
  });
  localStorage.setItem("basket", JSON.stringify(basket));
  basketmap();
}





function backetquti(index) {
    basket.push(data[index]);
    basketmap();  // Вызываем исправленную функцию для обновления содержимого модального окна
    localStorage.setItem('basket', JSON.stringify(basket));
    tostifyy();

}



data.map((item, index) => {
    cards.innerHTML += `
          <div class="card">
              <img src="${item.img}">
              <p>${item.name}</p> <!--nomi o'rniga name ishlatilgan-->
              <p>${item.narx}</p> <!--narxi o'rniga narx ishlatilgan-->
              <p>${item.soni}</p>
              <button onclick="backetquti(${index})">Add</button>
          </div>
      `;
});


cards.addEventListener('click',()=>{
    modal.style.transform = "translateX(400px)";
    modal.style.transition = "transform 1s";
}
)

// tostify  oynasini ochish

function tostifyy1() {
    tostify.style.transform = "translateY(-580px)";
}

function tostifyy() {
  tostify.style.transform = "translateY(0)"
}

setInterval(() =>{
  tostifyy1();
}, 4200)


setInterval(() => {
  basketcount.textContent = basket.length;
  if (basket.length === 0) {
    basketcount.style.display = "none";
  }
  else{
    basketcount.style.display = "block";
  }
}, 500)


  