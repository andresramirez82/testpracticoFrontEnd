export default function Items(props: any): JSX.Element {
  return (
    <>
      <div className="row white">
        <div className="col-2">
          <img
            width={160}
            height={160}
            src={props.thumbnail}
            alt={props.title}
            className="img-fluid img-thumbnail"
          />
        </div>
        <div className="col-6">
          <div className="row price">$ {props.price}</div>
          <div className="row title">{props.title}</div>
        </div>
        <div className="col-2">
          <div className="row"> {props.address.state_name}</div>
        </div>
      </div>
    </>
  );
}
