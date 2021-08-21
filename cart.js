//Extra Memory

document.getElementById('eight-gb').addEventListener('click',function(){
    const extraMemoryEight = document.getElementById('extra-memory');
    extraMemoryEight.innerText = 0;
    calculateTotal();
    
})
document.getElementById('sixteen-gb').addEventListener('click', function(){
    const extraMemorySixteen = document.getElementById('extra-memory');
    extraMemorySixteen.innerText = 180;
    
    calculateTotal();
    
})



// Extra Storage
document.getElementById('storage-low').addEventListener('click',function(){
    const extraStorageLow = document.getElementById('extra-storage');
    extraStorageLow.innerText = 0;
    calculateTotal();
    

})
document.getElementById('storage-medium').addEventListener('click', function(){
    const extraStorageMedium = document.getElementById('extra-storage');
    extraStorageMedium.innerText = 100;
    calculateTotal();
    
})
document.getElementById('storage-high').addEventListener('click', function(){
    const extraStorageMedium = document.getElementById('extra-storage');
    extraStorageMedium.innerText = 180;
    calculateTotal();
    
})

//Delivery charge

document.getElementById('free-delivery').addEventListener('click', function(){
    const freeDelivery = document.getElementById('extra-delivery');
    freeDelivery.innerText = 0;
    calculateTotal();
    
})
document.getElementById('paid-delivery').addEventListener('click', function(){
    const freeDelivery = document.getElementById('extra-delivery');
    freeDelivery.innerText = 20;
    
    calculateTotal();
    
})
//function for memory
function getValue1(){
    const extra = document.getElementById('extra-memory');
    const extraMemory = parseInt(extra.innerText);
    return extraMemory;
    
}

//function for storage
function getValue2(){
    const extraS = document.getElementById('extra-storage');
    const extraStorage = parseInt(extraS.innerText);
    return extraStorage;
}

// function for delivery
function getValue3(){
    const extraD = document.getElementById('extra-delivery');
    const extraDelivery = parseInt(extraD.innerText);
    return extraDelivery;

}



//calculation
function calculateTotal(){
    
    const memoryCost = getValue1('extra-memory') + 1299;
    const storageCost = getValue2('extra-storage');
    const deliveryCost = getValue3('extra-delivery');
    const memoryTotal = memoryCost;
    const storageTotal = storageCost;
    const deliveryTotal = deliveryCost;
    const totalPrice = memoryTotal + storageTotal + deliveryTotal;

    //html for total
    document.getElementById('total-cost').innerText = totalPrice;
    


}




