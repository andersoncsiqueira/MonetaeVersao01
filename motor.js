                          // botao atualizar 
var butao = window.document.getElementById("atual")
butao.addEventListener("click", clicar) 
butao.addEventListener("mouseenter", entrar)
butao.addEventListener("mouseout", sair)
butao.addEventListener("click", function() {
    
    location.reload();
})

function clicar () {
butao.style.background = "radial-gradient(#ffe890,#f5d09b)"
}
function entrar () {
    butao.style.backgroundImage = "radial-gradient(#ffe749,#f5d0 )"
}
function sair() {
    butao.style.backgroundImage = "radial-gradient(#ffe749,#f5d01b)"
}
                            // urls para a pegar as cotacoes
 
const url = 'https://economia.awesomeapi.com.br/last/USD-BRL'
const urleur = 'https://economia.awesomeapi.com.br/last/EUR-BRL'
const urlgbp = 'https://economia.awesomeapi.com.br/last/GBP-BRL'
const urlcad = 'https://economia.awesomeapi.com.br/last/CAD-BRL'
const urlarg = 'https://economia.awesomeapi.com.br/last/ARS-BRL'
const urlchf = 'https://economia.awesomeapi.com.br/last/CHF-BRL'
const urlaud = 'https://economia.awesomeapi.com.br/last/AUD-BRL'
const urlclp = 'https://economia.awesomeapi.com.br/last/CLP-BRL'
const urlnzd = 'https://economia.awesomeapi.com.br/last/NZD-BRL'
                    // ids das cotacoes na tabela venda e compra
const usdv1 = document.getElementById('usdv1')
const usdv2 = document.getElementById('usdv2')
const eurv1 = document.getElementById('eurv1')
const eurv2 = document.getElementById('eurv2')
const gbpv1 = document.getElementById('gbpv1')
const gbpv2 = document.getElementById('gbpv2')
const cadv1 = document.getElementById('cadv1')
const cadv2 = document.getElementById('cadv2')
const argv1 = document.getElementById('argv1')
const argv2 = document.getElementById('argv2')
const chfv1 = document.getElementById('chfv1')
const chfv2 = document.getElementById('chfv2')
const audv1 = document.getElementById('audv1')
const audv2 = document.getElementById('audv2')
const clpv1 = document.getElementById('clpv1')
const clpv2 = document.getElementById('clpv2')
const nzdv1 = document.getElementById('nzdv1')
const nzdv2 = document.getElementById('nzdv2')

const usdc1 = document.getElementById('usdc1')
const usdc2 = document.getElementById('usdc2')
const eurc1 = document.getElementById('eurc1')
const eurc2 = document.getElementById('eurc2')
const gbpc1 = document.getElementById('gbpc1')
const gbpc2 = document.getElementById('gbpc2')
const cadc1 = document.getElementById('cadc1')
const cadc2 = document.getElementById('cadc2')
const argc1 = document.getElementById('argc1')
const argc2 = document.getElementById('argc2')
const chfc1 = document.getElementById('chfc1')
const chfc2 = document.getElementById('chfc2')
const audc1 = document.getElementById('audc1')
const audc2 = document.getElementById('audc2')
const clpc1 = document.getElementById('clpc1')
const clpc2 = document.getElementById('clpc2')
const nzdc1 = document.getElementById('nzdc1')
const nzdc2 = document.getElementById('nzdc2')

                 // CALCULO VENDA   



const getDatas = async (url,coin,place1,place2) => {
const response = await fetch(url)
const datas = await response.json()
                
                    
const ask = Number(datas[coin]['ask'])
const bid = Number(datas[coin]['bid'])
let eita = (((ask + bid)/2).toFixed(4)*1.06*1.011).toFixed(2)
place1.innerHTML = (eita)
place2.innerHTML = (eita-0.02).toFixed(2)
} 
                

