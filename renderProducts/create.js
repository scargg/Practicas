const cont = document.querySelector('.cont')
const productList = []
productList.push({
    name: 'Bike',
    price:120,
    image: 'https://kidsbikescanada.ca/cdn/shop/products/Hedgehog-blue-01_1024x1024@2x.jpg?v=1679509813'
})
productList.push({
    name: 'TV',
    price:550,
    image: 'https://img.freepik.com/vector-gratis/television-vintage_23-2147503075.jpg?w=2000'
})
productList.push({
    name: 'PC',
    price:1200,
    image: 'https://m.media-amazon.com/images/I/71lZK7nE+oL._AC_UF1000,1000_QL80_.jpg'
})

function renderProducts (arr) {
    arr.forEach((product)=> {
        const cardCont = document.createElement('div')
        cardCont.classList.add('cardCont')
    
        const cardImg = document.createElement('img')
        cardImg.classList.add('cardImg')
        cardImg.setAttribute('src',product.image)
    
        const cardInfoCont = document.createElement('div')
        cardInfoCont.classList.add('cardInfoCont')
    
        const cardInfo = document.createElement('div')
        cardInfo.classList.add('cardInfo')
    
        const pName = document.createElement('p')
        pName.classList.add('pName')
        pName.innerText = product.name
    
        const pPrice = document.createElement('p')
        pPrice.classList.add('pPrice')
        pPrice.innerText = '$'+product.price
    
        const cardIcon = document.createElement('img')
        cardIcon.classList.add('cardIcon')
        cardIcon.setAttribute('src','./icon_shopping_cart.svg')
    
        cardInfo.appendChild(pName)
        cardInfo.appendChild(pPrice)
        
        cardInfoCont.appendChild(cardInfo)
        cardInfoCont.appendChild(cardIcon)
    
        cardCont.appendChild(cardImg)
        cardCont.appendChild(cardInfoCont)
    
        cont.appendChild(cardCont)
    })
}
renderProducts(productList)