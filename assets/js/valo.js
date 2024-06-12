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
  total.innerHTML = "Rp. 48.000";
  // payment nominal
  wallet[i].innerHTML = "Rp. 48.000";
  }
}
function tp3(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 76.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 76.500";
  }
}
function tp4(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 143.000";
  // payment nominal
  wallet[i].innerHTML = "Rp. 143.000";
  }
}
function tp5(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 238.000";
  // payment nominal
  wallet[i].innerHTML = "Rp. 238.000";
  }
}

function tp6(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 385.000";
  // payment nominal
  wallet[i].innerHTML = "Rp. 385.000";
  }
}
function tp7(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 765.000";
  // payment nominal
  wallet[i].innerHTML = "Rp. 765.000";
  }
}
