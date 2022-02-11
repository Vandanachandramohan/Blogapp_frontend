import React from 'react';
import './Home.css';


function Home() {
  return (
  <div >
    <div>
    <img className='background' src="https://images.unsplash.com/photo-1548567117-02328f050eaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="cover" />
    </div>
      <div className='container'>
      <h1 className='title'>MY BLOG</h1>
      <p className='para'>Content in the HomePgae</p>
      <p className='content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
     
  </div>

  );
}

export default Home;
