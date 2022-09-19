import React ,{useState, useEffect} from 'react'
import { useLocation } from "react-router-dom";
const Productdetails = () =>{
    const {state} = useLocation();
    const pr = state;
    let [data,setdata] = useState({});
  useEffect(() => { 
    fetch(`http://localhost:8080/product/${pr}`)
    .then(response => response.json())
    .then(data => setdata(data))
  },[pr])
  return (
  <div className="container-sm">
  {data && <div>
    <h2> {data.nom }</h2>
    <h3> {data.type} </h3>
    <img src={`${data.img}`} alt='iphone' className='img'></img>
    <table className="table">
    <thead><tr><th>Nom</th><th>Label</th></tr></thead>
      <tbody>
      {data.characteristics && data.characteristics.map( c=> <tr key={c.id}> <td> {c.name}</td> <td> {c.label}</td> </tr>
    )}
      </tbody>
    </table>
  </div>
  }
</div>
  )
}
export default  Productdetails;