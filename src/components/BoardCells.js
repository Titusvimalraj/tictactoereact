import React from 'react';

const BoardCells = ({ index, setMarkers, marker, gameOn }) => {
    const classes = ["vert", "hori"];
    let style = null;
    if (index == 1 || index == 7) {
        style = classes[0];
    }
    if (index == 4) {
        style = classes.join(' ');
    }
    if (index == 3 || index == 5) {
        style = classes[1];
    }
    const updateMaker = () => {
        return setMarkers(index);
    }
    return (
        <td className={style ? gameOn ? style.concat(' cursor-pointer') : style : gameOn ? 'cursor-pointer' : ''} onClick={gameOn ? updateMaker : null}>{marker}</td>
    );
}

export default BoardCells;
