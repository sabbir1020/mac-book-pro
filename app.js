//  function updateExtraMemory (){

//     const extramMemory = document.getElementById('extra-memory');
//     const extramMemoryText = extramMemory.innerText;
//     extramMemoryText.innerText = extramMemoryText;

//  }
// const totalPrice = document.getElementById('total-price')
// function updateToralPrice (){
//     console.log(totalPrice.innerText,extramMemory.innerText);
// }

document.getElementById('memory-6GB').addEventListener('click',function(){
    
    const extramMemory = document.getElementById('extra-memory');
    const extramMemoryText = extramMemory.innerText;
    extramMemory.innerText = '0';
    // console.log(extramMemoryText);
   
})
document.getElementById('memory-16GB').addEventListener('click',function(){

    const extramMemory = document.getElementById('extra-memory');
    const extramMemoryText = extramMemory.innerText;
    extramMemory.innerText = '180';
    // console.log(extramMemoryText);
})
// storage SSD 
document.getElementById('storage-256GB').addEventListener('click',function(){
    const extraStorege = document.getElementById('extra-storege');
    const extraStoregeText = extraStorege.innerText;
    extraStorege.innerText = 0;
    // console.log('click storage 256');
    
})
document.getElementById('storage-512GB').addEventListener('click',function(){
    const extraStorege = document.getElementById('extra-storege');
    const extraStoregeText = extraStorege.innerText;
    extraStorege.innerText = 150;
    // console.log('click storage 512');
})
document.getElementById('storage-1BT').addEventListener('click',function(){
    const extraStorege = document.getElementById('extra-storege');
    const extraStoregeText = extraStorege.innerText;
    extraStorege.innerText = 200 ;
    // console.log('click storage 1TB');
})
// delivary charges 
document.getElementById('delivery-free').addEventListener('click',function(){
    const deliveryPrice =document.getElementById('delivery-price');
    const deliveryPriceText = deliveryPrice.innerText;
    deliveryPrice.innerText = 0;
    // console.log(deliveryPrice);
})
document.getElementById('delivery-charge').addEventListener('click',function(){
    const deliveryPrice =document.getElementById('delivery-price');
    const deliveryPriceText = deliveryPrice.innerText;
    deliveryPrice.innerText = 20;
    // console.log('delivery charge');
})
// total price 
// document.getElementById('best-price'); 
