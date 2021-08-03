/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import SearchBar from "Components/Search/SearchBar/SearchBar";
import Category from "Components/Search/SearchList/Category";
import Api, { config } from "Helper/Axios";
import Items from "Components/Search/SearchList/Items";
import Spinner from "Components/Spinner/Spinner";
import { CategoryInterface } from "Models/Models";
import { useHistory } from "react-router-dom";

export default function SearchList(props: any): JSX.Element {
  const text = props.match.params.text;

  const [searchdate, setsearchdate] = useState([]);
  const [category, setcategory] = useState<CategoryInterface[]>();
  const [loading, setloading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setloading(true);
    Api.get("/api/items?q=" + text, config)
      .then((res) => {
        setsearchdate(res.data[0].Items);
        setcategory(res.data[0].Category);
        setloading(false);
        // console.log(res.data[0].Items);
      })
      .catch((err) => {
        localStorage.clear();
        history.push("/");
      });
  }, [text]);

  return (
    <>
      <SearchBar text={text} />
      {loading && <Spinner />}
      {!loading && (
        <div className="search">
          <div className="container-fluid">
            {category && <Category category={category} />}
            {searchdate.map(
              ({ title, id, thumbnail, price, address, shipping }) => (
                <Items
                  key={id}
                  id={id}
                  title={title}
                  thumbnail={thumbnail}
                  price={price}
                  address={address}
                  shipping={shipping}
                  text={text}
                />
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}
