import React, { useEffect, useState } from 'react'
import "./ProductDetails.css";
import { useParams } from 'react-router-dom';
import { ProductsData } from '../../ProductsData';
import {FaShoppingCart} from "react-icons/fa"
import {AiFillThunderbolt, AiFillStar} from "react-icons/ai"

const ProductDetails = () => {
  
  const[data,setData] = useState[{}];
  const { id } = useParams();

  useEffect(()=> {
    const product = ProductsData.find((item)=>{
      return item.id.toString() === id;
    });
      setData(product);
  },[id]);

  console.log(data);  
  return (
    <div className='ProductDetails'>
      <div className='ProductDetails-left'>
        <div className='otherImgs'>
          <img src={data.url}/>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails