import React , { useState } from 'react';
import emojis from './emoji.json';

//create a functional component for an emoji item
const EmojiItem = ({ emoji }) => {
  return (
    <div>
      <span>{emoji.char}</span>
      <span>{emoji.name}</span>
    </div>
  );
};

//implement the main app component with a search input and an emoji list
const App = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredEmojis = emojis.filter((emoji) =>
    emoji.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Emoji Search</h1>
      <input
      type="text"
      value={search}
      onChange={handleSearchChange}
      placeholder="Search emojis..."
      />
      <div>
        {filteredEmojis.slice(0, 30).map((emoji) =>(
          <EmojiItem key={emoji.name} emoji={emoji} />
        )
        )};
      </div>
    </div>
  );
};

export default App;