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
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 64.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 64.500";
  }
}
function tp3(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 193.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 193.500";
  }
}
function tp4(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 414.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 414.500";
  }
}
function tp5(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 645.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 645.500";
  }
}
function tp6(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 1.250.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 1.250.500";
  }
}
