import {  useEffect, useState } from "react";
import SearchBar from "Components/Search/SearchBar/SearchBar";
import Api, { config } from "Helper/Axios";
import Spinner from "Components/Spinner/Spinner";
import { ProductInterface } from "Models/Models";
import Category from "Components/Search/SearchList/Category";
import NumberFormat from "react-number-format";
import { useHistory } from "react-router-dom";

export default function ItemDetail(props: any): JSX.Element {
  const [loading, setloading] = useState(false);
  const [product, setproduct] = useState<ProductInterface>();
  const history = useHistory();
  const text = new URLSearchParams(props.location.search).get("q") || "";

  useEffect(() => {
    setloading(true);
    Api.get("/api/items/" + id, config).then((res) => {
      setloading(false);
      setproduct(res.data);
    })
    .catch((err) => {
      localStorage.clear();
      history.push('/');
    });
  }, []);
  const id = props.match.params.id;
  return (
    <>
      <SearchBar text={text} />
      {loading && <Spinner />}
      
      {!loading && (
        <div className='container-fluid search'>
           <div className="row">
           <div className="col-1"></div>
           <div className="col-7">{product?.category && <Category category={product.category} />}</div>
           </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-7 thumbnaildetail">
              <img src={product?.thumbnail} height={680} alt={product?.title} />{" "}
            </div>
            <div className="col-3">
              <div className="row sold_quantity">
                {product?.condition} - {product?.sold_quantity} vendidos
              </div>
              <div className="row titledetail">
                <div className="col-10">{product?.title}</div>
              </div>
              <div className="row pricedetail">
                {product?.price && (
                  <div className="col-10">
                    <NumberFormat
                      value={product.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </div>
                )}
              </div>
              <div className="row divButton">
                <button className="btn btn-primary button">Comprar</button>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-7">
              <div className="row descriptiontitle">
                Descripción del producto
              </div>
              <div className="row description">{product?.detail}</div>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      )}
    </>
  );
}
