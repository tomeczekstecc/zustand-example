import {useSettingsStore, usePeopleStore} from './store';
import People from './components/People';
import Input from './components/Input';
import { useEffect } from 'react';

function App() {
  const toggleDarkMode = useSettingsStore((state) => state.toggleDarkMode);
  const dark = useSettingsStore((state) => state.dark);

  const people = usePeopleStore((state) => state.people);

  useEffect(() => {
    if (dark) {
      document.querySelector('body').classList.add('dark');
    } else {
      document.querySelector('body').classList.remove('dark');
    }
  }, [dark]);
  return (
    <>
      <button onClick={toggleDarkMode}>Toggle Mode</button>
      <p>people</p>
      <Input />
      <People />
    </>
  );
}

export default App;
