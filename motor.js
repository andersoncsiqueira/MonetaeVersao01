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
const usdv3 = document.querySelector('#usdv3')
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

const section = document.querySelector('section')

                 // CALCULO VENDA   



const getDatas = async (url,coin,place1,place2) => {
const response = await fetch(url)
const datas = await response.json()
let ask = null
let bid = null    
switch (coin) {
    
    case 'USD':  
        ask = Number(datas[`${coin}BRL`]['ask'])
        bid = Number(datas[`${coin}BRL`]['bid'])
        place1.innerHTML = (((ask + bid)/2)*1.06*1.011).toFixed(2)
        place2.innerHTML = ((((ask + bid)/2)*1.06*1.011)-0.02).toFixed(2)
        break;
    case 'EUR':
         ask = Number(datas[`${coin}BRL`]['ask'])
         bid = Number(datas[`${coin}BRL`]['bid'])
        place1.innerHTML = (((ask + bid)/2)*1.06*1.011).toFixed(2)
        place2.innerHTML = ((((ask + bid)/2)*1.06*1.011)-0.02).toFixed(2)
        break;
    case 'ARS':
        ask = Number(datas[`${coin}BRL`]['ask'])
        bid = Number(datas[`${coin}BRL`]['bid'])
        place1.innerHTML = (((ask + bid)/2)*1.75*1.011).toFixed(2)
        place2.innerHTML = ((((ask + bid)/2)*1.75*1.011)).toFixed(2)
        break;
    case 'AUD':
        ask = Number(datas[`${coin}BRL`]['ask'])
        bid = Number(datas[`${coin}BRL`]['bid'])
        place1.innerHTML = (((ask + bid)/2)*1.09*1.011).toFixed(2)
        place2.innerHTML = ((((ask + bid)/2)*1.09*1.011)-0.02).toFixed(2)
        break;
    case 'CAD':
        ask = Number(datas[`${coin}BRL`]['ask'])
        bid = Number(datas[`${coin}BRL`]['bid'])
        place1.innerHTML = (((ask + bid)/2)*1.09*1.011).toFixed(2)
        place2.innerHTML = ((((ask + bid)/2)*1.09*1.011)-0.02).toFixed(2)
        break;
    case 'CHF':
        ask = Number(datas[`${coin}BRL`]['ask'])
        bid = Number(datas[`${coin}BRL`]['bid'])
        place1.innerHTML = (((ask + bid)/2)*1.1*1.011).toFixed(2)
        place2.innerHTML = ((((ask + bid)/2)*1.1*1.011)-0.02).toFixed(2)
        break;
    case 'CLP':
        ask = Number(datas[`${coin}BRL`]['ask'])
        bid = Number(datas[`${coin}BRL`]['bid'])
        place1.innerHTML = (((ask + bid)/2)*1.35*1.011).toFixed(4)
        place2.innerHTML = ((((ask + bid)/2)*1.35*1.011)).toFixed(4)
        break;
    case 'NZD':
        ask = Number(datas[`${coin}BRL`]['ask'])
        bid = Number(datas[`${coin}BRL`]['bid'])
        place1.innerHTML = (((ask + bid)/2)*1.1*1.011).toFixed(2)
        place2.innerHTML = ((((ask + bid)/2)*1.1*1.011)-0.02).toFixed(2)
        break;
    case 'GBP':
        ask = Number(datas[`${coin}BRL`]['ask'])
        bid = Number(datas[`${coin}BRL`]['bid'])
        place1.innerHTML = (((ask + bid)/2)*1.077*1.011).toFixed(2)
        place2.innerHTML = ((((ask + bid)/2)*1.077*1.011)-0.02).toFixed(2)
        break;
        
}




                    

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
      
    
     
    switch (coin) {
    
        case 'USD':  
            ask = Number(datas[`${coin}BRL`]['ask'])
            bid = Number(datas[`${coin}BRL`]['bid'])
            place1.innerHTML = (Number(datas[`${coin}BRL`]['high'])/1.25).toFixed(2)
            place2.innerHTML = (Number(datas[`${coin}BRL`]['high'])/1.2).toFixed(2)
            break;
        case 'EUR':
             ask = Number(datas[`${coin}BRL`]['ask'])
             bid = Number(datas[`${coin}BRL`]['bid'])
             place1.innerHTML = (Number(datas[`${coin}BRL`]['high'])/1.25).toFixed(2)
             place2.innerHTML = (Number(datas[`${coin}BRL`]['high'])/1.2).toFixed(2)
            break;
        case 'ARS':
            ask = Number(datas[`${coin}BRL`]['ask'])
            bid = Number(datas[`${coin}BRL`]['bid'])
            place1.innerHTML = (Number(datas[`${coin}BRL`]['high'])/1.25).toFixed(2)
            place2.innerHTML = (Number(datas[`${coin}BRL`]['high'])/1.2).toFixed(2)
            break;
        case 'AUD':
            ask = Number(datas[`${coin}BRL`]['ask'])
            bid = Number(datas[`${coin}BRL`]['bid'])
            place1.innerHTML = (Number(datas[`${coin}BRL`]['high'])/1.25).toFixed(2)
            place2.innerHTML = (Number(datas[`${coin}BRL`]['high'])/1.2).toFixed(2)
            break;
        case 'CAD':
            ask = Number(datas[`${coin}BRL`]['ask'])
            bid = Number(datas[`${coin}BRL`]['bid'])
            place1.innerHTML = (Number(datas[`${coin}BRL`]['high'])/1.25).toFixed(2)
            place2.innerHTML = (Number(datas[`${coin}BRL`]['high'])/1.2).toFixed(2)
            break;
        case 'CHF':
            ask = Number(datas[`${coin}BRL`]['ask'])
            bid = Number(datas[`${coin}BRL`]['bid'])
            place1.innerHTML = (Number(datas[`${coin}BRL`]['high'])/1.25).toFixed(2)
            place2.innerHTML = (Number(datas[`${coin}BRL`]['high'])/1.2).toFixed(2)
            break;
        case 'CLP':
            ask = Number(datas[`${coin}BRL`]['ask'])
            bid = Number(datas[`${coin}BRL`]['bid'])
            place1.innerHTML = (Number(datas[`${coin}BRL`]['high'])/1.25).toFixed(4)
            place2.innerHTML = (Number(datas[`${coin}BRL`]['high'])/1.2).toFixed(4)
            break;
        case 'NZD':
            ask = Number(datas[`${coin}BRL`]['ask'])
            bid = Number(datas[`${coin}BRL`]['bid'])
            place1.innerHTML = (Number(datas[`${coin}BRL`]['high'])/1.3).toFixed(2)
            place2.innerHTML = (Number(datas[`${coin}BRL`]['high'])/1.25).toFixed(2)
            break;
        case 'GBP':
            ask = Number(datas[`${coin}BRL`]['ask'])
            bid = Number(datas[`${coin}BRL`]['bid'])
            place1.innerHTML = (Number(datas[`${coin}BRL`]['high'])/1.25).toFixed(2)
            place2.innerHTML = (Number(datas[`${coin}BRL`]['high'])/1.2).toFixed(2)
            break;
            
    }


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


/*const span = document.querySelector('span')

const blockPrice = (coin,price) => {
    const cadeado = document.createElement('img')
   // cadeado.setAttribute('src','padlock.png')
   // cadeado.classList.add('blockPrice')
    usdv1.classList.toggle('none')
    coin.classList.toggle('none')

  //  coin.insertAdjacentElement('afterbegin',cadeado)

    span.textContent = price
    
}



blockPrice(usdv3,'5,20')*/

const blockPriceAuto = (coin,price,sgl) => {
    const img = document.createElement('img')
    const span = document.createElement('span')
    const tdX = document.createElement('td')
    const cadeado = document.createElement('img')
    const change = document.createElement('img')

    tdX.setAttribute('id',`tdX${sgl}`)
    cadeado.setAttribute('src','padlock.png')
    cadeado.classList.add('blockPrice')
    cadeado.setAttribute('id','changeforblock')
    change.setAttribute('src','refresh-svgrepo-com.svg')
    change.classList.add('blockPrice')
    change.setAttribute('id',`changeforfreeprice${sgl}`)
    img.setAttribute('src','padlock.png')
    img.classList.add('blockPrice')

    tdX.textContent = price

    const parent = coin.parentElement
    const dt = Array.from(parent.children)
    
    dt.forEach(dt => {     
        if(dt.getAttribute('id')){
            dt.classList.add('none')
        }   
    })

    parent.append(tdX)
   

    parent.append(cadeado)
    parent.append(change)

    span.textContent = price
 //   console.log(parent.children)
}


blockPriceAuto(eurv1,'5,98','EUR')
blockPriceAuto(usdv1,'5,20','USD')
blockPriceAuto(cadv1,'4,5','CAD')
blockPriceAuto(gbpv1,'6,72','GBP')

/*const change = document.querySelector('#changeforfreepriceUSD')

change.addEventListener('click', ()=> {
    const tdX = document.querySelector(`#tdXUSD`) // na função a SGL tem que vir por argumento
    
    tdX.classList.toggle('animeChange')
    setTimeout(()=> tdX.textContent = '5,40',3000)

    
})
*/
