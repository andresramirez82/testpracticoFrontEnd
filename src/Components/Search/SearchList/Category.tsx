import { useState } from "react";
import { Categoryprops } from "Models/Models";


export default function Cateegory(props: Categoryprops): JSX.Element {
    const [category, setcategory] = useState(props.category);

    const lastitem = (id: number, name: string) => {
        return id + 1 === category.length ? <strong> {name} </strong> : name;
      };

    return (
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
    )
}