import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Products(props) {
    let [data, setData] = useState([]);
    let nav = useNavigate()
    useEffect(() => {
        fetch("http://localhost:4000/api/product/get-products").then((res) => res.json()).then((result) => {
            setData([...result.data])
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    let updatehandler = (id)=>{
        nav('/update-product/'+id)
    }
    return (
        <div>
            <table>
               <thead>
                 <tr>
                    <th>SNO</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>img</th>
                </tr>
               </thead>
               <tbody>
                 {data?.map((v, i) => (
                    <tr>
                        <td>{v.name}</td>
                        <td>{v.price}</td>
                        <td>{v.category}</td>
                        {console.log(v.images[0].url.replace("undefined","uday.jpg"))}
                        <td><img src={v.images[0].url.replace("undefined","uday.jpg")} alt="" width="100px" /></td>
                        <td><button>Delete</button></td>
                        <td><button onClick={()=>{updatehandler(v._id)}}>Update</button></td>
                    </tr>
                ))}
               </tbody>
            </table>
        </div>
    );
}

export default Products;