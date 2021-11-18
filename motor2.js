

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

const eurv1 = document.getElementById('eurv1')

const gbpv1 = document.getElementById('gbpv1')

const cadv1 = document.getElementById('cadv1')

const argv1 = document.getElementById('argv1')

const chfv1 = document.getElementById('chfv1')

const audv1 = document.getElementById('audv1')

const clpv1 = document.getElementById('clpv1')

const nzdv1 = document.getElementById('nzdv1')



                 // Cotação
fetch(url)
.then((resp => resp.json()))
.then(function(data) {
    let cota = data.results
    const ask = Number(data.USDBRL['ask'])
    const bid = Number(data.USDBRL['bid'])
    let eita = ((ask + bid)/2).toFixed(4)
    
        

    
    usdv1.innerHTML = (eita)
})
.catch(function(error){

})



fetch(urleur)
.then((resp => resp.json()))
.then(function(data) {
    let cota = data.results
    const ask = Number(data.EURBRL['ask'])
    const bid = Number(data.EURBRL['bid'])
    let eita = ((ask + bid)/2).toFixed(4)
    
        

    
    eurv1.innerHTML = (eita)
})
.catch(function(error){

})



fetch(urlgbp)
.then((resp => resp.json()))
.then(function(data) {
    let cota = data.results
    const ask = Number(data.GBPBRL['ask'])
    const bid = Number(data.GBPBRL['bid'])
    let eita = ((ask + bid)/2).toFixed(4)
    
        

    
    gbpv1.innerHTML = (eita)
})
.catch(function(error){

})



fetch(urlcad)
.then((resp => resp.json()))
.then(function(data) {
    let cota = data.results
    const ask = Number(data.CADBRL['ask'])
    const bid = Number(data.CADBRL['bid'])
    let eita = ((ask + bid)/2).toFixed(4)
    
        

    
    cadv1.innerHTML = (eita)
})
.catch(function(error){

})


fetch(urlarg)
.then((resp => resp.json()))
.then(function(data) {
    let cota = data.results
    const ask = Number(data.ARSBRL['ask'])
    const bid = Number(data.ARSBRL['bid'])
    let eita = ((ask + bid)/2).toFixed(4)
    
        

    
    argv1.innerHTML = (eita)
})

.catch(function(error){

})



fetch(urlchf)
.then((resp => resp.json()))
.then(function(data) {
    let cota = data.results
    const ask = Number(data.CHFBRL['ask'])
    const bid = Number(data.CHFBRL['bid'])
    let eita = ((ask + bid)/2).toFixed(4)
    
        

    
    chfv1.innerHTML = (eita)
})
.catch(function(error){

})



fetch(urlaud)
.then((resp => resp.json()))
.then(function(data) {
    let cota = data.results
    const ask = Number(data.AUDBRL['ask'])
    const bid = Number(data.AUDBRL['bid'])
    let eita = ((ask + bid)/2).toFixed(4)
    
        

    
    audv1.innerHTML = (eita)
})
.catch(function(error){

})


fetch(urlclp)
.then((resp => resp.json()))
.then(function(data) {
    let cota = data.results
    const ask = Number(data.CLPBRL['ask'])
    const bid = Number(data.CLPBRL['bid'])
    let eita = ((ask + bid)/2).toFixed(4)
    
        

    
    clpv1.innerHTML = (eita)
})
.catch(function(error){

})


fetch(urlnzd)
.then((resp => resp.json()))
.then(function(data) {
    let cota = data.results
    const ask = Number(data.NZDBRL['ask'])
    const bid = Number(data.NZDBRL['bid'])
    let eita = ((ask + bid)/2).toFixed(4)
    
        

    
    nzdv1.innerHTML = (eita)
})
.catch(function(error){

})

