import React, { useState, Component, useEffect } from "react";

const Button = ({ title }) => {
  const [color, setColor] = useState("black");

  useEffect(() => {
    if (title === "") return;
    console.log("effect!!!");
    console.log(title);
  }, [title]);

  const onClickButton = () => {
    setColor("yellow");
  };

  return (
    <div style={{ width: 200, height: 300, border: `10px solid ${color}` }}>
      <button onClick={onClickButton}>바껴라 색깔</button>
      {title}
    </div>
  );
};

// export class Button extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       color: "black"
//     };
//   }

//   componentDidMount() {
//     console.log("did mount");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("update");
//     console.log("prevProps");
//     console.log(prevProps);
//     console.log("prevState");
//     console.log(prevState);
//     console.log("-------------");
//   }

//   onClickButton = () => {
//     this.setState({ color: "yellow" });
//   };

//   render() {
//     const { title } = this.props;
//     const { color } = this.state;
//     return (

//     );
//   }
// }

export default Button;
