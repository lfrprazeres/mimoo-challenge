export const addNewProduct = (products, newProduct) => {
    let hasCategory = products.filter(category => category.category === "Skin Care").length;
    if(hasCategory) {
        return products.map(category => {
            // in That case the "Skin Care" string need to be newProduct.category, but it doesn't exist
            if(category.category === "Skin Care") {
                category.brands.map(brand => {
                    if(brand.name === newProduct.brand) {
                        return pushProductToBrand(brand, newProduct)
                    }
                    return brand;
                })
            }
            return category
        })
    } else {
        return createNewCategory(products, newProduct);
    }
}

const pushProductToBrand = (brand, newProduct) => {
    return {
        ...brand,
        products: brand.products.push({name: newProduct.name, image: newProduct.image})
    }
}

const createNewCategory = (products, newProduct) => {
    return [
        ...products,
        {
            category: "Skin Care",
            brands: [{
                name: newProduct.brand,
                products: [{
                    name: newProduct.name,
                    image: newProduct.image
                }]
            }]
        }
    ]
}