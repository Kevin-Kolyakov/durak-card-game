import React from 'react';
import { Client } from 'boardgame.io/react';
import { Durak } from './GameLogic';

const DurakClient = Client({ game: Durak });

export default function GameUI() {
  return <DurakClient />;
}