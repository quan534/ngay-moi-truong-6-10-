
let products = {
    data: [
        {
            name: "hôp giấy",
            price: "2000đ/hộp",
            image: "../img/hôp giấy.jpg",
            id:"1"
        },

        {
            name: "khay giấy",
            price: "2500đ/cái",
            image: "../img/khay giấy.jpg",
            id:"2"
        },

        {
            name: "ly giấy",
            price: "1000đ/cái",
            image: "../img/ly giấy.jpg",
            id:"3"
        },

        {
            name: "ống hút giấy",
            price: "500đ/cái",
            image: "../img/ống hút giấy.jpg",
            id:"4"
        },

        {
            name: "tô giấy",
            price: "2500đ/cái",
            image: "../img/tô giấy.jpg",
            id:"5"
        },

        {
            name: "túi giấy",
            price: "5000đ/cái",
            image: "../img/túi giấy.jpg",
            id:"6"
        },
        
    ]
}

for (let items of products.data) {

    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", items.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = items.name.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Giá:</b> " + items.price;
    container.appendChild(price);

    let btn = document.createElement("button")
    btn.classList.add('btn')
    btn.setAttribute("onclick", `addToCart(${items.id})`)
    btn.innerHTML = "Thêm vào giỏ hàng"
    container.appendChild(btn)
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}


function opencart(){
    let carte = document.getElementById("cart1")
    let cartdisplay = document.getElementById("cart1").style.display
    if(cartdisplay == 'none'){
        carte.style.display = "block"
    }
    else{
        carte.style.display='none'
    }
}
    let pquality1 =0
    let pquality2 =0
    let pquality3 =0
    let pquality4 =0
    let pquality5 =0
    let pquality6 =0
    let ptotal1 =0
    let ptotal2 =0
    let ptotal3 =0
    let ptotal4 =0
    let ptotal5 =0
    let ptotal6 =0
    let pprice1=2000
    let pprice2=2500
    let pprice3=1000
    let pprice4=500
    let pprice5=2500
    let pprice6=5000

