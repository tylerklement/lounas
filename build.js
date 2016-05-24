import _ from 'lodash'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import restaurants from './src/restaurants'

const Html = ({children}) => (
  <html>
    <head>
      <meta charSet='utf-8'/>
      <title>lounas</title>
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

const html = '<!DOCTYPE html>' + ReactDOMServer.renderToStaticMarkup(
  <Html>
    <Restaurants restaurants={restaurants}/>
  </Html>
)

console.log(html);
