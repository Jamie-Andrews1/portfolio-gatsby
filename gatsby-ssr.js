const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents ([
    <script key="darkmode"
      dangerouslySetInnerHTML={{
        __html: `(function() {
          window.__onThemeChange = function() {};
          function setTheme(theme) {
            window.__theme = theme
            preferredTheme = theme
            document.documentElement.className = theme
            window.__onThemeChange(theme);
          };
          window.__setPreferredTheme = function(theme) {
            setTheme(theme);
            try {
              localStorage.setItem('theme', theme);
            } catch (e) {}
          };
          let preferredTheme;
          try {
            preferredTheme = window.localStorage.getItem('theme');
          } catch (e) {}
        
          let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
          setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'))
        })()`
      }}
    />,
  ]);
};