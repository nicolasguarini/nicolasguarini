import React from "react"
import PropTypes from "prop-types"
import 'jquery'

export default function HTML(props) {
  const jq = `
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script src="/js/t.min.js"></script>
    <script src="/js/wow.min.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"></script>

    <script type="text/javascript">
      TweenMax.from("#brand", 1, {
          delay: 0.4,
          y: 10,
          opacity: 0,
          ease: Expo.easeInOut
      })

      TweenMax.staggerFrom("#menu li a", 1, {
          delay: 0.4,
          opacity: 0,
          ease: Expo.easeInOut
      }, 0.1);

      new WOW().init();
    </script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-7NCLBN4M2M"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-7NCLBN4M2M');
    </script>
  `
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
       
        <link rel="stylesheet" href="/css/bootstrap.min.css" />

        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:100,100i,300,300i,400,400i,500,500i,700,700i" rel="stylesheet" />

        <link rel="stylesheet" href="/css/animate.css" />

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        <div dangerouslySetInnerHTML={{__html: jq}}></div>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
