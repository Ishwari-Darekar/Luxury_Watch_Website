const wrapper=document.querySelector(".sliderWrapper")
const menuItem=document.querySelectorAll(".menuItem")

//command for changing the product slide
const products=[
    {
        id:1,
        title:"TITAN",
        price:2999,
        colors: [
            {
                code:"#f8679fff",
                img:"./img/t_1.png",
            },
            {
                code:"#e9e498",
                img:"./img/t_2.png",
            },
        ],
    },
    {
        
        id:2,
        title:"SMART WATCH",
        price:4999,
        colors: [
            {
                code:"#000000ff",
                img:"./img/smart_1.png",
            },
            {
                code:"#ffcdd2",
                img:"./img/smart_2.png",
            },
        ],

    },
    {  
        id:3,
        title:"LOUIS CARDIN",
        price:3999,
        colors: [
            {
                code:"#220c0cff",
                img:"./img/lc_1.png",
            },
            {
                code:"#dad7c1ff",
                img:"./img/lc_2.png",
            },
        ],
    },
    {
        
        id:4,
        title:"ROLEX",
        price:5999,
        colors: [
            {
                code:"#f8bb61ff",
                img:"./img/rolex_1.png",
            },
            {
                code:"#ef9a9a",
                img:"./img/rolex_2.png",
            },
        ],
    },
    {
        
        id:5,
        title:"G-SHOCK",
        price:4899,
        colors: [
            {
                code:"#b18129ff",
                img:"./img/g_1.png",
            },
            {
                code:"#0a0c8b",
                img:"./img/g_2.png",
            },
            
        ],
    },
   
];

let choosenProduct=products[0];

const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductPrice=document.querySelector(".productPrice");
const currentProductColors=document.querySelectorAll(".color");
//const currentProductSizes=document.querySelector(".Addtocart");



//command for nav button to open pages
menuItem.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //change the current slide from product
        wrapper.style.transform=`translateX(${-100*index}vw)`;             //console.log("you clicked!"+index);--->to check in console
        
        //change the choosen product
        choosenProduct=products[index];

        //change text of currentProduct
        currentProductTitle.textContent=choosenProduct.title;
        currentProductPrice.textContent="Rs "+choosenProduct.price;
        currentProductImg.src=choosenProduct.colors[0].img;

        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor=choosenProduct.colors[index].code;
        });

    });
});


currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src=choosenProduct.colors[index].img
    });       
});


const productButton=document.querySelector(".productButton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
});

close.addEventListener("click",()=>{
    payment.style.display="none"
});