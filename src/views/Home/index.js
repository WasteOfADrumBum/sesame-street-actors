import React from 'react'
import './_home.scss'

const Home = () => (
  <div className="home">
    <div className="text-center mb-5">
      <img
        src="./assets/images/logo.png"
        alt="logo"
        className="logo img-fluid my-5"
      />
      <p>
        Sesame Street has been on for 50 seasons. The series boasts an
        impressive list of celebrity cameos, featuring everyone from musicians
        to late-night host. Making a guest appearance on Sesame Street seems
        like a veritable rite of passage for Hollywood stars. And it's a thrill
        seeing A-listers hang out with the puppets you used to think of as
        A-listers growing up.
      </p>
      <i className="bestlifeLink">
        <a href="https://bestlifeonline.com/sesame-street-celebrity-cameos/">
          - ©BestLife
        </a>
      </i>
    </div>
    <div className="my-5">
      <hr />
      <br />
    </div>
    <div className="row my-5 d-flex align-items-center justify-content-center">
      <div className="col-md-4">
        <img
          src="./assets/images/sesame-street-characters.png"
          alt="sesame street characters"
          className="characterGroup img-fluid my-5"
        />
      </div>
      <div className="col-md-4">
        <p>
          I've developed this front-end application to work with the latest
          react dependencies. Particularly the ones involving react-router-dom
          v6. Many things have changed and I wanted to take the oppourtunity to
          learn the differences and apply them. I've chosen to develop this
          application after the hours I've spent with my one year old watching
          Sesame Street on YouTube.
        </p>
      </div>
      <div className="col-md-4">
        <ul>
          <li>bootstrap: ^5.1.3</li>
          <li>bootstrap-icons: ^1.7.2</li>
          <li>jquery: ^3.6.0</li>
          <li>latest: ^0.2.0</li>
          <li>node-sass: ^7.0.1</li>
          <li>react: ^17.0.2</li>
          <li>react-dom: ^17.0.2</li>
          <li>react-router-dom: ^6.2.1</li>
          <li>react-scripts: ^5.0.0</li>
          <li>react-select: ^5.2.1</li>
          <li>web-vitals: ^2.1.2</li>
        </ul>
      </div>
    </div>
    <div className="my-5">
      <hr />
      <br />
    </div>
    <div className="row mb-5">
      <div className="col-md-12 text-center">
        <div className="fontFaceSesameStreet">Celebrities</div>
        <p>
          You can view a list of some of the celebrity cameos{' '}
          <a href="./sesame-street" alt="sessame street guest stars">
            HERE
          </a>
          .
        </p>
      </div>
    </div>
  </div>
)

export default Home
