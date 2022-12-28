import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListProducts from "./ListProducts";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FormProd from "./FormProd";
import './Header.css';
import { getProducts,saveProduct, deleteProduct, getCategory } from "../services";
import Loading from './Loading'
import ListProductCat from "./ListProductCat";
import Select from 'react-select';

//* CATEGORIES 
const suppliers = [
    {label:'ALL', value:'ALL'},
    {label:'FOOD', value:'FOOD'},
    {label:'ANIMALS', value:'ANIMALS'},
    {label:'CARS', value:'CARS'},
    {label:'OTHERS', value:'OTHERS'},
    {label:'TECHNOLOGY', value:'TECHNOLOGY'},
    {label:'CLOTHES', value:'CLOTHES'},
];



const Main = () => {

    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedSupp, setSelectedSupp] = useState('ALL');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const handleSelect = (e) => {
        setSelectedSupp(e.value);
    }
    

      


          

    

        useEffect(() => {
            async function loadProd(){
                const res = await getProducts();
                //   console.log(res);
                
                if(res.status === 200){
                //   console.log(res);
                    setProducts(res.data.products);
                }
            
                setIsLoading(false); 
              } 

              loadProd();
        }, [])
        
        useEffect(() => {
            const loadCat = async () => {
                // console.log(selectedSupp);
                const res = await getCategory(selectedSupp);
                // console.log(res);
                if(res.status === 200){
                //   console.log(res);
                    setCategories(res.data.categ);
                }
            
                setIsLoading(false);
              }

              loadCat();
        }, [selectedSupp])


        const getData = async(data) => {
            await saveProduct(data);
            window.location.reload();
            setShow(false);
        }

        const delProd = async(id) => {
            await deleteProduct(id);
            window.location.reload();
        }


    return(
        <>
            <Header />
         
            <Button id='button' variant='success' size='lg' onClick={handleShow}>
            +
            </Button>

            <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>NEW PRODUCT DATA</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormProd getData={getData}  />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                         Close
                        </Button>
                    </Modal.Footer>
            </Modal>

            <br />
            <br />
            <br />

            <div>
                <Select 
                    defaultValue={suppliers[0]}
                    options={suppliers}
                    onChange={handleSelect}
                />
            </div>



            <br />
            <br />
            <br />

            {
                isLoading && <Loading />
            }

            {
                !isLoading && !products.length && (
                <h1 id="empty">
                    You haven't added any product yet
                </h1>
                )
            }    


            {
                !isLoading && selectedSupp === 'ALL' ? <ListProducts products={products} delProd={delProd} /> : <ListProductCat categories={categories} delProd={delProd} /> 
            }

            {
                !isLoading && selectedSupp !== 'ALL' && !categories.length ? <h1 id="empty">You Do Not Have Products Of This Category</h1> : <span></span>
            }

        </>
    );
}

export default Main;