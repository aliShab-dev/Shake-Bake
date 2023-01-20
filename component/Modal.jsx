import { useGlobalContext } from '../context'


function Modal () {
    
    const {selectedMeal, setShowModal}= useGlobalContext()
    const {strMealThumb:image, strMeal:title,strInstructions:text,
    strSource:source} = selectedMeal

        
    const closeModal = () => {
        setShowModal(false)
    }

    return(
        <aside className='modal-overlay' >
            <div className="modal-container">
                <img src={image} className='img-modal img' />
                <div className='modal-content'>
                <h4>{title}</h4>
                <p>Cooking Instruction:</p>
                <p>{text}</p>
                 <a href={source} target='_blank'>Orginal Source</a>
                <button className='btn hiphster close-btn' onClick={()=>closeModal()}>Close</button>
                 
                </div>
            </div>
        </aside>
    )
}
export default Modal