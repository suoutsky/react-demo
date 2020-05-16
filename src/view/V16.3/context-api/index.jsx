import React from 'react';
import ColorBox from './ColorBox';
// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

export default class ContextApi extends React.Component {
  render() {
 // Use a Provider to pass the current theme to the tree below.
 // Any component can read it, no matter how deep it is.
 // In this example, we're passing "dark" as the current value.
 return (
      <ThemeContext.Provider value="dark">
        第一层 value="dark"
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar(props) {
 return (
    <div>
      第二层
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
 // Assign a contextType to read the current theme context.
 // React will find the closest theme Provider above and use its value.
 // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
 return (
     <div>
        第三层
        <ColorBox theme={this.context} />
     </div>
   );
  }
}