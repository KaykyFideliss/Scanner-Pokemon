import React, { createContext, useState } from 'react';

type PokemonData = {
  id: number;
  name: string;
  types: string;
  image: string;
};

type PokemonContextType = {
  current: PokemonData | null;
  previous: PokemonData | null;
  setPokemon: (pokemon: PokemonData) => void;
};

export const PokemonContext = createContext<PokemonContextType>(
  {} as PokemonContextType
);

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState<PokemonData | null>(null);
  const [previous, setPrevious] = useState<PokemonData | null>(null);

  function setPokemon(pokemon: PokemonData) {
    setPrevious(current);
    setCurrent(pokemon);
  }

  return (
    <PokemonContext.Provider value={{ current, previous, setPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}
