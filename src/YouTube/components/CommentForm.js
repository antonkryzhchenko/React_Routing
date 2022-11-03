import { useState } from 'react';
import Comment from './Comment';

import styles from './styles/commentForm.module.css';

const CommentForm = () => {
    const [comment, setComment] = useState([]);
    const [value, setValue] = useState("");

    const comments = comment.map((element) => {
        return <Comment element={element} />
        });

    return (
    <>
    <form className={styles.commentForm}>
        <input
        className={styles.commentFormInput}
        type="text"
        name="comment"
        placeholder="Оставьте свой комментарий"
        value={value}
        autoComplete="off"
        onChange={(e) => setValue(e.target.value)}
        />
        <button
        className={styles.commentFormBtn}
        onClick={() => setComment([value])}
        >Оставить комментарий</button>
    </form>
    <h2>Комментарии:</h2>
    <ul>{comments}</ul>
    </>
    )
}
export default CommentForm;