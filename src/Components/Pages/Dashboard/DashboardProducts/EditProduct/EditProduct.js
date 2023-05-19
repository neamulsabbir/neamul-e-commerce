import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const EditProduct = () => {
    const {id} = useParams()
    const [filterProduct,setFilterProduct] = useState([])

    const products = useSelector(state => state.product.products)
    // console.log(filterProduct);
    let productItems;
    for(const product of products){
        productItems = product
    }
    useEffect(() => {
        setFilterProduct(productItems?.products.find(pd => pd?.id === id))
    },[id,productItems])

    
  
    const handleAddProduct = (event) => {
        event.preventDefault()

        const form = event.target;
        const title = form.title.value;
        const color = form.color.value;
        const price = form.price.value;
        const regularPrice = form.regularPrice.value;
        const slug = form.slug.value;
        let data = {
          title,color,price,regularPrice,slug,
        }

        fetch(`http://localhost:5000/dashboard/editProduct/${id}` , {
        method: 'PUT',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
          toast.success("Product updated successfully");
        // console.log(data);
        })
        .catch(error => {
          console.error(error);
        });

    }

  return (
    <div className="p-4">
        <h1 className="text-center text-white bg-black p-2 mb-4 rounded-t-md"><span className="font-bold">{filterProduct?.title} </span> update this product</h1>
      <form onSubmit={handleAddProduct}>
        <div className="flex items-center mb-5">
          <h1 className="w-52 font-semibold">Product Title</h1>
          <input
            className="border-2 border-gray-200  rounded-md p-2 w-full"
            type="text"
            name="title"
            placeholder="Product title"
            defaultValue={filterProduct?.title}
            required
          />
        </div>
        <div className="flex items-center mb-5">
          <h1 className="w-52 font-semibold">Product Color</h1>
          <input
            className="border-2 border-gray-200  rounded-md p-2 w-full"
            type="text"
            name="color"
            defaultValue={filterProduct?.color}
            placeholder="Product color"
            required
          />
        </div>
        <div className="flex items-center mb-5">
          <h1 className="w-52 font-semibold">Product Price</h1>
          <input
            className="border-2 border-gray-200  rounded-md p-2 w-full"
            type="number"
            name="price"
            defaultValue={filterProduct?.price}
            placeholder="Product price"
            required
          />
        </div>
        <div className="flex items-center mb-5">
          <h1 className="w-52 font-semibold">Product Regular Price</h1>
          <input
            className="border-2 border-gray-200  rounded-md p-2 w-full"
            type="number"
            name="regularPrice"
            defaultValue={filterProduct?.regularPrice}
            placeholder="Product regular price"
          />
        </div>
        <div className="flex items-center mb-5">
          <h1 className="w-52 font-semibold">Product Slug</h1>
          <input
            className="border-2 border-gray-200  rounded-md p-2 w-full"
            type="text"
            name="slug"
            defaultValue={filterProduct?.slug}
            placeholder="Product slug"
            required
          />
        </div>
        {/* <div className="flex items-center mb-5">
        <h1 className="w-52 font-semibold">Upload Image</h1>
        <input
          className="border-2 border-gray-200  rounded-md p-2 w-full"
          type="file"
          onChange = {handleFileChange}
          required
        />
      </div> */}
        <input
          className="bg-black px-3 py-1 rounded-md text-white cursor-pointer"
          type="submit"
          value="Update Product"
        />
      </form>
    </div>
  );
};

export default EditProduct;
