import React from 'react';

const Service = (props) => {
    const {service_name,des,img,price}=props.item
    return (
        <div
            data-w-id="d3d0c33c-ee5b-bc2e-9478-d7055e19aa77"
            role="listitem"
            class="card-service-item w-dyn-item"
        >
            <a href="/service/general" class="card service w-inline-block"
            ><img
                    src={img}
                    alt="General"
                    class="image card-service" />
                <h2 class="title card-service heading-size-h3">{service_name}</h2>
                <p class="paragraph card-service">
                   {des}
                </p>
                <div class="link-wrapper">
                    <div>Learn More</div>
                    <div
                        class="link-underline"
                    ></div></div
                ></a>
        </div>
    );
};

export default Service;