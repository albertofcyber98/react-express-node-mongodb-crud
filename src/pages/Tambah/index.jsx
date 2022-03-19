
import { useState } from 'react';
import Input from '../../components/Input';
import './index.scss';
import * as Axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Tambah = () => {
  const [name, setName]= useState("");
  const [price, setPrice]= useState(0);
  const [stock, setStock]= useState(0);
  const [status, setStatus] = useState(false);
  const history = useHistory();
  const addProduct = () => {
    Axios.post("http://localhost:3000/product",{
      name: name,
      price: price,
      stock: stock,
      status: status,
    }).then(() => {
      history.push('/')
    });
  };
  // const addProduct = () => {
  //   console.log(status);
  //   Axios.post("http://localhost:3000/product",{
  //     name: name,
  //     price: price,
  //     stock: stock,
  //     status: status,
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // };
  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
          <Input type="text"
          onChange={(event)=>{
            setName(event.target.value);
            // console.log(name)
          }} placeholder="Nama Produk..." label="Nama"/>
          <Input type="number"
          onChange={(event)=>{
            setPrice(event.target.value);
          }}
          placeholder="Harga Produk..." label="Harga"/>
          <Input type="number"
          onChange={(event)=>{
            setStock(event.target.value);
          }}
          placeholder="Stock Produk..." label="Stock"/>
          <Input type="checkbox" label="Active"
          onChange={(event) => {
            setStatus(event.target.checked);
          }}
          />
          <button onClick={ () => addProduct()} className="btn btn-primary">Simpan</button>
      </div>
    </div>
  )
}

export default Tambah;