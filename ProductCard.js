import React from "react"

function ProductCard(props){
<div className="card-container" id={props.cardID}>

  <a href={props.linkURL}><img src={props.imgURL} alt={props.imgDescription} /> </a>
  <p className="product-description">{props.categoryName}</p>

</div>
}

export default ProductCard
