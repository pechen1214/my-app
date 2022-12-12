const ModalmoveUp = () => {
    const moveUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className="modal" onClick={() => moveUp()}>
            <i className="fa-solid fa-circle-up"></i>
        </div>
    )
}
export default ModalmoveUp