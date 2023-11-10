import React from "react"

export default function Cards(props) {
    const [showSol, setSolOption] = React.useState(false)
    function updateSolOption() {
        setSolOption((preState) => !preState)
    }

    return (
        <div className="card text-white bg-primary m-4 text-center submitted-card" style={{ maxWidth: "18rem" }}>

            <div className="card-header">FlashCard</div>

            <div className="card-body">

                <h5 className="card-title text-white">
                    {props.question}
                </h5>

                <i
                    onClick={updateSolOption}
                    className="fa-solid fa-eye"
                    style={{ color: "#fcfdfd" }}
                >
                </i>

                <h3 className="text-white">
                    {props.anwser}
                </h3>


            </div>

            <div className="card-footer">

                <i
                    onClick={() => { props.onDelete(props.id) }}
                    className="fa-solid fa-trash p-2"
                    style={{ color: "#ffffff" }}>

                </i>


            </div>
        </div>
    )
}
