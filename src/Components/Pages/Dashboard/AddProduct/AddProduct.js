import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDashboardProduct } from "../../../../State/Thunk/getDashboardProduct";
import { Toaster, toast } from "react-hot-toast";

const AddProduct = () => {
  const [imageFile, setImageFile] = useState(null)
  const dispatch = useDispatch()
  const {id} = useParams()
  

  const product = useSelector(state => state.dashboardProduct.product)
  const imageHostKey = process.env.REACT_APP_imagebb_key;
  // console.log(imageHost)
  // console.log(product);
  // console.log(imageFile);

  useEffect(() => {
    dispatch(getDashboardProduct(id))
  },[dispatch,id])

  const handleFileChange = event  => {
    setImageFile(event.target.files[0])
  }

  const handleAddProduct = event => {
    event.preventDefault()
    // console.log(data);
    const formData = new FormData()
    formData.append('image', imageFile)

    fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`,{
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgData => {
      console.log(imgData);
      if(imgData.success  ){
        const form = event.target;
        const title = form.title.value;
        const color = form.color.value;
        const price = form.price.value;
        const regularPrice = form.regularPrice.value;
        const slug = form.slug.value;
        const image = imgData?.data?.display_url;
        let data = {
          title,color,price,regularPrice,slug,image
        } 
        fetch(`http://localhost:5000/dashboard/product/${id}` , {
        method: 'PUT',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
          toast.success("Product added successfully");
        })
        .catch(error => {
          console.error(error);
        });

        form.reset()

          }
          else{
            toast.error("Please upload images below 2MB")
          }
        })
  }
  

  return (
    <div className="p-4">
      <div>
        {
          product.map(pd =>  
            <div key={pd?._id} className="text-center text-white bg-black p-2 mb-4 rounded-t-md" >
              <h1>
                Add product in <span className="font-bold">{pd?.items}</span>
              </h1>
              <h1>Total Products: <span className="font-bold">{pd?.products.length}</span></h1>
            </div>)
        }
    </div>
    <form onSubmit={handleAddProduct}>
      <div className="flex items-center mb-5">
        <h1 className="w-52 font-semibold">Product Title</h1>
        <input
          className="border-2 border-gray-200  rounded-md p-2 w-full"
          type="text"
          name="title"
          placeholder="Product title"
          required
        />
      </div>
      <div className="flex items-center mb-5">
        <h1 className="w-52 font-semibold">Product Color</h1>
        <input
          className="border-2 border-gray-200  rounded-md p-2 w-full"
          type="text"
          name="color"
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
          placeholder="Product regular price"
        />
      </div>
      <div className="flex items-center mb-5">
        <h1 className="w-52 font-semibold">Product Slug</h1>
        <input
          className="border-2 border-gray-200  rounded-md p-2 w-full"
          type="text"
          name="slug"
          placeholder="Product slug"
          required
        />
      </div>
      <div className="flex items-center mb-5">
        <h1 className="w-52 font-semibold">Upload Image</h1>
        <input
          className="border-2 border-gray-200  rounded-md p-2 w-full"
          type="file"
          onChange = {handleFileChange}
          required
        />
      </div>
      <input className="bg-black px-3 py-1 rounded-md text-white cursor-pointer" type="submit" value="Add Product"/>
    </form>
    </div>
  );
};

export default AddProduct;
