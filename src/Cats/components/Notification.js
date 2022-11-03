const Notification = (props) => {
    const {name, kind, email} = props;
    return(
        <>
        <p>Уважаемый, {name}!</p>
        <p>Как только кошки породы {kind} появятся</p>
        <p>мы сразу вам сообщим по адресу {email}</p>
        </>
    )
}
export default Notification;