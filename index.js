// let a=fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

//             console.log(a);

let value=0;
const mainframe=document.getElementById("mainframe");
mainframe.innerHTML="";
const api_url = 'https://fakestoreapi.com/products';

let specialisty = document.createElement('div');
specialisty.setAttribute('id','specialisty-menu');
const main=document.getElementById("mainframe");
specialisty.style.display="flex";
specialisty.style.flexDirection="row";
specialisty.style.flexWrap="wrap";

let sortby=document.getElementById("lowtohigh");
let sortby2=document.getElementById("hightolow");

sortby.addEventListener("click",low);
sortby2.addEventListener("click",high);


window.onload = (event) => {
  if (localStorage.getItem('cart') === undefined) {
    let cart = {};
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  getUser(0);
};


async function getUser(value) {
  //   Making an API call (request)
  //   and getting the response back
  specialisty.innerHTML = "";
  console.log(mainframe);
  const response = await fetch(api_url);

  // Parsing it to JSON format[]
  var data = await response.json();
  
  
  
 
  var byDate = data.slice(0);
  byDate.sort(function (a, b) {
    return a.price - b.price;
  });

  if(value===1){
    data=byDate;

  }
  if(value===2){
    data=byDate.reverse();
  }

  console.log(data);
  
  for (let i = 0; i < data.length; i++) {
   
    let a = JSON.stringify(data[i]);
    let products = document.createElement('div');
    const img = document.createElement('img');
    img.src = data[i].image;
    img.style.width = "32vh";
    img.style.height = "32vh";
    img.style.margin = "auto auto";
    const p = document.createElement('p');
    p.innerHTML = data[i].title;
    p.style.height = "10vh";
    const p2 = document.createElement('p');
    p2.innerHTML = data[i].description;
    p2.style.height = "15vh";
    p2.style.fontSize = "11px";
    const rating = document.createElement('p');
    rating.innerHTML = "Rating:-" + data[i].rating.rate + "/5";
    const price = document.createElement('p');
    price.innerHTML = "$" + data[i].price;
    price.style.color = "red";


    const button = document.createElement('button');
    button.addEventListener("click", () => {
      cart = JSON.parse(localStorage.getItem('cart'));
      cart[i] = {
        "id": data[i].id,
        "image": data[i].image,
        "desc": data[i].description,
        "price": data[i].price,
        "title": data[i].title,
        "category": data[i].category

      };

      localStorage.setItem('cart', JSON.stringify(cart));

    });
    button.innerHTML = "Add To Cart";


    products.style.backgroundColor = "white";
    products.style.width = "80vh";
    products.style.height = "80vh";
    products.style.margin = "1vh 1vh";
    products.style.alignContent = "center";
    products.style.alignItems = "center";
    products.style.borderStyle = "outset"
    products.style.display = "flex";
    products.style.flexDirection = "column";
    button.className = "btn btn-primary";
    button.style.padding = "1rem 1rem";
    button.style.marginBottom = "2rem";
    button.addEventListener("click", ()=> {
      document.getElementsByClassName("btn").disabled;
    });
   
    
    products.appendChild(img);
    products.appendChild(p);
    products.appendChild(p2);
    products.appendChild(rating);
    products.appendChild(price);
    products.appendChild(button);








    specialisty.appendChild(products);
    
    mainframe.append(specialisty);
    // mainframe.appendChild(specialisty);
    let para = document.createElement('p');
    let para2 = document.createElement('p');

  }
  console.log(mainframe);

}

function high(){
  getUser(2);
}

function low(){
  getUser(1);
}




