import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as Axios from 'axios';
import './index.scss';

const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(()=>{
    getProduct()
  }, []);
  const getProduct = () => {
  Axios.get('http://localhost:3000/').then((response) => {
    setProduct(response.data);
  })
  }
  const deleteProduct = (id) => {
    Axios.delete('http://localhost:3000/product/' + id).then(() => {
      getProduct()
    })

  }
  return(
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">Tambah Produk</Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..."/>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-right">Price</th>
            <th className="text-right">Stock</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, i) =>
          <tr key={i}>
            <td>{i+1}</td>
            <td>{item.name}</td>
            <td className="text-right">Rp. {item.price}</td>
            <td className="text-right">{item.stock}</td>
            <td className="text-center">
                <Link to={'detail/' + item._id} className="btn btn-sm btn-info">Detail</Link>
              <Link to={'edit/'+item._id} className="btn btn-sm btn-warning">Edit</Link>
                <button onClick={() => deleteProduct(item._id)} className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Home;