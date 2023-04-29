function rentalCarCost(days) {
    var dayCost = 40;
    
    var discount = 0;
    if(days >= 3) discount += 20;
    if(days >= 7) discount += 30;
    
    return dayCost * days - discount;
}