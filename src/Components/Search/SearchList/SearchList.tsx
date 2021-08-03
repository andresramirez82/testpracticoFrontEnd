import { useState, useEffect, useContext } from "react";
import SearchBar from "Components/Search/SearchBar/SearchBar";
import Api, { config } from "Helper/Axios";
import Items from "Components/Search/SearchList/Items";
import Spinner from "Components/Spinner/Spinner";

// import { dataContext } from "Helper/Store";

export default function SearchList(props: any): JSX.Element {
  const text = props.match.params.text;
  //const { data, setdata } = useContext(dataContext);
  const [searchdate, setsearchdate] = useState([]);
  const [category, setcategory] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    Api.get("/api/items?q=" + text, config).then((res) => {
      setsearchdate(res.data[0].Items);
      setcategory(res.data[0].Category);
      setloading(false);
      console.log(res.data[0].Items);
    });
  }, [text]);

  const lastitem = (id: number, name: string) => {
    return id + 1 === category.length ? <strong> {name} </strong> : name;
  };
  return (
    <>
      <SearchBar text={text} />
      {loading && <Spinner />}
      {!loading && (
        <div className="search">
          <div className="container-fluid">
            <div className="row">
              <nav className="separator" aria-label="breadcrumb">
                <ol className="breadcrumb">
                  {category.map(({ id, name }, index) => (
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                      key={id}
                    >
                      {lastitem(index, name)}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

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
                />
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}
