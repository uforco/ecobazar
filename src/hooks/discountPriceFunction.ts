const discountPriceFun = (discountValue: number | null | string, priceValue: number | string) => {
    const discount = Number(discountValue) || 0
    const price = Number(priceValue)

    // const discountPrice = Number(price) - (Number(price) * Number(discount) / 100)

    const discountAmount = (price * discount) / 100;
const finalPrice = price - discountAmount;

    return finalPrice.toFixed(2)
}

export default discountPriceFun