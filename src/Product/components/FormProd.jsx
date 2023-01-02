import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormProd = ({getData}) => {

  const [formData, setFormData] = useState({
    name:'',
    priceUnitary:'',
    size:'',
    description:'',
    imgUrl:'',
    category:''
  });


  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getData({...formData});
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>*PRODUCT NAME</Form.Label>
                <Form.Control
                 type='text'
                 placeholder='Enter Name'
                 name='name'
                 value={formData.name}
                 onChange={handleChange}
                 />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>*PRICE</Form.Label>
                <Form.Control
                 type='number'
                 placeholder='Enter Price'
                 name='priceUnitary'
                 value={formData.priceUnitary}
                 onChange={handleChange}
                 min={0}
                 />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>*SIZE</Form.Label>
                <Form.Control
                 type='text'
                 placeholder='Enter Size'
                 name='size'
                 value={formData.size}
                 onChange={handleChange}
                 />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>*DESCRIPTION</Form.Label>
                <Form.Control
                 type='text'
                 placeholder='Small Product Overview'
                 name='description'
                 value={formData.description}
                 onChange={handleChange}
                 />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>*CATEGORY</Form.Label>
            <Form.Select
             aria-label="Default select example"
             name='category'
             value={formData.category}
             onChange={handleChange}
             >
                <option>Select Categoty</option>
                <option value='FOOD'>FOOD</option>
                <option value='ANIMALS'>ANIMALS</option>
                <option value='CLOTHES'>CLOTHES</option>
                <option value='CARS'>CARS</option>
                <option value='TECHNOLOGY'>TECHNOLOGY</option>
                <option value='OTHERS'>OTHERS</option>
            </Form.Select>
        </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>*IMAGE</Form.Label>
                <Form.Control
                 type='text'
                 placeholder='URL OF THE IMAGE'
                 name='imgUrl'
                 value={formData.imgUrl}
                 onChange={handleChange}
                 />
        </Form.Group>
        
        <Button variant="success" type="submit">
          Save
        </Button>
  </Form>
  )
}

export default FormProd
