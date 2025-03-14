
const saveWishlist = async (id: string): Promise<string[]> => {
    const data = localStorage.getItem('wishlist')
    if(!data){
        localStorage.setItem('wishlist', JSON.stringify([id]))
        return [id]
    }
    const items = JSON.parse(data)
    if(items.includes(id)){
        const deleteItem = items.filter((value: string) =>  value !== id)
        localStorage.setItem('wishlist', JSON.stringify(deleteItem))
        const setitems = localStorage.getItem('wishlist')
        return setitems ? JSON.parse(setitems) : []
    }
    items.push(id)
    localStorage.setItem('wishlist', JSON.stringify(items))
    const setitems = localStorage.getItem('wishlist')
    return setitems ? JSON.parse(setitems) : []
};

export default saveWishlist;



 export const getWishlistIds = (): string[] => {
    const data = localStorage.getItem('wishlist')
    if(data) return JSON.parse(data)
    else return []
}