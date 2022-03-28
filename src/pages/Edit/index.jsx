import { useParams } from "react-router-dom";
import Input from "../../components/Input";
import { useState, useEffect } from "react";
import * as Axios from "axios";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Edit = () => {
  const { id } = useParams();
  const [key, setKey] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [status, setStatus] = useState(false);
  const history = useHistory();
  useEffect(() => {
    // console.log(`http://localhost:3000/product/${id}`);
    Axios.get(`http://localhost:3000/product/${id}`).then((response) => {
      setKey(response.data[0]._id);
      setName(response.data[0].name);
      setPrice(response.data[0].price);
      setStock(response.data[0].stock);
      setStatus(response.data[0].status);
    });
  }, []);
  const updateProduct = (id) => {
    Axios.put(`http://localhost:3000/product/${id}`, {
      name: name,
      price: price,
      stock: stock,
      status: status,
    }).then((response) => {
      history.push('/')
    })
  }
  return (
    <div className="main">
      <div className="card">
        <h2>Edit Produk</h2>
        <br />
            <Input name="nama" type="text" label="Nama" 
                value={name}
                onChange={(event) => {
                  setName(event.target.value)
                }}
            />
            <Input type="number" placeholder="Harga Produk..." label="Harga"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value)
              }} />
              <Input type="number" placeholder="Stock Produk..." label="Stock"
              value={stock}
              onChange={(event) => {
                setStock(event.target.value)
              }} />
            <Input type="checkbox" label="Active"
              value={status}
              onChange={(event) => {
                setStatus(event.target.checked);
              }}
            />
              <button onClick={() => updateProduct(key)} className="btn btn-primary">Simpan</button>
        </div>
    </div>
  )
}

export default Edit;