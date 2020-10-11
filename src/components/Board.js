import React from 'react';
import BoardRows from './BoardRows';

const Board = ({ markers, setMarkers, gameOn }) => {

    return (
        <table>
            <tbody>
                {
                    markers.map((marker, index) => {
                        let rows = [...markers];
                        if ((index + 1) % 3 == 0) {
                            return (
                                <BoardRows gameOn={gameOn} setMarkers={setMarkers} key={`r${index - 2}`} rowIndex={[index - 2, index - 1, index]} rows={rows.slice(index - 2, index + 1)} />
                            )
                        }
                    })
                }
            </tbody>
        </table>
    );
}

export default Board;

