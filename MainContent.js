import React from "react"
import ProductCard from "ProductCard"

function MainContent(){
 return(
 <div>
  <h1>Some Title</h1>
  
  <h2>Some subtitle</h2>
  
  <p>Latine phaedrum definiebas mea an, ius tota dolorem et, mel et inani munere. Utinam labores admodum an mei. Ad scaevola 
  reprimique constituam usu, vel ad erant suscipit perpetua, ea duis facete latine sea. Vim ei iuvaret labores eligendi, ne pro 
  quodsi invenire, mentitum assentior contentiones pri cu.</p>
  
  <ProductCard 
    imgURL="https://i.postimg.cc/PxLRfdkf/chair-contemporary-design-1420902.jpg"
    imgDescription="Chairs"
    linkURL="chairs.htm" 
    categoryName="Stylish Chairs" 
    cardID="chair-card" />
  
  <ProductCard 
    imgURL="https://i.postimg.cc/QNTyRNb0/business-chairs-contemporary-416320.jpg" 
    imgDescription="Tables"
    linkURL="tables.htm" 
    categoryName="tables.htm" 
    cardID="table-card" />
  
  <ProductCard 
    imgURL="https://i.postimg.cc/nc7fYYgV/bench-bright-colors-937486.jpg" 
    imgDescription="Benches"
    linkURL="bench.htm" 
    categoryName="benches.htm" 
    cardID="bench-card" />
  
  <h2>Some subtitle</h2>
  
  <p>Est rebum novum qualisque ad, everti eligendi argumentum cum in. Et duo tale omnis mentitum, ne eam euismod postulant torquatos.
  Ad ius nullam audiam nominavi, alienum constituam ne vix. Eu sit oratio vocibus vivendum, vim ex quodsi vituperatoribus,
  tamquam blandit necessitatibus eu duo. Et pri ridens labore, in per stet nullam fuisset. Similique neglegentur duo cu.</p>
  </div>
 ) 
}

export default MainContent

/*https://postimg.cc/gallery/1cv9cqkvu/*/
