import React from 'react';
import BoardCells from './BoardCells';

const BoardRows = ({ rows, rowIndex, setMarkers, gameOn }) => {
    console.log(rows);
    return (
        <tr>
            {
                rows.map((row, index) => {
                    return (
                        <BoardCells gameOn={gameOn} setMarkers={setMarkers} key={index} index={rowIndex[index]} marker={row} />
                    )
                })
            }
        </tr>
    );
}

export default BoardRows;
