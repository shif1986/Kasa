import React, {useState} from "react";
import "../style/components/_collapse.scss";

function Collapse({title, description}) {
    // fonction usState
    const [isOpen, setIsOpen] = useState(false);
    // let buttonLabel
    const toggle = () => {
        // if (isOpen) {
        //   buttonLabel= "Close"

        // } else {

        //   buttonLabel="Open"
        // }
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div onClick={toggle}>
                <span className={"title-collapse"}>{title}</span>
                {/* il faut que description affiche */}
                {isOpen ? (
                    <i className="chevron-up" class="fa-solid fa-chevron-down"></i>
                ) : (
                    <i className="chevron-down" class="fa-solid fa-chevron-up"></i>
                )}
            </div>
            {isOpen &&
                <div className="description">
                    {Array.isArray(description)
                        ? <ul>{description.map(item => <li>{item}</li>)} </ul>
                        : <span>{description}</span>
                    }
                </div>
            }
        </>
    );
}

export default Collapse;
