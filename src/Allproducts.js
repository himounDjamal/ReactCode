import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import  './index.css';
const Allproducts = () => {
  let [data, setdata] = useState(null)
  useEffect(() => { 
    fetch("http://localhost:8080/product/")
    .then(response => response.json())
    .then(data => setdata(data))
  } ,[])
  const navigate = useNavigate();
  const handleRoute = (props) =>{ 
  navigate('/Productdetails', { state: props });
}
  return (
    <div className="dat">
        <h1>All products</h1>
      <table className="table">
      <thead>
          <tr>
            <th>id</th><th>Name</th><th>Type</th><th>Descreption</th>
          </tr>
      </thead>
       <tbody>
         {data && (data.map(item =>
           <tr key={item.id}  onClick={  ()=> handleRoute(item.id)} >
             <td>{ item.id }</td>
             <td>{ item.nom }</td>
             <td>{ item.type }</td>
             <td>{ item.descreption}</td>
           </tr>
           ))}
       </tbody>
      </table>
    </div>
    ) }
export default Allproducts;