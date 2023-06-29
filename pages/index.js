import axios from "axios";
import { ProductForm } from "../components/ProductForm";

function HomePage({products}) {
  return (
    <div>
      <ProductForm/>
      {products.map(product => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <h1>{product.description}</h1>
          <h1>{product.price}</h1>
        </div>
      ))}
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const {data: products} = await axios.get("http://localhost:3000/api/products");


  return{
    props: {
      products
    },
  };
};

export default HomePage;