import React, {useState, useEffect, useCallback, useMemo, lazy, Suspense} from "react";
import useIsMobile from "./components/hooks/UseIsMobile";
import axios from "axios";
import styles from "./catApp.module.css";

import CatList from "./components/CatList";
import CatDetails from "./components/CatDetails";
import FormForCat from "./components/FormForCat";
import Title from "./components/Title";
import Search from "./components/Search";

import Example1 from './components/HOCexample/Example1';
import Example2 from './components/HOCexample/Example2';
import Example3 from './components/HOCexample/Example3';
import ClassRefExample from "./components/REFexample/ClassRefExample";
import FuncRefExample from "./components/REFexample/FuncRefExample";

const LazyComponent = lazy(() => import('./components/LazyComponent'));   // синтаксис для импорта ленивозагружаемого компонента

const url = 'https://serene-mesa-35124.herokuapp.com/files';

const sum = (n) => {
  console.log('work sum');
  return n + 1;
}

// class CatApp extends React.Component {

const CatApp = () => {
  // state = {
  //   cats: null,
  //   selectedCat: null,   // закомментировали т.к. переписываем на хуки
  //   catDetail: null,
  // };

  const [cats, setCats] = useState(null);
  const [selectedCat, setSelectedCat] = useState(null);
  const [catDetail, setCatDetail] = useState(null);

  const [counter, setCounter] = useState(0);

  const [param, setParam] = useState(1);

  const [isOpenComponent, setIsOpenComponent] = useState(false);

  const [inputValue, setInputValue] = useState();

  let sumResult = useMemo(sum, [param]);   // useMemo запоминает результат!!!(запоминает результат работы функции) выполнения функции

  // componentDidMount() {
  //   axios.get(`${url}/cats/list.json`)
  //   .then((response) => {
  //     const cats = response.data.data;
  //     this.setState({cats});
  //   })
  // }

  // componentDidMount на хуках
  useEffect(() => {
    axios.get(`${url}/cats/list.json`)
    .then((response) => {
      const cats = response.data.data;
      // this.setState({cats});
    
      setCats(cats);
    });
  }, []);

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState);
  //   if(this.state.selectedCat !== prevState.selectedCat) {
  //     this.fetchData(this.state.selectedCat);
  //   }
  // }

  // componentDidUpdate на хуках
  useEffect(() => {
    // console.log(selectedCat)
    if (selectedCat !== null) {
      fetchData(selectedCat);
    }
  }, [selectedCat]);

  // работает как componentWillUnmount (пример: отписка от события)
  useEffect(() => {
    return () => {
      console.log('Отписка');
    }
  }, []);

  const isMobile = useIsMobile();
  useEffect(() => {
    isMobile ? console.log('Mobile version') : console.log('Desktop version');
  }, [isMobile]);

  const fetchData = (path) => {
    console.log('fetch');

    axios.get(`${url}${path}`)
    .then((response) => {
      const catDetail = response.data;
      // this.setState({catDetail});

      setCatDetail(catDetail);
    });
  }

  // useCallback - используется для оптимизации (запоминает экземпляр!!! функции) запоминает, что это одна и та же функция
  const toBuy = useCallback((id) => {
    const selectedCat = cats.filter((cat) => {
      if (cat.id === id) {
        return cat;
      }
      return null;
    });
    console.log(selectedCat);
    // this.setState({ selectedCat: selectedCat[0] });
    // this.setState({selectedCat: selectedCat[0].more});

    setSelectedCat(selectedCat[0].more);
  }, [cats]);

  const toDeleteCat = () => {
    
  }

  // render() {
  //   const { cats, catDetail } = this.state;

    const filterCats = () => {
      if (cats) {
        let copyCats = [...cats];
        if (inputValue) {
          let filterCats = copyCats.filter((cat) => {
            return cat.name.toLowerCase().includes(inputValue.toLowerCase().split(' ').join(''));
          })
          return filterCats;
        }
      }
    }

    const filteredCats = filterCats();

    if(!cats) {
      return <h1>Loading</h1>
    }
    return (
      <div className={styles.app}>
        <Search onChange={(e) => setInputValue(e.target.value)} />
        <div className={styles.mainBlock}>
          <Title />
          <CatList cats={filteredCats ? filteredCats : cats} toBuy={toBuy} toDeleteCat={toDeleteCat} />
        </div>
        <br />
        {/* условный рендеринг */}
        {catDetail && 
          <CatDetails catDetail={catDetail} url={url}/>}

          <br />
          <h2>{`На меня нажали ${counter} раз`}</h2>
          <button onClick={() => setCounter(counter + 1)}>Click</button>
          <br />
          <button onClick={() => setParam(param + 1)}>Change param</button>
          <h2>{!sumResult ? param : sumResult}</h2>
          <br />
            <div>
              {/* fallback - используется для suspense для отображения пользователю элемента загрузки (занять пользователя)
              suspense - используется для загрузки дополнительного компонента */}
              {isOpenComponent && 
              (<Suspense fallback={<h1>Loading...</h1>}>
                <LazyComponent />
              </Suspense>)}
            <button onClick={() => setIsOpenComponent(true)}>Open Component</button>
            </div>

        <br />
        <FormForCat />
        <br />
        <Example1 />
        <br />
        <Example2 />
        <br />
        <Example3 />
        <br />
        <ClassRefExample />
        <br />
        <FuncRefExample />
      </div>
    );
  }
// }
export default CatApp;