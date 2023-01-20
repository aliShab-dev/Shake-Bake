import { useGlobalContext } from "../context"

function Favorties () {
    const {removeFavorite, favorites, selectMeal }= useGlobalContext ()
    
    return(
        <section className="favorties">
            <div className="favorties-content">
                <h2>Favorties:</h2>
                <div className="favorties-container">
                    {
                        favorites.map((item)=> {
                            const {idMeal, strMealThumb: image} = item
                            return <div key={idMeal} className='favorties-item'>
                                <img src={image} className='favorties-img' onClick={() => selectMeal(idMeal,true)} />
                                <button className="remove-btn" onClick={()=>removeFavorite(idMeal)}>Remove</button>
                            </div>
                        })    
                    }
                </div>
            </div>
        </section>
    )
}
export default Favorties