import { useState, useEffect } from "react";
import axios from "axios";

import styles from './styles/app.module.css';

import SearchForm from './SearchForm';
import YoutubePlayer from './YoutubePlayer';
import PreviewList from './PreviewList';
import CommentForm from "./CommentForm";

import UseIsMobile from "./hooks/UseIsMobile";

const YoutubeApp = () => {

    const [videos, setVideos] = useState(null);
    const [activeVideoId, setActiveVideoId] = useState(null);

    const searchVideo = (searchPhrase) => {
        if (searchPhrase) {
            axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAx5jdj43CwTromCgATMrWB81E9fnPVs6I&q=${searchPhrase}&type=video`)
            .then((response) => {
                const videos = response.data;
                // console.log(videos);
                const firstVideo = videos.items[0].id.videoId;
                setVideos(videos);
                setActiveVideoId(firstVideo);
                localStorage.setItem('YoutubeVideos', JSON.stringify(videos));
                localStorage.setItem('MainVideo', JSON.stringify(firstVideo));
            })
        } else {
            alert('Вы еще ничего не ввели');
        }
    }

    // сохранение при перезагрузке
    useEffect(() => {
        setVideos(JSON.parse(window.localStorage.getItem('YoutubeVideos')));
        setActiveVideoId(JSON.parse(window.localStorage.getItem('MainVideo')));
    }, []);

    // очистка страницы
    const clearPage = () => {
        setVideos(null);
        setActiveVideoId(null);
        localStorage.clear();
    }

    const selectVideo = (videoId) => {
        setActiveVideoId(videoId);
    }

    return (
        <>
        <SearchForm onSubmit={searchVideo} clearPage={clearPage} />
        {videos && (
            <div className={styles.mainBlock}>
                <YoutubePlayer videoId={activeVideoId} />
                <PreviewList videos={videos} onClick={selectVideo} />
                <CommentForm />
            </div>
        )}
        </>
    );
}
export default YoutubeApp;