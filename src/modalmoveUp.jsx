const ModalmoveUp = ({moveUp}) => {

    return (
        <div className="modal" onClick={()=>moveUp()}>
            <i className="fa-solid fa-circle-up"></i>
        </div>
    )
}
export default ModalmoveUp