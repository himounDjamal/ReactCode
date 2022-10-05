import React, { useState } from 'react'
import { Formik, Form, Field, FieldArray} from 'formik';
import {Button, input} from '@mui/material'
import { Progresbar } from './Progresbar';
import './addProduct.css'
export default function AddProduct2() {
  const [productId,setproductId]=useState(110);
    const addImage=(image,id)=>{
      const az = new FormData();
      az.append('image', image);
        fetch(`http://localhost:8080/product/${id}/image`,{method:"POST",
        body: az})
        .then(response => response.json())
        .then( data =>console.log(data))
        console.log(id)
      }
      const saveProduct=(values)=>{ console.log(values);
        alert(values);
         fetch(`http://localhost:8080/product/`,{method:"POST",
        headers: {'Content-Type':'application/json' },
        body:JSON.stringify( {
          "nom": values.pname,
          "type":values.ptype,
          "descreption":values.descreption,
          
        }),
      }).then(response => response.json())
      .then( data =>setproductId(data))
    } 

    const savecarcter=( values ,prdId)=>{ 
      console.log(values.characteristics);
      fetch(`http://localhost:8080/product/${prdId}/characteristic`,
      {
      method:"PUT",
      headers: {"Content-Type":"application/json",
    }, body:JSON.stringify( {
      "characteristics": values.characteristics
      }),
    })
    }
  return (
    <div > 
        <Formik 
        initialValues={{ 
            pname: '', ptype:'' ,descreption :'' , characteristics:[{name:"",label:""}],image:null,
        }}
       
        onSubmit={values => {
           console.log(values); 
          }}
        >{({values,handleChange, 
            handleSubmit,setFieldValue,
            isSubmitting})=>(
            <Form onSubmit={handleSubmit}  >
                <FormSteps values={values} productId={productId} saveProduct={saveProduct} savecarcter={savecarcter} >
                <div>
                <h3>Product Information</h3>
               <Field  name='pname' placeholder='Product Name'  />
               <Field name='ptype' placeholder='Product Type' />
               <Field  name='descreption' placeholder='Product descreption'  />
                </div>
                <div>
                <h3>Product Caracteristics</h3>
                <FieldArray name='characteristics'>
                    { fieldArrayprops=>{
                        const {push,remove, form}=fieldArrayprops
                        const {values}=form
                      return (
                        <div> 
                            {values.characteristics.map((characteristic ,index) => (
                                    <div key={index}>
                                     <Field    name={`characteristics.[${index}].name`}  placeholder='Characteristic label' />
                                    <Field   name={`characteristics.[${index}].label`} placeholder='Label value' />  
                                    <Button variant='outlined' onClick={() => remove(index)}>-</Button>
                                    </div>
                            )
                            )}
                             <Button  id='bu' variant='outlined' type='button' onClick={() => push({})}>+</Button>
                        </div>
                      )
                    }
                } 
                </FieldArray>
                </div>
                <div><h3>Product image</h3>
                <input   type="file" name='image'onChange={(event)=>{ setFieldValue("image",event.target.files[0])}}/>
                </div>
               </FormSteps>
            </Form>
            )}
        </Formik>
    </div>
  )
}
const FormSteps=(props)=>{
    const childrenArr = React.Children.toArray(props.children);
    const [step,setStep]=useState(1);
    const goNext = () => {
        if (step === 1) {
         console.log(step) 
          //props.saveProduct(props.values)
        }
        if (step === 2) {
        console.log(props.values.characteristics);
            props.savecarcter( props.values , props.productId)
            
       }
       setStep(step + 1);
    }
        const goBack = () => {
            setStep(step - 1);
          };
return(
    <div className='d-block text-center'>
        <Progresbar step={step}></Progresbar>
        {childrenArr[step-1]}
        {step>1 && <Button className='me-4'variant="contained" onClick={goBack}>Back</Button>}
        { step < childrenArr.length && <Button className='me-4'variant="contained" onClick={goNext}>Next</Button>}
        {step<childrenArr.length && <Button className='me-4'variant="contained" disabled={true} type="submit">Submit</Button>}
        {step===childrenArr.length && <Button className='me-4'variant="contained" type="submit">Submit</Button>}
    </div>
)
}