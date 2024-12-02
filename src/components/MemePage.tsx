import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MemeContainer from './MemeContainer';
import MemeImage from './MemeImage';
import Author from './Author';
import LikeButton from './LikeButton';
import GlobalContainer from './GlobalContainer';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../themes/theme';
import Meme from "./types.tsx";
import SettingsMenu from "./SettingsMenu.tsx";
import SettingsIcon from "./SettingsIcon.tsx";
import SettingsLabel from "./SettingsLabel.tsx";
import MemeWrapper from './MemeWrapper.tsx';
import AuthorLink from "./AuthorLink";

const phrases = [
    "Гений, приславший это",
    "О боже, это же",
    "Создатель этого шедевра",
    "Настоящий мастер",
    "Кто-то невероятный",
    "Человек, который подарил нам это",
    "Автор"
];

const MemePage: React.FC = () => {
    const randomPhrasesMap = useRef<Map<number, string>>(new Map());
    const { chatPrefix } = useParams<{ chatPrefix: string }>();
    const [memes, setMemes] = useState<Meme[]>([]);
    const [likes, setLikes] = useState<{ [key: number]: number }>({});
    const [theme, setTheme] = useState(darkTheme);
    const [limit, setLimit] = useState(5);
    const [displayCount, setDisplayCount] = useState(1);
    const [intervalTime, setIntervalTime] = useState(5000);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [settingsVisible, setSettingsVisible] = useState(false);

    const fetchMemes = () => {
        axios
            .get(`https://mem.biluta.ru/api/memes/${chatPrefix}/last?limit=${limit}`)
            .then((response) => {
                setMemes((prevMemes) => {
                    const newMemes = response.data.filter(
                        (newMeme: Meme) => !prevMemes.some((prevMeme) => prevMeme.filePath === newMeme.filePath)
                    );
                    return [...prevMemes, ...newMemes];
                });
            })
            .catch((error) => {
                console.error('Failed to fetch memes:', error);
            });
    };

    useEffect(() => {
        fetchMemes();
    }, [chatPrefix, limit]);

    useEffect(() => {
        const fetchInterval = setInterval(fetchMemes, 10000);
        return () => clearInterval(fetchInterval);
    }, [chatPrefix, limit]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + displayCount) % memes.length);
        }, intervalTime);
        return () => clearInterval(interval);
    }, [memes, displayCount, intervalTime]);

    const handleLike = (index: number) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [index]: (prevLikes[index] || 0) + 1,
        }));
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    const toggleSettings = () => {
        setSettingsVisible((prevVisible) => !prevVisible);
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalContainer>
                <div style={{margin: '30px', textAlign: 'center'}}>
                    <h1 style={{fontFamily: 'Neue Machina', fontSize: '3rem', fontStyle: 'italic', fontWeight: '800', margin: 0}}>Опа, это что,
                        сотрудник <span style={{color: theme.chatPrefixColor}}>{chatPrefix}</span> ?</h1>
                    <h1 style={{fontFamily: 'Caveat, cursive', fontSize: '1.5rem', fontWeight: 400, margin: 0}}>Мы ждем твой мемес!</h1>
                </div>
                <SettingsIcon onClick={toggleSettings}/>
                <SettingsMenu isVisible={settingsVisible}>
                    <button onClick={toggleTheme}>Toggle Theme</button>
                    <SettingsLabel>
                        Limit (2-10):
                        <input
                            type="number"
                            value={limit}
                            onChange={(e) => setLimit(Math.max(2, Math.min(10, parseInt(e.target.value) || 5)))}
                        />
                    </SettingsLabel>
                    <SettingsLabel>
                        Display Count (1-3):
                        <input
                            type="number"
                            value={displayCount}
                            onChange={(e) => setDisplayCount(Math.max(1, Math.min(3, parseInt(e.target.value) || 1)))}
                        />
                    </SettingsLabel>
                    <SettingsLabel>
                        Interval Time (1-60 seconds):
                        <input
                            type="number"
                            value={intervalTime / 1000}
                            onChange={(e) =>
                                setIntervalTime(
                                    Math.max(1, Math.min(60, parseInt(e.target.value) || 5)) * 1000
                                )
                            }
                        />
                    </SettingsLabel>
                </SettingsMenu>
                <MemeWrapper>
                    {memes.slice(currentIndex, currentIndex + displayCount).map((meme, index) => {
                        const memeKey = currentIndex + index;
                        if (!randomPhrasesMap.current.has(memeKey)) {
                            randomPhrasesMap.current.set(memeKey, phrases[Math.floor(Math.random() * phrases.length)]);
                        }
                        return (
                            <MemeContainer key={index}>
                                {meme.fileType === 'IMAGE' && (
                                    <MemeImage
                                        src={`https://minio-back.biluta.ru/${meme.filePath}`}
                                        alt={meme.username}
                                    />
                                )}
                                <Author>
                                    {randomPhrasesMap.current.get(memeKey)}: <AuthorLink href={meme.userLink}
                                                                                         target="_blank"
                                                                                         rel="noopener noreferrer">{meme.username}</AuthorLink>
                                </Author>
                                <LikeButton onClick={() => handleLike(index)}>
                                    Like ({likes[index] || 0})
                                </LikeButton>
                            </MemeContainer>
                        );
                    })}
                </MemeWrapper>
                <footer style={{marginTop: '20px', fontFamily: 'Neue Machina', fontSize: '1rem', color: theme.color}}>
                    Разработал Антон
                </footer>
            </GlobalContainer>
        </ThemeProvider>
    );
};

export default MemePage;
