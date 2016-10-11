import _ from 'lodash'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import restaurants from './src/restaurants'

const Html = ({children}) => (
  <html lang='fi'>
    <head>
      <meta charSet='utf-8'/>
      <meta name='google' content='notranslate'/>
      <title>lounas</title>
      <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no'/>
      <link href='style.css' rel='stylesheet'/>
    </head>
    <body>
      {children}
    </body>
  </html>
)

const Wrapper = ({children}) => (
  <div className='wrapper'>
    {children}
  </div>
)

const Header = () => (
  <div className='header'>
    <Wrapper>
      <span className='title'>
        🍕 <a href='/' className='link'>lounas<span>.surge.sh</span></a>
      </span>
      {' '}
      <span className='github'>
        <a href='https://github.com/tuures/lounas' className='link'>
        fork on github 🍴
        </a>
      </span>
    </Wrapper>
  </div>
)

const Restaurants = ({restaurants}) => (
  <ul className='list'>
    {_.map(restaurants, (r, index) => (
      <li key={index} className='item'>
        <a href={r[1]} className='link'>{r[0]}</a>
      </li>
    ))}
  </ul>
)

const htmlDoctype = '<!DOCTYPE html>'

const html = htmlDoctype + ReactDOMServer.renderToStaticMarkup(
  <Html>
    <Header/>
    <div className='main'>
      <Wrapper>
        <Restaurants restaurants={restaurants}/>
      </Wrapper>
    </div>
  </Html>
)

console.log(html)
