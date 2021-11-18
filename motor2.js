

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
    let eita = data.USDBRL['high']
    
        

    
    usdv1.innerHTML = (eita)
})
.catch(function(error){

})



fetch(urleur)
.then((resp => resp.json()))
.then(function(data) {
    let cota = data.results
    let eita = data.EURBRL['high']
    
        

    
    eurv1.innerHTML = (eita)
})
.catch(function(error){

})



fetch(urlgbp)
.then((resp => resp.json()))
.then(function(data) {
    let cota = data.results
    let eita = data.GBPBRL['high']
    
        

    
    gbpv1.innerHTML = (eita)
})
.catch(function(error){

})



fetch(urlcad)
.then((resp => resp.json()))
.then(function(data) {
    let cota = data.results
    let eita = data.CADBRL['high']
    
        

    
    cadv1.innerHTML = (eita)
})
.catch(function(error){

})


fetch(urlarg)
.then((resp => resp.json()))
.then(function(data) {
    let cota = data.results
    let eita = data.ARSBRL['high']
    
        

    
    argv1.innerHTML = (eita)
})

.catch(function(error){

})



fetch(urlchf)
.then((resp => resp.json()))
.then(function(data) {
    let cota = data.results
    let eita = data.CHFBRL['high']
    
        

    
    chfv1.innerHTML = (eita)
})
.catch(function(error){

})



fetch(urlaud)
.then((resp => resp.json()))
.then(function(data) {
    let cota = data.results
    let eita = data.AUDBRL['high']
    
        

    
    audv1.innerHTML = (eita)
})
.catch(function(error){

})


fetch(urlclp)
.then((resp => resp.json()))
.then(function(data) {
    let cota = data.results
    let eita = data.CLPBRL['high']
    
        

    
    clpv1.innerHTML = (eita)
})
.catch(function(error){

})


fetch(urlnzd)
.then((resp => resp.json()))
.then(function(data) {
    let cota = data.results
    let eita = data.NZDBRL['high']
    
        

    
    nzdv1.innerHTML = (eita)
})
.catch(function(error){

})