getDatas(url,'USD',usdv1,usdv2)
getDatas(urleur,'EUR',eurv1,eurv2)
getDatas(urlgbp,'GBP',gbpv1,gbpv2)
getDatas(urlcad,'CAD',cadv1,cadv2)
getDatas(urlarg,'ARS',argv1,argv2)
getDatas(urlchf,'CHF',chfv1,chfv2)
getDatas(urlaud,'AUD',audv1,audv2)
getDatas(urlclp,'CLP',clpv1,clpv2)
getDatas(urlnzd,'NZD',nzdv1,nzdv2)





const getDatasBuy = async (url,coin,place1,place2) => {
    const response = await fetch(url)
    const datas = await response.json()
                    
                        
    const price = (Number(datas[coin]['high'])/1.25).toFixed(2)
    const price2 = (Number(datas[coin]['high'])/1.2).toFixed(2)
    place1.innerHTML = (price)
    place2.innerHTML = (price2)
    } 

    getDatasBuy(url,'USD',usdc1,usdc2)
    getDatasBuy(urleur,'EUR',eurc1,eurc2)
    getDatasBuy(urlgbp,'GBP',gbpc1,gbpc2)
    getDatasBuy(urlcad,'CAD',cadc1,cadc2)
    getDatasBuy(urlarg,'ARS',argc1,argc2)
    getDatasBuy(urlchf,'CHF',chfc1,chfc2)
    getDatasBuy(urlaud,'AUD',audc1,audc2)
    getDatasBuy(urlclp,'CLP',clpc1,clpc2)
    getDatasBuy(urlnzd,'NZD',nzdc1,nzdc2)


/*
let eita = (data.EURBRL['high']/1.25).toFixed(2)
    
        

    
    eurc1.innerHTML = (eita)
*/





fetch('http://economia.awesomeapi.com.br/json/last/USD-BRL')
.then((resp => resp.json()))
.then(/*function(data) {
    
    const ask = Number(data.USDBRL['ask'])
    const bid = Number(data.USDBRL['bid'])
    let eita = (((ask + bid)/2).toFixed(4)*1.06*1.011).toFixed(2)
    
        
    console.log(eita,'aqui')
    usdv1.innerHTML = (eita)
}*/console.log()
)
.catch(function(error){

})

