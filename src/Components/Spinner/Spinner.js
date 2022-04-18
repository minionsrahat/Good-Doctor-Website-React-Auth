import React from 'react';

const Spinner = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-5 mx-auto"><div class="spinner-border text-danger text-center p-5" role="status">
                <span class="visually-hidden">Loading...</span>
            </div></div>
            </div>
            
        </div>

    );
};

export default Spinner;