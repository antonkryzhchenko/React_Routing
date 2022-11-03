import React from "react";
import axios from "axios";

import WeatherToday from './components/WeatherToday';
import WeatherOthers from './components/WeatherOthers';

const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247';

class WeatherApp extends React.Component {
    state = {
        weather: null,
    };

    componentDidMount() {
        axios.get(`${url}`)
        .then((response) => {
            const weather = response.data;
            console.log(weather);
            this.setState({weather});
        })

        document.addEventListener('mousemove', this.mouseListener);
    }

    mouseListener = (e) => {
        let x = e.pageX;
        let y = e.pageY;
        console.log(x, y);
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.mouseListener);   // не срабатывает т.к. все компоненты отображаются в app
        console.log('компонент размонтирован + произошла отписка');
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.userId !== prevProps.userId) {
            this.fetchData(this.props.userId);
        }
    }

    render() {
        const { weather } = this.state;

        if(!weather) {
            return <div>ЗАГРУЗКА</div>
        }

        return (
            <>
            <WeatherToday weather={weather}/>
            <WeatherOthers weather={weather}/>
            </>
        )
    }
}
export default WeatherApp;