function addToCart(a){
    let carte = document.getElementById("cart11")
    if (a == 1){
        if(pquality1 == null ){
            pname1 = "hôp giấy"
            pprice1 = 2000
            pquality1 = 1
            ptotal1 = pprice1*pquality1|0
            var list1 =`<p>${pname1}: ${pprice1}đ x ${pquality1} = ${ptotal1}đồng</p>`
            localStorage.setItem("list1",list1)
        }
        else{
            pquality1 ++
            pname1 = "hôp giấy"
            pprice1 = 2000
            ptotal1 = pprice1*pquality1|0
            var list1 =`<p>${pname1}: ${pprice1}đ x ${pquality1} = ${ptotal1}đồng</p>`
            localStorage.setItem("list1",list1)
        }
    }
    if(a == 2){
    if(pquality2 == null ){
        pname2 = "khay giấy"
        pprice2 = 2500
        pquality2 = 1
        ptotal2 = pprice2*pquality2|0
        var list2 =`<p>${pname2}: ${pprice2}đ x ${pquality2} = ${ptotal2}đồng</p>`
        localStorage.setItem("list2",list2)
    }
    else{
        pquality2 ++
        pname2 = "khay giấy"
        pprice2 = 2500
        ptotal2 = pprice2*pquality2|0
        var list2 =`<p>${pname2}: ${pprice2}đ x ${pquality2} = ${ptotal2}đồng</p>`
        localStorage.setItem("list2",list2)
    }
    }
    if (a == 3){
        if(pquality3 == null ){
            pname3 = "ly giấy"
            pprice3 = 1000
            pquality3 = 1
            ptotal3 = pprice3*pquality3|0
            var list3 =`<p>${pname3}: ${pprice3}đ x ${pquality3} = ${ptotal3}đồng</p>`
            localStorage.setItem("list3",list3)
        }
        else{
            pquality3 ++
            pname3 = "ly giấy"
            pprice3 = 1000
            ptotal3 = pprice3*pquality3|0
            var list3 =`<p>${pname3}: ${pprice3}đ x ${pquality3} = ${ptotal3}đồng</p>`
            localStorage.setItem("list3",list3)
        }
    }
    if (a == 4){
        if(pquality4 == null ){
            pname4 = "ống hút giấy"
            pprice4 = 500
            pquality4 = 1
            ptotal4 = pprice4*pquality4|0
            var list4 =`<p>${pname4}: ${pprice4}đ x ${pquality4} = ${ptotal4}đồng</p>`
            localStorage.setItem("list4",list4)
        }
        else{
            pquality4 ++
            pname4 = "ống hút giấy"
            pprice4 = 500            
            ptotal4 = pprice4*pquality4|0
            var list4 =`<p>${pname4}: ${pprice4}đ x ${pquality4} = ${ptotal4}đồng</p>`
            localStorage.setItem("list4",list4)
        }
    }
    if (a == 5){
        if(pquality5 == null ){
            pname5 = "tô giấy"
            pprice5 = 2500
            pquality5 = 1
            ptotal5 = pprice5*pquality5|0
            var list5 =`<p>${pname5}: ${pprice5}đ x ${pquality5} = ${ptotal5}đồng</p>`
            localStorage.setItem("list5",list5)
        }
        else{
            pquality5 ++
            pname5 = "tô giấy"
            pprice5 = 2500
            ptotal5 = pprice5*pquality5|0
            var list5 =`<p>${pname5}: ${pprice5}đ x ${pquality5} = ${ptotal5}đồng</p>`
            localStorage.setItem("list5",list5)
        }
    }
    if (a == 6){
        if(pquality6 == null ){
            pname6 = "túi giấy"
            pprice6 = 5000
            pquality6 = 1
            ptotal6 = pprice6*pquality6|0
            var list6 =`<p>${pname6}: ${pprice6}đ x ${pquality6} = ${ptotal6}đồng</p>`
            localStorage.setItem("list6",list6)
        }
        else{
            pquality6 ++
            pname6 = "túi giấy"
            pprice6 = 5000
            ptotal6 = pprice6*pquality6|0
            var list6 =`<p>${pname6}: ${pprice6}đ x ${pquality6} = ${ptotal6}đồng</p>`
            localStorage.setItem("list6",list6)
        }
    }
    if(localStorage.getItem("list1") == null){
        localStorage.setItem("list1","") 
    }
    if(localStorage.getItem("list2") == null){
        localStorage.setItem("list2","") 
    }
    if(localStorage.getItem("list3") == null){
        localStorage.setItem("list3","") 
    }
    if(localStorage.getItem("list4") == null){
        localStorage.setItem("list4","") 
    }
    if(localStorage.getItem("list5") == null){
        localStorage.setItem("list5","") 
    }
    if(localStorage.getItem("list6") == null){
        localStorage.setItem("list6","") 
    }
    let list =     localStorage.getItem("list1") +localStorage.getItem("list2")+localStorage.getItem("list3")+localStorage.getItem("list4")+localStorage.getItem("list5")+localStorage.getItem("list6")
    let total = ptotal1 + ptotal2 + ptotal3 + ptotal4 + ptotal5 + ptotal6
    carte.innerHTML = list +`<h1>Tổng :${total} đồng</h1>`
    console.log(list)
    document.getElementById("total").innerHTML=`Tổng: ${total} đồng`
}

function clearcart(){
    let carte = document.getElementById("cart11")
    localStorage.clear()
    carte.innerHTML="<h1 >Giỏ hàng của bạn trống</h1>"
    document.getElementById("total").innerHTML=`Tổng: 0 đồng`
    pquality1=0
    pquality2=0
    pquality3=0
    pquality4=0
    pquality5=0
    pquality6=0
    ptotal1=0
    ptotal2=0
    ptotal3=0
    ptotal4=0
    ptotal5=0
    ptotal6=0
}