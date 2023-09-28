


const list = document.querySelector('ul')
const buttonShowALL = document.querySelector('.show-all')
const buttonMapall = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-All')

function formatCurency(value) {
    const nemvalue = value.tolocalestring('pt-br',{
        stlye: 'currency',
        currrency: 'BRL',
    })
}

function showALL(productArray) {
    let myli = ''

    productArray.forEach((product) => {
        myli +=
            `

       <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price"> R$ ${product.price}</p>
       </li>
        `


    })

    list.innerHTML = myli

}
function MapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,

    }))

    showALL(newPrices)

}

function sumAllItems() {
    const totalvalue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `
<li>
<p>O valor total dos itens é R$ ${totalvalue}</p>
</li>
`
}


function filterAllItems() {
    const filterJustVegan = menuOptions.filter( (product) => product.vegan)

    showALL(filterJustVegan)
}


buttonShowALL.addEventListener('click', () => showALL(menuOptions))
buttonMapall.addEventListener('click', MapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)