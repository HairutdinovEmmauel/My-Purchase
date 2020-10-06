import React from 'react';
import FructList from '../fruct-list';
import Catalog from '../catalog';

const Content = () =>{
    return (
        <div className="main-content">
            <Catalog />
            <FructList />
        </div>
    )
}

export default Content;