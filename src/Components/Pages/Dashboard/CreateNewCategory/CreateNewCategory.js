import React, { useState } from "react";
import { toast } from "react-hot-toast";

const CreateNewCategory = () => {
    const [imageFile, setImageFile] = useState(null)
    const imageHostKey = process.env.REACT_APP_imagebb_key;

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
      // console.log(imgData);
      if(imgData.success  ){
        const form = event.target;
        const items = form.items.value;
        const category = form.category.value;
        const banner = imgData?.data?.display_url;
        const title = form.title.value;
        const color = form.color.value;
        const price = form.price.value;
        const regularPrice = form.regularPrice.value;
        const slug = form.slug.value;
        const image = imgData?.data?.display_url;
        let data = {
            items,category,banner,title,color,price,regularPrice,slug,image
        } 

        // form.reset()

          }
          else{
            toast.error("Please upload images below 2MB")
          }
        })
    }  
  return (
    <div>
      <div className="text-center text-white bg-black p-2 mb-4 rounded-t-md">
        <h1>Add new product category</h1>
      </div>
      <form className="p-4" onSubmit={handleAddProduct}>
        <div className="flex items-center mb-5">
          <h1 className="w-52 font-semibold">Items</h1>
          <input
            className="border-2 border-gray-200  rounded-md p-2 w-full"
            type="text"
            name="items"
            placeholder="Product items"
            // required
          />
        </div>
        <div className="flex items-center mb-5">
          <h1 className="w-52 font-semibold">Category</h1>
          <input
            className="border-2 border-gray-200  rounded-md p-2 w-full"
            type="text"
            name="category"
            placeholder="Product category"
            // required
          />
        </div>
        <div className="flex items-center mb-5">
          <h1 className="w-52 font-semibold">Banner</h1>
          <input
            className="border-2 border-gray-200  rounded-md p-2 w-full"
            type="file"
            onChange = {(event) => setImageFile(event.target.files[0])}
            // required
          />
        </div>
        <div className="flex items-center mb-5">
          <h1 className="w-52 font-semibold">Product Title</h1>
          <input
            className="border-2 border-gray-200  rounded-md p-2 w-full"
            type="text"
            name="title"
            placeholder="Product title"
            // required
          />
        </div>
        <div className="flex items-center mb-5">
          <h1 className="w-52 font-semibold">Product Color</h1>
          <input
            className="border-2 border-gray-200  rounded-md p-2 w-full"
            type="text"
            name="color"
            placeholder="Product color"
            // required
          />
        </div>
        <div className="flex items-center mb-5">
          <h1 className="w-52 font-semibold">Product Price</h1>
          <input
            className="border-2 border-gray-200  rounded-md p-2 w-full"
            type="number"
            name="price"
            placeholder="Product price"
            // required
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
            // required
          />
        </div>
        <div className="flex items-center mb-5">
          <h1 className="w-52 font-semibold">Image</h1>
          <input
            className="border-2 border-gray-200  rounded-md p-2 w-full"
            type="file"
              onChange = {(event) => setImageFile(event.target.files[0])}
            // required
          />
        </div>
        <div className=" flex justify-end">
          <input
            className="bg-black px-3 py-1 rounded-md text-white cursor-pointer"
            type="submit"
            value="Upload"
          />
        </div>
      </form>
      
    </div>
  );
};

export default CreateNewCategory;
