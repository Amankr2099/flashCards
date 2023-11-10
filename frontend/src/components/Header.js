import React from "react"
import CreateCard from "./CreateCard"

export default function Header({ setToAdd }) {
    //const [createOption, setOption] = React.useState(false)
    function updateOption() {
        setToAdd(true)
    }
    // function hideOption() {
    //     setOption(false)
    // }
    return (
        <div>
            <nav className="navbar navbar-light bg-light sticky-top">
                <a className="navbar-brand" href="#">
                    <i
                        className="fa-solid fa-file-lines"
                        style={{ color: "#0905fd", fontSize: "30px", marginInline: "15px" }}>
                    </i>
                    Welcome to your custome flash cards
                </a>
                <div className="d-inline-flex">
                    <a href="#create-card" onClick={updateOption}>
                        <i className="fa-solid fa-circle-plus"
                            style={{ fontSize: "30px", marginInline: "12px" }}>
                        </i>
                    </a>
                    <h5>Create New Card</h5>
                </div>
            </nav>
            {/* {createOption && <CreateCard onRemove={hideOption} />} */}
        </div>
    )
}