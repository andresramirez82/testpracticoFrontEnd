import { useContext } from "react";
import SearchBar from "Components/Search/SearchBar/SearchBar";
import { dataContext } from "Helper/Store";

export default function ItemDetail(props: any): JSX.Element {
  const { SearchText } = useContext(dataContext);
    const id = props.match.params.id;
  return <>
  <SearchBar text={SearchText} />
  detalle {id}</>;
}
