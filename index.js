
const API_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";
const API_USD = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

// ----------------------------------1 BTC----------------------------------------------

const HTMLResponse = document.querySelector(".App3");
const p = document.createElement('div');



fetch(`${API_URL}`)
.then((response) => response.json())
.then((data)=>{

     let elem = document.createElement ("div");
         elem.appendChild(
           document.createTextNode(` 1 BTC =  ${ Math.round(data.bpi.USD.rate_float)} ${"USD"}  `)
        );

       
    p.appendChild(elem);

    HTMLResponse.appendChild(p);
});


// -------------------------------SATOSHIS----------------------------------------------

const satoshi = document.querySelector(".satoshi");
const satoshi2 = document.querySelector(".satoshi2");
const satoshi3 = document.querySelector(".satoshi3");
const satoshi4 = document.querySelector(".satoshi4");
const satoshi5 = document.querySelector(".satoshi5");
const satoshi6 = document.querySelector(".satoshi6");
const satoshi7 = document.querySelector(".satoshi7");
const satoshi8 = document.querySelector(".satoshi8");
const div = document.createElement('p');

fetch(`${API_URL}`)
.then((response) => response.json())
.then(data => {

    const number = (JSON.parse(data.bpi.USD.rate_float));
      let BTC = Math.round(number);
      let BTCString = BTC.toString();

     
                satoshi.appendChild(
                document.createTextNode(` ${"10,000,000  SATS  "} =  ${Math.round(BTCString / 10 )} USD `)
                  );

            
                    satoshi2.appendChild(
                    document.createTextNode(`${"1,000,000  SATS  "}  = ${ (BTCString / 100 ).toFixed(2)} USD  `)
                  );


               
                    satoshi3.appendChild(
                    document.createTextNode(`${"100,000  SATS  "} =  ${(BTCString / 1000 ).toFixed(2)} USD  `)
                  );
        
            
                    satoshi4.appendChild(
                    document.createTextNode(`${"10,000  SATS  "} =  ${(BTCString / 10000 ).toFixed(2)} USD `)
                  );
        
              
                    satoshi5.appendChild(
                    document.createTextNode(`${"1,000  SATS  "} =  ${(BTCString / 100000 ).toFixed(4)} USD `)
                  );
        
               
                    satoshi6.appendChild(
                    document.createTextNode(`${"100  SATS  "} = ${(BTCString / 1000000 ).toFixed(6)} USD `)
                  );

               
                    satoshi7.appendChild(
                    document.createTextNode(`${"10  SATS  "} = ${(number / 10000000 ).toFixed(6)} USD `)
                  );
            
               
                    satoshi8.appendChild(
                    document.createTextNode(`${"1  SATS  "} = ${(number / 100000000 ).toFixed(7)} USD `)
                  );
        
        
    satoshi.appendChild(div);
    satoshi2.appendChild(div);
    satoshi3.appendChild(div);
    satoshi4.appendChild(div);
    satoshi5.appendChild(div);
    satoshi6.appendChild(div);
    satoshi7.appendChild(div);
    satoshi8.appendChild(div);

})

// -----------------------------------------------------------------------------------



// ------------------------------------BTC PRICE from API ----------------------------
function BitcoinUsd(data){
    const number = (JSON.parse(data.bpi.USD.rate_float));
   
            let BTC = (number); 
            
            
     return BitcoinUsd = BTC;
}

fetch(`${API_URL}`)
.then((response) => response.json())
.then((data)=>{

    BitcoinUsd(data) 
     
});

// ----------------------------conversor USD TO SAT------------------------------------

function calcular (){

    let sat1 = (BitcoinUsd / 100000000 );

    let dollar = (document.conversor.dollar.value);

    let total = dollar / sat1;
    total = (total).toFixed(8);
    
     document.conversor.sat.value = Math.trunc(total);
     return total;
}

// ----------------------------conversor SAT TO USD------------------------------------

function calcular2 (){

    let sat1 = (BitcoinUsd / 100000000 );
    
    let SAT = (document.conversor2.satoshi.value);

    let total =  sat1  *  SAT;
    total = (total).toFixed(6);
    
     document.conversor2.dollar2.value = total;
     return total;
}

// ----------------------------conversor BTC TO USD------------------------------------

function calcular3 (){

    let bitUsdPrice = (BitcoinUsd);
    
    let BTC = (document.conversor3.bitcoin.value);

    let total =  bitUsdPrice  *  BTC;
    total = (total);
    
     document.conversor3.dollar3.value = Math.trunc(total);
     return total;
}

// -----------------------------------------------------------------------------------

// ----------------------------conversor USD TO BTC------------------------------------

function calcular4 (){
    
    let bitUsdPrice = (BitcoinUsd);

    let dollar = (document.conversor4.americanDollar.value);

    let total = dollar / bitUsdPrice;
    total = total;
    
     document.conversor4.dollar4.value = (total).toFixed(8);
     return total;
}

// -----------------------------------------------------------------------------------

// -----//////////////-----conversor de usd a sat con 4 ceros menos---//////////////---

function calcular5 (){

    let sat1 = (BitcoinUsd / 10000 );
    
    let falseSat = (document.conversor5.falseSat.value);

    let total =  falseSat  /  sat1;
    total = (total).toFixed(2);
    
     document.conversor5.dollar5.value = total;
     return total;
}
// -----------------------sat to usd con 4 ceros menos-----------------------------------

function calcular6 (){

    let usd = (BitcoinUsd / 10000 );
    
    let SAT = (document.conversor6.satoshi.value);

    let total =  usd  *  SAT;
    total = (total).toFixed(2);
    
     document.conversor6.dollar6.value = total;
     return total;
}


// --------------***********--------------************--------------**********

// Si estas leyendo esto es porque tenes todos los ahorros de tu vida en DOGEcoin
// If you are reading this it´s because you have all the savings of your life in DOGEcoin

// *************------------**************-------------*************----------