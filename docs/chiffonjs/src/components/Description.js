import React from 'react';
import logo from '../chiffonJSlogo.png';

export default function Description(){
  return (
    <main>
      <div className="logo-wrapper">
        <img src={logo} className="App-logo" alt="ChiffonJS Logo" />
      </div>
      <h1 className="section-title">Simple Dress-up Game Engine</h1>
      <section className="section-content">
        <h2 className="section-title">About</h2>
        <p>
          ChiffonJS is a dress-up game engine designed with
          artists in mind. Create web-based dress-up games using only
          a directory of images; no web development knowledge is required.
        </p>
        <p>
        ChiffonJS is currently in early development and not released to the
        public. Stay tuned for updates and check out <a href="https://github.com/ncreel/chiffonJS">the ChiffonJS Github Repository</a> for the latest
        developments.
        </p>
      </section>
      <section className="section-content">
        <h2 className="section-title">Contact</h2>
        <p>
          This is currently a one-person passion project, so please excuse a
          slow response.
          <ul className="contact-list">
            <li>Email: <a href="mailto:hi@chiffonjs.com">hi@chiffonjs.com</a>
            </li>
            <li>Twitter: <a href="https://twitter.com/toofyMaw">@toofyMaw</a>
            </li>
          </ul>
        </p>
      </section>
    </main>
  )
}
