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
   
  // updateTotalPrice 
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
      
    extramMemory.innerText = '0';
    updateToralPrice();
   
 })
document.getElementById('memory-16GB').addEventListener('click',function(){

    extramMemory.innerText = '180';
    updateToralPrice();
    
})
// storage SSD 
document.getElementById('storage-256GB').addEventListener('click',function(){
    
    extraStorege.innerText = 0;
    updateToralPrice();
   
    
})
document.getElementById('storage-512GB').addEventListener('click',function(){
    
    extraStorege.innerText = 150;
    updateToralPrice();
   
})
document.getElementById('storage-1BT').addEventListener('click',function(){
   
    extraStorege.innerText = 200 ;
    updateToralPrice();
   
})
// delivary charges 
document.getElementById('delivery-free').addEventListener('click',function(){
    
    deliveryPrice.innerText = 0;
    updateToralPrice();
  
})
document.getElementById('delivery-charge').addEventListener('click',function(){
   
    deliveryPrice.innerText = 20;
    updateToralPrice();
    
})

// promo code use 
document.getElementById('apply-button').addEventListener('click',function(){
    const promoInput = document.getElementById('promo-input');
    const promoInputText = promoInput.value;
   
}) 
