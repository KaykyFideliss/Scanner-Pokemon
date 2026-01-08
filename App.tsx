import Navigator from './src/navigation/Navigator';
import { PokemonProvider } from './src/context/PokemonContext';


export default function App() {

  return (
    <PokemonProvider>
      <Navigator />;
    </PokemonProvider>
  );
}
