import { memo } from "react";   // делает мемоизацию - запоминает последнее состояние (не рендерит тайтл несколько раз)

const Title = () => {
    console.log('Title render');
    return (
        <h1>Список кошек</h1>
    )
}
export default memo(Title);