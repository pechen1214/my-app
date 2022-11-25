const Modal = ({toptop}) => {

    return (
        <div className="modal" onClick={()=>toptop()}>
            <i className="fa-solid fa-circle-up"></i>
        </div>
    )
}
export default Modal