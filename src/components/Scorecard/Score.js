import React, { useState, useEffect } from "react";
import "./Score.css";
import axios from 'axios';


export default function Score({ scorecard, score, roundId, hole }) {
  const [par, setPar] = useState();

  const parScore = {
    par: scorecard.par,
    birdie: scorecard.par - 1,
    albatross: scorecard.par - 3,
    bogey: scorecard.par + 1,
    eagle: scorecard.par - 2,
    doubleBogey: scorecard.par + 2,
    tripleBogey: scorecard.par + 3,
  };



 
  const setStyling = () => {
    <>
      {score === parScore.par
        ? setPar("par")
        : score === parScore.birdie
        ? setPar("birdie")
        : score === parScore.bogey
        ? setPar("bogey")
        : score === parScore.eagle
        ? setPar("eagle")
        : score === parScore.doubleBogey
        ? setPar("double-bogey")
        : score === parScore.tripleBogey
        ? setPar("triple-bogey")
        : score === parScore.albatross
        ? setPar("albatross")
        : ""}
    </>;
  };

  useEffect(() => {
    setStyling();
  }, [score]);

  return (
    <div className={par}>{score}</div>
  )
}
