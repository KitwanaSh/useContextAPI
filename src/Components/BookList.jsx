import React, { Component, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// class BookList extends Component {
//   render() {
//     return (
//       <ThemeContext.Consumer>{(context) => {
//         const { isLightTheme, light, dark } = context
//         const theme = isLightTheme ? light : dark;
//         return(
//           <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
//             <ul>
//               <li style={{background: theme.ui}}>the way of kings</li>
//               <li style={{background: theme.ui}}>the name of the wind</li>
//               <li style={{background: theme.ui}}>the final empire</li>
//             </ul>
//           </div>
//         )
//       }}
//       </ThemeContext.Consumer>
//     );
//   }
// }

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark
  return (
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
              <li style={{background: theme.ui}}>the way of kings</li>
              <li style={{background: theme.ui}}>the name of the wind</li>
              <li style={{background: theme.ui}}>the final empire</li>
            </ul>
          </div>
  );
}
 
export default BookList;

// export default BookList;
