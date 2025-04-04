// import React from 'react'
import { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import './Add.css'
import axios from "axios"
import { toast } from 'react-toastify'
const Add = ({url}) => {
    // const url="http://localhost:4000";
    const[image,setImage]=useState(false);
    const [data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })
     const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value= event.target.value;
        setData(data=>({...data,[name]:value}))
     }
     const onSubmitHandler =async(event)=>{
        event.preventDefault();
        const formData=new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))//that's how string will be converted to no.
        formData.append("category",data.category)
        formData.append("image",image)
        const response= await axios.post(`${url}/api/food/add`,formData);
        if(response.data.success){
            setData({
                name:"",
                description:"",
                price:"",
                category:"Salad"
            })
            setImage(false)
            toast.success(response.data.message)
        }
        else
        {
            toast.error(response.data.message)
        }
     }
     useEffect(()=>{
        console.log(data);
     },[data])
  return (
    <div className='add'>
         <form className='flex-col'onSubmit={onSubmitHandler}>
            <div className='add-img-upload flex col'>
                <p>Upload image</p>
                <label htmlFor='image'>
                    <img src={image?URL.createObjectURL(image):assets.upload_area}/>

                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/>
            </div>
            <div className="add-product-name flex-col" >
                <p>Product name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='type'/>
            </div>
            <div className="add-product-description flex col">
                <p>Product description</p>
                <textarea onChange={onChangeHandler} name="description" rows="6" placeholder='write content here'/>

            </div>
            <div className="add-category-price">
                <div className="add-category flex col">
                    <p>Product category</p>
                    <select name="category">
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="desserts">desserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Rice">Rice</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className='add-price flex col'>
                    <p>Product Price</p>
                    <input onChange={onChangeHandler} type='Number' name='price' placeholder='$20'/>
                </div>

            </div>
            <button type='submit' className='add-btn' >ADD</button>
         </form>
      
    </div>
  )
}

export default Add
