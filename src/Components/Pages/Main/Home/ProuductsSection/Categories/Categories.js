import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesProductData } from "../../../../../../State/Thunk/getCategoriesProductData";
import banner from '../../../../../../Images/banner3.png'
import Category from "./Category/Category";
import FilterProduct from "./FilterProduct/FilterProduct";

const Categories = () => {
  const { name } = useParams();

  const dispatch = useDispatch()
  const products = useSelector(state => state.categoriesProduct.categoriesProduct)
  const filterColor = useSelector(state => state.categoriesProduct.filterColor)
  
  let datas
  for(const product of products){
    datas = product
  }

  useEffect(() => {
    dispatch(getCategoriesProductData(name))
  }, [dispatch,name]);
  
  return (
    <div className="">
      <img className="w-full" src={banner} alt=""/>
      <div className="w-11/12 mx-auto my-12 lg:my-20 lg:flex lg:justify-between">
        <FilterProduct product={datas}></FilterProduct>
        {
          filterColor.length <= 0 ?
          <div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7 lg:ml-16">
          {
            datas?.products?.map((item , i) => <Category key={i} pd={item}></Category>)
          }
        </div>
        :
        <div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7 lg:ml-16">
          {
            filterColor[0]?.map((item,i) => <Category key={i} pd={item}></Category>)
          }
        </div>
        }
      </div>
    </div>
  );
};

export default Categories;
