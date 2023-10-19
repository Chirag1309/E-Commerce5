window.onload = (event) => {const userData = JSON.parse(localStorage.getItem('cart'))};
const userData=JSON.parse(localStorage.getItem('cart'));
let cartSection = document.getElementById("Cart-Section");
console.log(userData);
window.onload = (event) => {
    let sum = 0;
    Object.keys(userData).forEach((key) => {
        sum += parseFloat(userData[key].price);
    })
    let total = {
        price: sum
    };
    localStorage.setItem('total', JSON.stringify(total));
    console.log(total);
    if (sum < 5) {
        let total = {
            price: 0
        };
        localStorage.setItem('total', JSON.stringify(total));
    }
};
if(Object.keys(userData).length<1){
    let a=document.createElement("h1");
    a.innerHTML="Your Cart Is Empty -_-!!";
    cartSection.append(a);
    let b=document.getElementById("check-out");
    b.style.display="none";
    let c=document.createElement("button");
    


}else{
var total = JSON.parse(localStorage.getItem('total'));
var sum = parseFloat((total.price));
if(sum===0){
    window.location.reload();
}

    Object.keys(userData).forEach((key) => {

        let products = document.createElement('div');
        products.style.borderStyle="outset";
        products.style.margin=
        products.style.paddingBottom="3rem";
        products.style.marginBottom="4rem";
        products.style.display="flex";
        // products.style.margin="auto auto";
        
        // products.style.display="flex";
        // products.style.flex-direction="row";
        // console.log(a);
        const img = document.createElement('img');
        img.src = userData[key].image;
        img.style.width = "32vh";
        img.style.height = "32vh";
        img.style.marginRight="5rem";
        const p = document.createElement('p');
        p.innerHTML = userData[key].title;
        p.style.fontSize="3vh";
        p.style.width="10rem";
        p.style.marginRight="10rem";
        const p2 = document.createElement('p');
        // p2.innerHTML=userData[key].desc;
        // p2.style.height="15vh";
        // p2.style.fontSize="11px";
        const button = document.createElement('div');
        // button.style.border="2px solid green";
        button.style.marginRight="18rem";

        
        const add = document.createElement('button');
        add.className="btn btn-outline-primary"
        const minus = document.createElement('button');
        minus.className="btn btn-outline-primary";
        const p3 = document.createElement('p');
        p3.style.width="10vh";
        add.style.padding = "10% 30%";
        add.innerHTML = "+";
        p3.style.padding = "7% 7%";
        p
        p3.innerHTML = "1";
        minus.style.padding = "5% 30%";
        minus.onclick = function () { minusfunc() };
        minus.innerHTML = "-";
        function minusfunc() {
            var a = p3.innerHTML;
            if (a === '1') {
                calc2();
                products.remove();
                delete userData[key];
                localStorage.setItem('cart',JSON.stringify(userData));
                
                
            } else {
                p3.innerHTML = parseInt(a) - 1;
                calc2();
            }
            


            

        }
        add.onclick = function () { addfunc() };
        function addfunc() {
            var a = p3.innerHTML;
            p3.innerHTML = parseInt(a) + 1;
            calc();
        }
        calc();
        button.style.width = "10vh";
        button.style.height = "52%";
        button.appendChild(minus);
        button.appendChild(p3);
        button.appendChild(add);
        button.style.display = "flex";
        button.style.flexDirection = "row";

        const price = document.createElement('p');
        price.innerHTML = "Price->$" + userData[key].price;
        products.appendChild(img);
        products.appendChild(p);
        products.appendChild(button);

        products.appendChild(price);
        cartSection.appendChild(products);
        var e=document.getElementById("check-out")
        
        function calc() {
            var total = JSON.parse(localStorage.getItem('total'));
            var sum = Math.round(parseFloat((total.price))*100)/100;
            var a = Math.round(parseFloat(userData[key].price)*100)/100;
            sum = sum + a;
            total.price = sum;
            localStorage.setItem('total', JSON.stringify(total));
        }
        function calc2() {
            var total = JSON.parse(localStorage.getItem('total'));
            var sum = Math.round(parseFloat((total.price))*100)/100;
            var a = Math.round(parseFloat(userData[key].price)*100)/100;
            sum = sum - a;
            total.price = sum;
            localStorage.setItem('total', JSON.stringify(total));
        }
        
    })
   

   
}

