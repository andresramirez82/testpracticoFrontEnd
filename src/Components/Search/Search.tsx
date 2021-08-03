import { useContext } from "react";
import SearchBar from "Components/Search/SearchBar/SearchBar";
import { dataContext } from "Helper/Store";

export default function Search(props: any): JSX.Element {
  const { SearchText } = useContext(dataContext);

  return (
    <>
      <SearchBar text={SearchText} />
    </>
  );
}
