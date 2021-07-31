
export default function SearchList(props: any): JSX.Element {
 const text = props.match.params.text;
 //console.log(props);
  return (
    <div className="search">
      <label>Search list    {text}  </label>
    </div>
  );
}
