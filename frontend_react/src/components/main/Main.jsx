import React from 'react';
import Filter from './filter/Filter';
import MyProjects from './my-projects/MyProjects';
import Skills from './skills/Skills';

const Main = () => {
  return (
    <main className="main">
      <section className="filters container">
        <Filter />
        <div className="filters__sections">

          <MyProjects />

          <Skills />
        </div>
      </section>
    </main>
  )
}

export default Main;
