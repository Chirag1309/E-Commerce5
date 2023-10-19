let a = document.getElementById("randoms");

let total = JSON.parse(localStorage.getItem('total'));
let content = document.createElement('div');

console.log(typeof (total.price.toString()));
content.innerText = `Cart Value : $${(Math.round(total.price)).toString()}`;
content.style.fontSize = "30px";
console.log(content.innerHTML);
a.style.color = 'grey';
a.appendChild(content);
let content2 = document.createElement('p');

var p = Math.round(0.05 * (Math.round(total.price)));
var y = Math.round(0.1 * (Math.round(total.price)));
var d = Math.round(0.07 * (Math.round(total.price)));
content2.innerHTML = "SGST: $" + p;
content2.style.fontSize = "30px";
a.appendChild(content2);
let content3 = document.createElement('p');
content3.innerHTML = "CGST: $" + y;
content3.style.fontSize = "30px";
a.appendChild(content3);
let content4 = document.createElement('p');
content4.style.fontSize = "30px";
content4.innerHTML = "Delivery Charges: $" + d;
a.appendChild(content4);
var c5 = document.createElement('p');
c5.innerHTML = "Total= $" + (y + p + d + total.price);
c5.style.fontSize = "30px";
a.appendChild(c5);
var pb=document.getElementById("paybu");
pb.addEventListener('click',()=>{
    responsePay()
});

function responsePay() {
    var options = {

        "key": "rzp_test_vy0YxRf0EheicE", // Enter the Key ID generated from the Dashboard

        "amount": Math.round(total.price * 100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise

        "currency": "INR",

        "name": "Acme Corp", //your business name

        "description": "Test Transaction",

        "image": "https://example.com/your_logo",

        "order_id": "",//"order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1

        "handler": function (response) {

            localStorage.setItem("cart", "{}");
            localStorage.setItem("total",{});

            location.assign("payment.html");

        },

        "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number

            "name": "Gaurav Kumar", //your customer's name

            "email": "gaurav.kumar@example.com",

            "contact": "9000090000"  //Provide the customer's phone number for better conversion rates

        },

        "notes": {

            "address": "Razorpay Corporate Office"

        },

        "theme": {

            "color": "#3399cc"

        }

    };

    var rzp1 = new Razorpay(options);

    rzp1.on('payment.failed', function (response) {

        console.log(response);

    });



    try {

        console.log(rzp1);

        rzp1.open();

    }

    catch (err) {

        console.log(err);

    }

}