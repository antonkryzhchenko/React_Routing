import React from "react";
import styles from "./styles/formCat.module.css";
import Notification from "./Notification";

class FormForCat extends React.Component {
    state = {
        // kind: '',
        // name: '',
        // email: '',
        showNotification: false
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }
    submitForm = (e) => {
        e.preventDefault();
        e.target.reset();
        this.setState({showNotification: true});
    }
    render() {
        const {kind, name, email, showNotification} = this.state;
        return(
            <>
            <p>Если вы не нашли нужного кота - оставьте заявку</p>
            <form className={styles.form} onSubmit={this.submitForm}>
                <input
                type='text' 
                name='kind'
                placeholder='Название пароды'
                onChange={this.handleChange}
                />
                <input
                type='text'
                name='name'
                placeholder='Ваше имя'
                onChange={this.handleChange}
                />
                <input
                type='email'
                name='email'
                placeholder='Ваш email'
                onChange={this.handleChange}
                />
                <button>Отправить заявку</button>
            </form>
            <br />
            {showNotification && (
                <Notification kind={kind} name={name} email={email}/>
            )}
            </>
        )
    }
}
export default FormForCat;