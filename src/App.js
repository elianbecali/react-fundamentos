import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';

function App() {
  const [posts, setPosts] = useState([
    { title: 'Title#01', subtitle: 'Sub#01', likes: 20 },
    { title: 'Title#02', subtitle: 'Sub#02', likes: 10 },
    { title: 'Title#03', subtitle: 'Sub#03', likes: 50 },
    { title: 'Title#04', subtitle: 'Sub#04', likes: 60 },  
  ]);

  function handleRefresh() {
    setPosts(prevState => [...prevState, {
      id: Math.random(),
      title: `Title#0${prevState.length + 1}`,
      subtitle: `Title#0${prevState.length + 1}`,
      likes: 50
    }])
  }

  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.title}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle
          }}
        />
      ))}
    </>
  );
}

export default App;