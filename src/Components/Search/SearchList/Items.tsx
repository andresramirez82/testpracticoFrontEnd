import NumberFormat from "react-number-format";

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
          <div className="row">
            <div className="col-6 price">
              <NumberFormat
                value={props.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              {props.shipping.free_shipping && (
                <img
                  className="shipping"
                  src="/ic_shipping.png"
                  alt="Free Shipping"
                />
              )}
            </div>
            <div className="col-2 left"></div>
          </div>
          <div className="row">
            <div className="col-6 title">
              <a href={"/items/id/" + props.id + '?q='+props.text } className="link">
                {props.title}
              </a>
            </div>
          </div>
        </div>
        <div className="col-2 city">
          <div className="row"> {props.address.state_name}</div>
        </div>
      </div>
    </>
  );
}
