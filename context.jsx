import React, {useContext, useEffect, useState} from 'react'
import text from './component/Search'

const AppContext = React.createContext()

const allMeals = `https:/www.themealdb.com/api/json/v1/1/search.php?s=`
const randomMeals = `https:/www.themealdb.com/api/json/v1/1/random.php`

const AppProvider= ({children}) => {


const getLocalStorage = () => {
    let favoriteMeal = localStorage.getItem('favorit')
    if(favoriteMeal){
        favoriteMeal = JSON.parse(localStorage.getItem('favorit')) 
    }else{
        favoriteMeal= []
    }
    return favoriteMeal
}


const [meals, setMeals] = useState([])
const [loading, setLoading] = useState(false)
const [search, setSearch] = useState('')
const [showModal, setShowModal] = useState(false)
const [selectedMeal, setSelectedMEal] = useState(null)
const [favorites, setFavorite] = useState(getLocalStorage())


const addFavorite = (idMeal) => {
    const meal = meals.find((meal)=>meal.idMeal === idMeal)
    const alreadyFavorite = favorites.find((meal)=>meal.idMeal === idMeal)
    if(alreadyFavorite){
        return
    }
    const updateFavorite = [...favorites, meal]
    setFavorite(updateFavorite)
    localStorage.setItem('favorit', JSON.stringify(updateFavorite))
}

const removeFavorite = (idMeal) => {
    const updateFavorite = favorites.filter((meal) => meal.idMeal !== idMeal)
    setFavorite(updateFavorite)
    localStorage.setItem('favorit', JSON.stringify(updateFavorite))
}

const fetchMeals= async (url)=>{
    setLoading(true)
    await  fetch(url) 
     .then((response=> response.json()))
     .then(data =>  meals = setMeals(data.meals))
     .catch(er=> console.log(er))
      setLoading(false)
    }
    const supriseMe =() => {
        fetchMeals(randomMeals)
    }
    
    const mainPage = () => {
        fetchMeals(allMeals)
    }
    
    
    const selectMeal = (idMeal, favoriteMeal) => {
        let meal
        if(favoriteMeal){
            meal = favorites.find((meal)=>meal.idMeal === idMeal)
        }else{
            meal = meals.find((meal)=>meal.idMeal === idMeal)
        }
        setSelectedMEal(meal)
        setShowModal(true)
    }
    
    

    useEffect (() =>{
        fetchMeals(allMeals)
    },[])

    useEffect(()=> {
        if(!search){return}
        fetchMeals(`${allMeals}${search}`)
    },[search])


return(
    <AppContext.Provider value={{meals,selectedMeal, selectMeal, loading,
        showModal, setShowModal, mainPage, supriseMe, setSearch, addFavorite,
        removeFavorite, favorites}}>
        {children}
    </AppContext.Provider>
)
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}