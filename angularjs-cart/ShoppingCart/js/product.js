//----------------------------------------------------------------
// product class
function product(sku, name, description, price, cal, carot, vitc, folate, potassium, fiber) {
    this.sku = sku; // ma san pham (SKU = stock keeping unit)
    this.name = name;
    this.description = description;
    this.price = price;
    this.cal = cal; // Calories
    this.nutrients = { 
        "Sắc tố": carot, 
        "Vitamin C": vitc,
        "Acid amin (Vitamin nhóm B)": folate,
        "Potassium": potassium,
        "Fiber": fiber
    };
}
