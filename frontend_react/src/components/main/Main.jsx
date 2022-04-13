import React, { useState } from 'react';
import Filter from './filter/Filter';
import MyProjects from './my-projects/MyProjects';
import Skills from './skills/Skills';

const Main = () => {

  const [filter, setFilter] = useState([
    {
      title: 'Projects',
      isActive: true,
      getComponent() {
        return (
          <MyProjects key={this.title} />
        )
      }
    },
    {
      title: 'Skills',
      isActive: false,
      getComponent() {
        return (
          <Skills key={this.title} />
        )
      }
    },
  ])

  const clickHandler = (id) => {
    setFilter((prev) => (
      prev
        .map((item, idx) => id === idx ? { ...item, isActive: true } : { ...item, isActive: false })
    ))
  }
  return (
    <main className="main">
      <section className="filters container">
        <Filter
          filter={filter}
          changeTab={clickHandler}
        />
        <div className="filters__sections">
          {
            filter.map(filter => (
              filter.isActive && filter.getComponent()
            ))
          }
        </div>
      </section>
    </main>
  )
}

export default Main;
