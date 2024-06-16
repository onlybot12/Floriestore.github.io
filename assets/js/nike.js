
const harga = document.getElementById("total")
const total = document.getElementById("total1")
const pay = document.getElementById("pembayaran")
let wallet = document.querySelectorAll("p.wallet3")


function tp1(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 14.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 14.500";
  }
}

function tp2(){
 for (let i = 0; i < wallet.lenght; i++) {
   pay.scrollIntoView();
   harga.style.display = "block";
   total.innerHTML = "Rp. 68.000";
   // payment nominal
   wallet[i].innerHTML = "Rp 68.000";
 }
}

function tp1(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 14.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 14.500";
  }
}

function tp1(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 14.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 14.500";
  }
}
