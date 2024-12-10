import React from 'react';
import { Link } from 'react-router-dom';

import AddToCart from './AddToCart';


import { AddToCartContext } from '../../contexts/AddToCartContext';
import { highLightCartButton } from '../../lib/cartLib';

// import ReadMore from '../helpers/ReadMore';
function handleAddToCart(e){
  ////e.preventDefault;
  //alert()
  console.log(e)
  //alert()
//highLightCartButton();
//this.context.action(this.props.product);

}
export default (props) => {

  
  return(
    <div className="col-6 col-sm-4" product={props.product} onClick={handleAddToCart(props.product)}>
    

      <div className="product-box card mb-3">
        <div className="card-header">
          <h5 className="card-title">{ props.product.Title }
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            {/* <Link to={"/product-detail/" + props.product.Id}> */}
              <img className="card-img-top" alt={props.product.Title} src={props.product.ImageUrl} />
            {/* </Link> */}
          </div>
          {/* <p className="card-text description">
            <ReadMore text={props.product.Description} length="100" />
          </p> */}
          {/* <p className="card-text"><b>Category:</b> {props.product.Category}</p> */}
          {/* <p className="card-text"><b>Source:</b> {props.product.Manufacturer}</p> */}
          {/* <p className="card-text"><b>Organic:</b> {props.product.Organic ? 'Yes' : 'No' }</p> */}
          {/* <p className="card-text"><b>Price:</b> ${props.product.Price}</p> */}
          <AddToCart product={props.product} />
        </div>
      </div>

    </div>
  );
}
