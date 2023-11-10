import React, { useEffect, useState } from "react"
import Cards from "./Cards"
import axios from "axios"

export default function CardArr() {
    const [cardArr, setCardArr] = useState([])
    const showCard = async () => {
        try {
            const { data } = await axios.get("api/card")
            if (data) {
                setCardArr(data)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        showCard();
    }, [])


    const deleteNote = async (id) => {
        try {
            const { data } = await axios.delete(`api/card/delete/${id}`)
            if (data) {
                console.log("One card deleted");
                setCardArr((preCard) => {
                    return preCard.filter((item) => {
                        return item._id !== id;
                    });
                });
            }
        } catch (error) {
            console.log(error);
        }

    }

    // const updateCardArr = () => {

    // }

    return (
        <>
            <div className="container mt-5 d-flex flex-wrap row-cols-3 justify-content-around">
                {cardArr && cardArr.map((item, index) => {
                    return (
                        <Cards
                            anwser={item.anwser}
                            question={item.question}
                            onDelete={deleteNote}
                            key={index}
                            id={item._id}
                        />
                    )
                })}
            </div>
        </>
    )
} 