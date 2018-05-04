//@flow

const theme = {
  darkBlue: "#395f9e",
  blue: "#5082d4",
  gray: "#BDBDBD",
  black: "#212121",
  shadow: {
    small: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);",
    medium: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);"
  },
  transition: "0.3s all ease",

  //GRID
  flexboxgrid: {
    // Defaults
    gridSize: 24, // rem
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: "only screen",
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76 // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75 // em
    }
  }
};

export default theme;