/*
fetch(url)
.then((resp => resp.json()))
.then(function(data) {
    const ask = Number(data.USDBRL['ask'])
    const bid = Number(data.USDBRL['bid'])
    let eita = (((ask + bid)/2).toFixed(4)*1.06*1.011-0.02).toFixed(2)
    
        

    
    usdv2.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urleur)
.then((resp => resp.json()))
.then(function(data) {
    const ask = Number(data.EURBRL['ask'])
    const bid = Number(data.EURBRL['bid'])
    let eita = (((ask + bid)/2).toFixed(4)*1.06*1.011).toFixed(2)
    
        

    
    eurv1.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urleur)
.then((resp => resp.json()))
.then(function(data) {
    const ask = Number(data.EURBRL['ask'])
    const bid = Number(data.EURBRL['bid'])
    let eita = (((ask + bid)/2).toFixed(4)*1.06*1.011-0.02).toFixed(2)
    
        

    
    eurv2.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlgbp)
.then((resp => resp.json()))
.then(function(data) {
    const ask = Number(data.GBPBRL['ask'])
    const bid = Number(data.GBPBRL['bid'])
    let eita = (((ask + bid)/2).toFixed(4)*1.077*1.011).toFixed(2)
    
    gbpv1.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlgbp)
.then((resp => resp.json()))
.then(function(data) {
    const ask = Number(data.GBPBRL['ask'])
    const bid = Number(data.GBPBRL['bid'])
    let eita = (((ask + bid)/2).toFixed(4)*1.077*1.011-0.02).toFixed(2)
    
        

    
    gbpv2.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlcad)
.then((resp => resp.json()))
.then(function(data) {
    const ask = Number(data.CADBRL['ask'])
    const bid = Number(data.CADBRL['bid'])
    let eita = (((ask + bid)/2).toFixed(4)*1.09*1.011).toFixed(2)
    
        

    
    cadv1.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlcad)
.then((resp => resp.json()))
.then(function(data) {
    const ask = Number(data.CADBRL['ask'])
    const bid = Number(data.CADBRL['bid'])
    let eita = (((ask + bid)/2).toFixed(4)*1.09*1.011-0.02).toFixed(2)
    
        

    
    cadv2.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlarg)
.then((resp => resp.json()))
.then(function(data) {
    const ask = Number(data.ARSBRL['ask'])
    const bid = Number(data.ARSBRL['bid'])
    let eita = (((ask + bid)/2).toFixed(4)*1.8*1.011).toFixed(2)
    


    
    argv1.innerHTML = (eita)
})

.catch(function(error){

})

fetch(urlarg)
.then((resp => resp.json()))
.then(function(data) {
    const ask = Number(data.ARSBRL['ask'])
    const bid = Number(data.ARSBRL['bid'])
    let eita = (((ask + bid)/2).toFixed(4)*1.8*1.011).toFixed(2)
    
        

    
    argv2.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlchf)
.then((resp => resp.json()))
.then(function(data) {
    const ask = Number(data.CHFBRL['ask'])
    const bid = Number(data.CHFBRL['bid'])
    let eita = (((ask + bid)/2).toFixed(4)*1.1*1.011).toFixed(2)
    
        

    
    chfv1.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlchf)
.then((resp => resp.json()))
.then(function(data) {
    const ask = Number(data.CHFBRL['ask'])
    const bid = Number(data.CHFBRL['bid'])
    let eita = (((ask + bid)/2).toFixed(4)*1.1*1.011-0.02).toFixed(2)
    
        

    
    chfv2.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlaud)
.then((resp => resp.json()))
.then(function(data) {
    const ask = Number(data.AUDBRL['ask'])
    const bid = Number(data.AUDBRL['bid'])
    let eita = (((ask + bid)/2).toFixed(4)*1.09*1.011).toFixed(2)
        

    
    audv1.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlaud)
.then((resp => resp.json()))
.then(function(data) {
    const ask = Number(data.AUDBRL['ask'])
    const bid = Number(data.AUDBRL['bid'])
    let eita = (((ask + bid)/2).toFixed(4)*1.09*1.011-0.02).toFixed(2)
    
        

    
    audv2.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlclp)
.then((resp => resp.json()))
.then(function(data) {
    const ask = Number(data.CLPBRL['ask'])
    const bid = Number(data.CLPBRL['bid'])
    let eita = (((ask + bid)/2).toFixed(4)*1.35*1.011).toFixed(3)
    
        

    
    clpv1.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlclp)
.then((resp => resp.json()))
.then(function(data) {
    const ask = Number(data.CLPBRL['ask'])
    const bid = Number(data.CLPBRL['bid'])
    let eita = (((ask + bid)/2).toFixed(4)*1.35*1.011).toFixed(3)
    
    clpv2.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlnzd)
.then((resp => resp.json()))
.then(function(data) {
    const ask = Number(data.NZDBRL['ask'])
    const bid = Number(data.NZDBRL['bid'])
    let eita = (((ask + bid)/2).toFixed(4)*1.1*1.011).toFixed(2)
    
    nzdv1.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlnzd)
.then((resp => resp.json()))
.then(function(data) {
    const ask = Number(data.NZDBRL['ask'])
    const bid = Number(data.NZDBRL['bid'])
    let eita = (((ask + bid)/2).toFixed(4)*1.1*1.011-0.02).toFixed(2)
    
        

    
    nzdv2.innerHTML = (eita)
})
.catch(function(error){

})

                  //  calculo compra

                                            
fetch(url)
.then((resp => resp.json()))
.then(function(data) {
    
    let eita = (data.USDBRL['high']/1.25).toFixed(2)
    
        

    
    usdc1.innerHTML = (eita)
})
.catch(function(error){

})

fetch(url)
.then((resp => resp.json()))
.then(function(data) {
    
    let eita = (data.USDBRL['high']/1.2).toFixed(2)
    
        

    
    usdc2.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urleur)
.then((resp => resp.json()))
.then(function(data) {
    
    let eita = (data.EURBRL['high']/1.25).toFixed(2)
    
        

    
    eurc1.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urleur)
.then((resp => resp.json()))
.then(function(data) {
    
    let eita = (data.EURBRL['high']/1.2).toFixed(2)
    
        

    
    eurc2.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlgbp)
.then((resp => resp.json()))
.then(function(data) {
    
    let eita = (data.GBPBRL['high']/1.25).toFixed(2)
    
        

    
    gbpc1.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlgbp)
.then((resp => resp.json()))
.then(function(data) {
    
    let eita = (data.GBPBRL['high']/1.2).toFixed(2)
    
        

    
    gbpc2.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlcad)
.then((resp => resp.json()))
.then(function(data) {
    
    let eita = (data.CADBRL['high']/1.25).toFixed(2)
    
        

    
    cadc1.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlcad)
.then((resp => resp.json()))
.then(function(data) {
    
    let eita = (data.CADBRL['high']/1.2).toFixed(2)
    
        

    
    cadc2.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlarg)
.then((resp => resp.json()))
.then(function(data) {
    
    let eita = (data.ARSBRL['high']/1.25).toFixed(2)
    
        

    
    argc1.innerHTML = (eita)
})

.catch(function(error){

})

fetch(urlarg)
.then((resp => resp.json()))
.then(function(data) {
    
    let eita = (data.ARSBRL['high']/1.20).toFixed(2)
    
        

    
    argc2.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlchf)
.then((resp => resp.json()))
.then(function(data) {
    
    let eita = (data.CHFBRL['high']/1.25).toFixed(2)
    
        

    
    chfc1.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlchf)
.then((resp => resp.json()))
.then(function(data) {

    let eita = (data.CHFBRL['high']/1.2).toFixed(2)
    
        

    
    chfc2.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlaud)
.then((resp => resp.json()))
.then(function(data) {

    let eita = (data.AUDBRL['high']/1.25).toFixed(2)
    
        

    
    audc1.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlaud)
.then((resp => resp.json()))
.then(function(data) {
   
    let eita = (data.AUDBRL['high']/1.2).toFixed(2)
    
        

    
    audc2.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlclp)
.then((resp => resp.json()))
.then(function(data) {
   
    let eita = (data.CLPBRL['high']/1.25).toFixed(3)
    
        

    
    clpc1.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlclp)
.then((resp => resp.json()))
.then(function(data) {
  
    let eita = (data.CLPBRL['high']/1.25).toFixed(3)
    
        

    
    clpc2.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlnzd)
.then((resp => resp.json()))
.then(function(data) {
    
    let eita = (data.NZDBRL['high']/1.3).toFixed(2)
    
        

    
    nzdc1.innerHTML = (eita)
})
.catch(function(error){

})

fetch(urlnzd)
.then((resp => resp.json()))
.then(function(data) {
    
    let eita = (data.NZDBRL['high']/1.25).toFixed(2)
    
        

    
    nzdc2.innerHTML = (eita)
})
.catch(function(error){

})
*/





fetch('http://economia.awesomeapi.com.br/json/last/USD-BRL')
.then((resp => resp.json()))
.then(/*function(data) {
    
    const ask = Number(data.USDBRL['ask'])
    const bid = Number(data.USDBRL['bid'])
    let eita = (((ask + bid)/2).toFixed(4)*1.06*1.011).toFixed(2)
    
        
    console.log(eita,'aqui')
    usdv1.innerHTML = (eita)
}*/console.log()
)
.catch(function(error){

})
