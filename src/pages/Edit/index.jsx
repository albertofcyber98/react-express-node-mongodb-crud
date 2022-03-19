import { useParams } from "react-router-dom";
import Input from "../../components/Input";
import { useState, useEffect } from "react";
import * as Axios from "axios";

const Edit = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [status, setStatus] = useState(false);
  // const history = useHistory();
  useEffect(() => {
    // console.log(`http://localhost:3000/product/${id}`);
    Axios.get(`http://localhost:3000/product/${id}`).then((response) => {
      setDetail(response.data);
    });
  }, []);
  const updateProduct = (id) => {
    // Axios.put(`http://localhost:3000/product/${id}`, {
    //   name: name.name,
    //   price: price.price,
    //   stock: stock.stock,
    //   status: status.status,
    // }).then((response) => {
    //   console.log(response)
    // })
  }
  return (
    <div className="main">
      <div className="card">
        <h2>Edit Produk</h2>
        <br />
        {detail.map((item,i)=>
            <div key={id}>
            <Input name="nama" type="text" label="Nama" value={item.name} onChange={(event) => {setName({ ...item, nama: event.target.value })}}
            />
            <Input type="number" placeholder="Harga Produk..." label="Harga"
                value={item.price}
                onChange={(event) => {
                  // setHarga({ ...item, harga: event.target.value });
              }} />
              <Input type="number" placeholder="Stock Produk..." label="Stock"
              value={item.stock}
              onChange={(event) => {
                // setJumlah({ ...item, jumlah: event.target.value });
              }} />
            <Input type="checkbox" label="Active"
              value={item.status}
              onChange={(event) => {
                // setKondisi({ ...item, kondisi: event.target.value });
              }}
            />
              <button onClick={() => updateProduct(item._id)} className="btn btn-primary">Simpan</button>
        </div>
        )}
      </div>
    </div>
  )
}

export default Edit;