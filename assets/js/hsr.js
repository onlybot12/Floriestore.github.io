
const harga = document.getElementById("total")
const total = document.getElementById("total1")
const pay = document.getElementById("pembayaran")
let wallet = document.querySelectorAll("p.wallet3")


function tp1(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 60.000";
  // payment nominal
  wallet[i].innerHTML = "Rp. 60.000";
  }
}
function tp2(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 15.000";
  // payment nominal
  wallet[i].innerHTML = "Rp. 15.000";
  }
}
function tp3(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 61.500";
  // payment nominal
  wallet[i].innerHTML = "Rp. 61.500";
  }
}
function tp4(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 184.000";
  // payment nominal
  wallet[i].innerHTML = "Rp. 184.000";
  }
}

function tp5(){
  for (let i = 0; i < wallet.length; i++){
    pay.scrollIntoView();
    harga.style.display = "block";
    total.innerHTML = "Rp. 400.000";
    //Payment nominal
    wallet[i].innerHTML = "Rp. 400.000";
  }
}

function tp6(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 615.000";
  // payment nominal
  wallet[i].innerHTML = "Rp. 615.000";
  }
}

function tp7(){
  for (let i = 0; i < wallet.length; i++) {
  pay.scrollIntoView();
  harga.style.display = "block";
  total.innerHTML = "Rp. 6.000.000";
  // payment nominal
  wallet[i].innerHTML = "Rp. 6.000.000";
  }
}
