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
      <link href='style.css' rel='stylesheet'/>
    </head>
    <body>{children}</body>
  </html>
)

const Restaurants = ({restaurants}) => (
  <ul>
    {_.map(restaurants, (r, index) => (
      <li key={index}>
        <a href={r[1]}>{r[0]}</a>
      </li>
    ))}
  </ul>
)

const htmlDoctype = '<!DOCTYPE html>'

const html = htmlDoctype + ReactDOMServer.renderToStaticMarkup(
  <Html>
    <Restaurants restaurants={restaurants}/>
  </Html>
)

console.log(html)
