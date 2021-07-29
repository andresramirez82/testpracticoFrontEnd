import SearchBar from "Components/Search/SearchBar/SearchBar";
import SearchList from "Components/Search/SearchList/SearchList";

import "Styles/App.scss";

export default function Search(): JSX.Element {
  return (
    <>
      <SearchBar />
      <SearchList />
    </>
  );
}
