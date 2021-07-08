import logo from './logo.svg';
import './App.css';

import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs tabs={
        [
          {
            item:'Tab 1',
            content: 'Some content would go here'
          },
          {
            item:'Tab 2',
            content:'Alternative content goes here'
          },
          {
            item:'Tab 3',
            content:'The least important content probably goes here'
          }
        ]
      }/>
    </div>
  );
}

export default App;
