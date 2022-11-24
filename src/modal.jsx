const Modal = ({toptop}) => {

    return (
        <div className="modal" onClick={()=>toptop()}>
            <i class="fa-solid fa-circle-up"></i>
        </div>
    )
}
export default Modal