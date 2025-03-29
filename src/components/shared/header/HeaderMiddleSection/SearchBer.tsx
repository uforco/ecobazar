'use client'
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IoSearchOutline } from 'react-icons/io5';
import SearchProductView from './SearchProductView';
import { useAppDispatch } from '@/redux/app/hooks';
import { productslist, useGetProductsWithCategoriePageQuery } from '@/redux/features/productsList/productslist';
import { usePathname, useRouter } from 'next/navigation';
import { nameSearch } from '@/redux/features/filterByProduct/filterproducts';

const SearchBer = () => {

    const pathname = usePathname()
    const router = useRouter()

      const {
        data: products
      } = useGetProductsWithCategoriePageQuery(0);


    const [likeLoad, setLikeLoad] = React.useState<boolean>(false)
    const [submitLoader, setSubmitLoader] = React.useState<boolean>(false)
    const [productList, setProductList] = React.useState([])

    const dispatch = useAppDispatch()

    const likeSearchHeandle = async (name: string) => {
        if(!name){
            dispatch(nameSearch(''))
        }
        if(!name || likeLoad) {

            setProductList([])
            return;
        };
        setLikeLoad(true)
        const dta = await fetch(`/api/search_product/${name}`).then((res) => res.json())
        setProductList(dta)
        setLikeLoad(false)
    }




    const searchSubmitHendle = async (e: any) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const searchtext = formData.get('search') as string | null;
        if (!searchtext) return;
        setLikeLoad(false)
        setSubmitLoader(true)



        if(products.find((value: any) => value.product_name.includes(searchtext))){
            if(pathname?.includes('/categories')){
                dispatch(nameSearch(searchtext))
            }else{
                router.push(`/categories?name=${searchtext}`)
            }
        }else{
            const sd = await fetch(`/api/submit_search/${searchtext}`).then((res)=> res.json())
            if(sd.length){
                dispatch(
                    productslist.util.updateQueryData('getProductsWithCategoriePage', 0, (draft)=>{
                        return draft = [...new Map([...draft, ...sd].map((item)=> [item.product_id, item])).values()]
                    })
                )
            }
            if(pathname?.includes('/categories')){
                dispatch(nameSearch(searchtext))
            }else{
                router.push(`/categories?name=${searchtext}`)
            }
        }
        setSubmitLoader(false)
    }





    return (
        <div className='  w-[400px] relative' >
            <form onSubmit={searchSubmitHendle} className=' flex items-center w-full relative ' >
                <span className=' absolute top-1/2 -translate-y-1/2 left-3 ' > <IoSearchOutline></IoSearchOutline> </span>
                <Input name='search' id='searchber' onChange={(e) => likeSearchHeandle(e.target.value)} className=' w-full pl-8  ' type="text" placeholder="Search" />
                <div className=' absolute top-0 right-0 h-full flex items-center ' >
                    <span className={` ${likeLoad? " block " : " hidden "} w-4 h-4 border mr-3 animate-spin rounded-full border-t-Primary `} ></span>
                    <Button  className=' h-full ' >Search</Button>
                </div>
            </form>
            <SearchProductView productList={productList} />
        </div>
    );
};

export default SearchBer;