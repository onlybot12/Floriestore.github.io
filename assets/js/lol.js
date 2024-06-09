
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
  total.innerHTML = "Rp. 47.000";
  // payment nominal
  wallet[i].innerHTML = "Rp. 47.000";
  }
}
function tp3(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 75.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 75.500";
  }
}
function tp4(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 142.000";
  // payment nominal
  wallet[i].innerHTML = "Rp. 142.000";
  }
}

function tp5(){
  for (let i = 0; i < wallet.length; i++){
    pay.scrollIntoView();
    harga.style.display = "block";
    total.innerHTML = "Rp. 198.000";
    //Payment nominal
    wallet[i].innerHTML = "Rp. 198.000";
  }
}

function tp6(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 340.000";
  // payment nominal
  wallet[i].innerHTML = "Rp. 340.000";
  }
}

function tp7(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 705.000";
  // payment nominal
  wallet[i].innerHTML = "Rp. 705.000";
  }
}
