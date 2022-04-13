import React from 'react';
import Filter from './filter/Filter';
import MyProjects from './my-projects/MyProjects';

const Main = () => {
  return (
    <main className="main">
      <section className="filters container">
        <Filter />
        <div className="filters__sections">

          <MyProjects />

          <div className="skills__content grid" data-content>
            <div className="skills__area">
              <h3 className="skills__title">Frontend Developer</h3>

              <div className="skills__box">
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>

                    <div>
                      <h3 className="skills__name">HTML</h3>
                      <span className="skills__level">Basic</span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>

                    <div>
                      <h3 className="skills__name">CSS</h3>
                      <span className="skills__level">Advanced</span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>

                    <div>
                      <h3 className="skills__name">JavaScript</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>
                </div>

                <div className="skills__group">
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>

                    <div>
                      <h3 className="skills__name">React</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>

                    <div>
                      <h3 className="skills__name">Bootstrap</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>

                    <div>
                      <h3 className="skills__name">Git</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills__area">
              <h3 className="skills__title">Backend Developer</h3>

              <div className="skills__box">
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>

                    <div>
                      <h3 className="skills__name">PHP</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>

                    <div>
                      <h3 className="skills__name">MySQL</h3>
                      <span className="skills__level">Advance</span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>

                    <div>
                      <h3 className="skills__name">Firebase</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>
                </div>

                <div className="skills__group">
                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>

                    <div>
                      <h3 className="skills__name">Python</h3>
                      <span className="skills__level">Basic</span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <i className="ri-checkbox-circle-line"></i>

                    <div>
                      <h3 className="skills__name">Node Js</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main;
