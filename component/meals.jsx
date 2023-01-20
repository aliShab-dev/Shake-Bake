import {useGlobalContext} from '../context'
import {BsHandThumbsUp} from 'react-icons/bs'
import logo from '../logo.svg'


function Meals () {
    const {meals, loading, selectMeal, addFavorite} = useGlobalContext()

    if(loading){
    return<section className='section'>
            <h1>looking for dishies ...</h1>
            <img src={logo} alt="" />
        </section>
    }
    if(!meals){
    return <section className='empty'>
    <h1 style={{color:'red'}}>404</h1>
    <h3 >`object is not found :(`</h3>
    </section>
    }
    
    return(

        
        <section className='section-center'>

            {meals.map((SM) => {
                const {idMeal, strMeal:title, strMealThumb: image}=SM
                return <article key={idMeal} className='single-meal' >
                    <img src={image} className='img' onClick={() =>selectMeal(idMeal)} />
                    <footer>
                        <h3 onClick={() =>selectMeal(idMeal)}>{title}</h3>
                        <button className='like-btn' onClick={()=> {addFavorite(idMeal)}}><BsHandThumbsUp/></button>
                    </footer>

                </article>
                
            })}

        </section>
    )
}
export default Meals