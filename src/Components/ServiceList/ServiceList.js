import React from 'react';
import useServices from '../Hooks/ServiceData';
import Service from '../Service/Service';

const ServiceList = () => {
    
  const [services,setServices]=useServices();

  return (
    <div>

      <section className="section services wf-section">
        <div
          data-w-id="e2d261c4-a6ac-ecfb-3bd2-5ffa3b526351"
          className="container-medium-885px services">
       
          <h1 data-w-id="Heading 14" className="title services">
          My Services
          </h1>
        </div>
        <div className="container-default w-container">
          <div className="w-dyn-list">
            <div role="list" className="services-grid w-dyn-items">

              {
                services.map((item)=>{
                  return <Service key={item.id} item={item}></Service>
                })
              }
           
            </div>
          </div>
        </div>
        <div className="bg services"></div>
      </section>
    </div>
  );
};

export default ServiceList;