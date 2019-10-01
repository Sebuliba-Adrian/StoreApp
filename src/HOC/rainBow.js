import React from 'react'

function rainBow(WrappedComponent) {
    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColour = colours[Math.floor(Math.random()*colours.length)];
    const colorName = randomColour;
    return (props) => {

       return (
           <div style={{ color: colorName }}>
               <WrappedComponent {...props}/>
           </div>
       );
    }
}
export default rainBow;
