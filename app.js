  const extramMemory = document.getElementById('extra-memory');
  const extraStorege = document.getElementById('extra-storege');
  const deliveryPrice =document.getElementById('delivery-price');

  const extramMemoryText = extramMemory.innerText;
  const extraStoregeText = extraStorege.innerText;
  const deliveryPriceText = deliveryPrice.innerText;

  const totalPrice =document.getElementById('total-price');
  const totalPriceText = totalPrice.innerText;
  const bestPrice = document.getElementById('best-price');
  const bestPriceText = bestPrice.innerText;
  const totalAmount = document.getElementById('total-amount');
  const totalAmountText = totalAmount.innerText;

    function updateToralPrice (){
        const bestTotal = Number(bestPrice.innerText);
        const memoryPuduct = Number(extramMemory.innerText);
        const storegePuduct =Number( extraStorege.innerText);
        const deliverypuduct = Number(deliveryPrice.innerText);
        const sum = memoryPuduct + storegePuduct + deliverypuduct + bestTotal;
        totalPrice.innerText = sum;
        totalAmount.innerText =sum;
        
    }



document.getElementById('memory-6GB').addEventListener('click',function(){
    
    // const extramMemory = document.getElementById('extra-memory');
    // const extramMemoryText = extramMemory.innerText;
    extramMemory.innerText = '0';
    updateToralPrice();

    // chageing total 
    // totalPrice.innerText = 1200;
   
    // console.log(extramMemoryText);
   
})
document.getElementById('memory-16GB').addEventListener('click',function(){

    // const extramMemory = document.getElementById('extra-memory');
    // const extramMemoryText = extramMemory.innerText;
    extramMemory.innerText = '180';
    updateToralPrice();
    // console.log(extramMemoryText);
})
// storage SSD 
document.getElementById('storage-256GB').addEventListener('click',function(){
    // const extraStorege = document.getElementById('extra-storege');
    // const extraStoregeText = extraStorege.innerText;
    extraStorege.innerText = 0;
    updateToralPrice();
    // console.log('click storage 256');
    
})
document.getElementById('storage-512GB').addEventListener('click',function(){
    // const extraStorege = document.getElementById('extra-storege');
    // const extraStoregeText = extraStorege.innerText;
    extraStorege.innerText = 150;
    updateToralPrice();
    // console.log('click storage 512');
})
document.getElementById('storage-1BT').addEventListener('click',function(){
    // const extraStorege = document.getElementById('extra-storege');
    // const extraStoregeText = extraStorege.innerText;
    extraStorege.innerText = 200 ;
    updateToralPrice();
    // console.log('click storage 1TB');
})
// delivary charges 
document.getElementById('delivery-free').addEventListener('click',function(){
    // const deliveryPrice =document.getElementById('delivery-price');
    // const deliveryPriceText = deliveryPrice.innerText;
    deliveryPrice.innerText = 0;
    updateToralPrice();
    // console.log(deliveryPrice);
})
document.getElementById('delivery-charge').addEventListener('click',function(){
    // const deliveryPrice =document.getElementById('delivery-price');
    // const deliveryPriceText = deliveryPrice.innerText;
    deliveryPrice.innerText = 20;
    updateToralPrice();
    // console.log('delivery charge');
})
// total price 
// document.getElementById('best-price');  
// const totalPrice = document.getElementById('total-price');
// totalPriceText  = totalPrice.innerText; 
// function updateToralPrice (){
//     console.log(totalPrice.innerText,extramMemory.innerText);
// }
