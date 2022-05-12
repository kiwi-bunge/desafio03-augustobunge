import '../../../../src/Products.css';
import Item from './Item';
import React, { useEffect, useState } from 'react';
import { productsArray } from './data';


const ItemList = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    const getProducts = new Promise((resolve, reject) => {

        setTimeout(() => {
      
          resolve(productsArray);
        }, 2000);
      });

    const getProductsDataBase = async () => {
        
        try {
            const result = await getProducts;
    
            setProducts(result);
                } catch (err) {

                    alert ("We can't load products right now, try again later please.");
                    }
    }
        
      useEffect(() => {

        getProductsDataBase();
        getProducts
        .finally(() => setLoading(false))
      }, []);

  return (

    <div className='productList'>

        {
            <div className='productList'>
                { loading ?
                
                    <h2>Loading products...</h2>
                    
                    :    
                    
                    products.map((prod) => {

                        return (
                            <div key={prod.id}>
                                <Item
                                    name={prod.name}
                                    img={prod.img}
                                    price={prod.price}
                                    stock={prod.stock}
                                />
                            </div>
                        );
                    })
                }
            </div>
        }
    </div>

)}


export default ItemList