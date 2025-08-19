import React, { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
function Main() {
    const [listIngredients, SetListIngredients] = useState([
        "Tomato", "mangos", "Bananas", "Salad"
    ]);

    const ingredient = listIngredients.map(listIngredient =><li key={listIngredient}>{listIngredient}</li>);
    function AddIngredients(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const Item = formData.get("Items");
        SetListIngredients((prev) =>{
            return [...prev , Item];
        })
    }
    return (
        <>
            <main>
                <section className="section1">
                    <div className="ac-form">
                        <form action="" onSubmit={AddIngredients}>
                            <input type="text" name="Items" className="" placeholder="e.g..example" />
                            <button type="submit"><FaPlus /> Add ingredient</button>
                        </form>
                    </div>
                    <div className="showItems">
                            <ul>
                                <h1>Ingredients on Hand:</h1>
                                {ingredient}
                            </ul>
                        </div>
                </section>
            </main>
        </>
    )
}
export default Main;