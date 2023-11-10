import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"



export default function CreateCard({ setToAdd }) {
    //const navigate = useNavigate()
    const [cardInput, setCardInput] = React.useState({
        inputQues: "",
        inputAns: ""
    })
    function updatecardInput(event) {
        const { name, value } = event.target
        setCardInput((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const addCard = async (event) => {
        event.preventDefault()
        try {
            const { data } = await axios.post("/api/card/add", { question: cardInput.inputQues, answer: cardInput.inputAns })
            if (data) {
                console.log("New card added");
            }
        } catch (error) {
            console.log(error);
        }
        setCardInput({
            inputQues: "",
            inputAns: ""
        })

    }

    function handleClick() {
        setToAdd(false)
    }

    return (
        <div>
            <div className="container mt-5" id="create-card">
                <div className="card border-info mt-5 m-auto" style={{ maxWidth: "18rem" }}>
                    <form onSubmit={addCard}>
                        <div className="card-header text-info border-info text-center">
                            New Card
                        </div>
                        <div className="card-body">
                            <input
                                onChange={updatecardInput}
                                className="mt-2 text-center"
                                autoComplete="off"
                                type="text"
                                placeholder="Type your question here"
                                name="inputQues"
                                value={cardInput.inputQues}
                            />
                            <input
                                onChange={updatecardInput}
                                className="mt-3 text-center"
                                autoComplete="off"
                                type="text"
                                placeholder="Type your answer here"
                                name="inputAns"
                                value={cardInput.inputAns}
                            />
                        </div>
                        <div className="card-footer text-info border-info d-flex flex-row justify-content-around">

                            <button
                                // onClick={addCard}
                                type="submit"
                                className="btn">
                                <i
                                    className="fa-solid fa-check"
                                    style={{ color: "#2068bb" }}>
                                </i>
                            </button>

                            <button

                                type="reset"
                                className="btn">
                                <i className="fa-solid fa-arrows-rotate"
                                    style={{ color: "#2068bb" }}>
                                </i>
                            </button>

                            <button
                                onClick={handleClick}
                                type="submit"
                                className="btn">
                                <i
                                    className="fa-solid fa-xmark"
                                    style={{ color: "#2068bb" }}>
                                </i>
                            </button>

                        </div>
                    </form>
                </div>
            </div>

        </div >
    )
}