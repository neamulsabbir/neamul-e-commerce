import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Category from "../Category/Category";
import FilterCategoryProduct from "../FilterCategoryProduct/FilterCategoryProduct";
import { getCategoriesProductData } from "../../../../../../State/Thunk/getCategoriesProductData";

const Categories = () => {
  const { name } = useParams();

  const dispatch = useDispatch()
  const data = useSelector(state => state.categoriesProduct.categoriesProduct)

  let datas
  for(const pd of data){
    datas= pd
  }

  useEffect(() => {
    dispatch(getCategoriesProductData(name))
  }, []);
  
  return (
    <div className="w-11/12 mx-auto py-20">
      <div className="lg:flex lg:justify-between">
        <FilterCategoryProduct></FilterCategoryProduct>
        <div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7 lg:ml-16">
          {
            datas?.allProducts?.map(item => <Category pd={item}></Category>)
          }
        </div>
      </div>
    </div>
  );
};

export default Categories;
