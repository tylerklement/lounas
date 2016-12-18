import _ from 'lodash'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import restaurants from './src/restaurants'

const qoogleAnalytics = `
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-8827649-4', 'auto');
  ga('send', 'pageview');`.
  replace(/(^|\n)\s+/g, '')

const Html = ({children}) => (
  <html lang='fi'>
    <head>
      <meta charSet='utf-8'/>
      <meta name='google' content='notranslate'/>
      <title>lounas</title>
      <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no'/>
      <link href='style.css' rel='stylesheet'/>
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: qoogleAnalytics}}
      />
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
