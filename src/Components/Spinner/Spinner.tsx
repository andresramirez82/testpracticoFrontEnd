/* eslint-disable react/style-prop-object */
export default function Spinner(): JSX.Element {
  return (
    <div className="abs-center">
      <div className="row justify-content-center align-items-center minh-100">
        <div className="col-lg-12">
          <div>
            <div className="spinner-border" role="status">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
