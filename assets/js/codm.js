
const harga = document.getElementById("total")
const total = document.getElementById("total1")
const pay = document.getElementById("pembayaran")
let wallet = document.querySelectorAll("p.wallet3")


function tp1(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 10.000";
  // payment nominal
  wallet[i].innerHTML = "Rp. 10.000";
  }
}
function tp2(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 20.000";
  // payment nominal
  wallet[i].innerHTML = "Rp. 20.000";
  }
}
function tp3(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 50.000";
  // payment nominal
  wallet[i].innerHTML = "Rp. 50.000";
  }
}
function tp4(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 100.000";
  // payment nominal
  wallet[i].innerHTML = "Rp. 100.000";
  }
}

function tp5(){
  for (let i = 0; i < wallet.length; i++){
    pay.scrollIntoView();
    harga.style.display = "block";
    total.innerHTML = "Rp. 120.000";
    //Payment nominal
    wallet[i].innerHTML = "Rp. 120.000";
  }
}

function tp6(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 200.000";
  // payment nominal
  wallet[i].innerHTML = "Rp. 200.000";
  }
}

function tp7(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 735.000";
  // payment nominal
  wallet[i].innerHTML = "Rp. 735.000";
  }
}
