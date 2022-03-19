import { Link , useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import './index.scss';
import * as Axios from 'axios';

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
      Axios.get('http://localhost:3000/product/' + id).then((response) => {
        setDetail(response.data);
        // console.log(response.data)
      })
  }, []);
  // console.log(id);
  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">Kembali</Link>

      <table className="table">
        {detail.map((item, i) =>
        <tbody key={i}>
          <tr>
            <td>ID</td>
            <td>: {item._id}</td>
          </tr>
          <tr>
            <td>Name</td>
              <td>: {item.name}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>: {item.price}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>: {item.stock}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>: {(item.status==true)?'Ada':'Tidak Ada'}</td>
          </tr>
          </tbody>
        )}
      </table>
    </div>
  )
}

export default Detail;