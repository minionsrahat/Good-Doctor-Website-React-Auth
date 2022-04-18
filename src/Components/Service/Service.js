import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const {service_name,des,img,price}=props.item
    const navigate=useNavigate();
    const gotoCheckout=()=>{
        navigate('/checkout')
    }
    return (
        <div
            data-w-id="d3d0c33c-ee5b-bc2e-9478-d7055e19aa77"
            role="listitem"
            class="card-service-item w-dyn-item"
        >
            <div class="card service w-inline-block"
            ><img
                    src={img}
                    alt="General"
                    class="image card-service" />
                <h2 class="title card-service heading-size-h3">{service_name}</h2>
                <p class="paragraph card-service">
                   {des}
                </p>
                <p class="paragraph card-service">
                  ${price}
                </p>
                <div class="link-wrapper">
                    <div>
                        <button  onClick={gotoCheckout} className='button-primary w-button'>Book</button>
                        </div>
                    <div
                        class="link-underline"
                    ></div></div
                ></div>
        </div>
    );
};

export default Service;