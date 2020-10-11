import React, { Fragment, useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import Title from './components/Title';
import Board from './components/Board';
import Announcer from './components/Announcer';
import ResetButton from './components/ResetButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
    const [markers, setMarkers] = useState(['', '', '', '', '', '', '', '', '']);
    // const [markers, setMarkers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [message, setMessage] = useState('Welcome To the tic tac toe!');

    const [xo, setXO] = useState('O');

    const [game, setGame] = useState(true);

    useEffect(() => {
        if (
            markers[0] == markers[1] && markers[0] == markers[2] && markers[0] != '' ||
            markers[0] == markers[3] && markers[0] == markers[6] && markers[0] != '' ||
            markers[0] == markers[4] && markers[0] == markers[8] && markers[0] != '' ||
            markers[1] == markers[4] && markers[1] == markers[7] && markers[1] != '' ||
            markers[2] == markers[4] && markers[2] == markers[6] && markers[2] != '' ||
            markers[2] == markers[5] && markers[2] == markers[8] && markers[2] != '' ||
            markers[3] == markers[4] && markers[3] == markers[5] && markers[3] != '' ||
            markers[6] == markers[7] && markers[6] == markers[8] && markers[6] != ''
        ) {
            setMessage(`${xo == 'O' ? 'X' : 'O'} is Winner!`)
            setGame(false);
        }

        if (!markers.includes('')) {
            setMessage(`Draw!`);
            setGame(false);
        }

    })


    const updateMarkers = (boardCellId) => {
        setMarkers(
            markers.map((mark, index) => {
                if (boardCellId == index && mark == '') {
                    return xo;
                }
                return mark;
            })
        )
        setXO(xo == 'O' ? 'X' : 'O');
        return;
    }

    const resetAll = () => {
        setMarkers(['', '', '', '', '', '', '', '', '']);
        setXO('O');
        setGame(true);
        setMessage(`Welcome To the tic tac toe!`);
    }

    return (
        <Fragment>
            <Title title={props.title} />
            <Announcer message={message} />
            <Board markers={markers} setMarkers={updateMarkers} gameOn={game} />
            <ResetButton text="Reset" reset={resetAll} />
        </Fragment>
    )
};
const RootElement = document.querySelector('#root');
ReactDOM.render(<App title="tic tac toe" />, RootElement);