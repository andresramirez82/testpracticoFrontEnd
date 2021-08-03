import { useContext, useEffect, useState } from "react";
import SearchBar from "Components/Search/SearchBar/SearchBar";
import { dataContext } from "Helper/Store";
import Api, { config } from "Helper/Axios";
import Spinner from "Components/Spinner/Spinner";
import { ProductInterface } from "Models/Models";
import Category from "Components/Search/SearchList/Category";
import NumberFormat from "react-number-format";

export default function ItemDetail(props: any): JSX.Element {
  const { SearchText } = useContext(dataContext);
  const [loading, setloading] = useState(false);
  const [product, setproduct] = useState<ProductInterface>();

  useEffect(() => {
    setloading(true);
    Api.get("/api/items/" + id, config).then((res) => {
      setloading(false);
      setproduct(res.data);
    });
  }, []);
  const id = props.match.params.id;
  return (
    <>
      <SearchBar text={SearchText} />
      {loading && <Spinner />}
      {product?.category && <Category category={product.category} />}
      {!loading && (
        <>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-7">
              <img src={product?.thumbnail} alt={product?.title} />{" "}
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
              <div className="row">
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
          </div>
        </>
      )}
    </>
  );
}
