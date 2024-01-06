import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import { App } from './App';

// const age = 12;
// const obj = {name: "test" };
// const arr2 = [1, 2, 3]
// const films = [
//   {title: "film 1", age: 2020},
//   {title: "film 2", age: 2021},
// ];
// const Info = ({title}) => {
//   return(
// <div>
//    <h1>Hello {title}</h1>
//    <h2>age: {age}</h2>
//    <h2> name: {obj.name}</h2>
//    {arr2}
// </div>
// );
// };

// const Films = () => {
//   return (
//   <div>
//     <h2>Films:</h2>
//     {films.map((film) => (
//     <div>
//      <h2>{film.title}</h2>
//      <h2>{film.age}</h2>
//      </div>
//      ))}
//      </div>
//   );
// };

// const FunctionComponent = ({ onClick }) => {
//   return (
//       <div className="testSlyle">
//       <Info title="FunctionComponent" />
//       <Films />
//       <button onClick={() => onClick("FunctionComponent")}>click</button>
//     </div>
//     );
// };

// class ClassComponent extends React.Component {
//   render() {

//     const {onClick} = this.props
//     return (
//     <div className="testSlyle">
//       <Info title="ClassComponent" />
//       <Films />
//       <button onClick={() => onClick("ClassComponent")}>click</button>
//       </div>
//       );
//   }
// }

// ReactDOM.render(
//   <React.StrictMode>
//   <FunctionComponent 
//   test= {{age: 12}}
//   onClick={(target)=>{
// console.log("click from: ", target)
//   }}
//   />
//   <hr />
//   <ClassComponent 
//   test= {{age: 12}}
//   onClick={(target)=>{
//   console.log("click from: ", target)
//         }}
//   />
//   </React.StrictMode>,
// document.getElementById('root')
// );
const text = "Riders on the storm Into this house we're born Like a dog without a bone";
const Msg = (
<div className ='test'>
  <h2>{text}</h2>
</div>
);
const FunctionComponent = () => {
  return Msg;
};
 ReactDOM.render(
   <React.StrictMode>
   <FunctionComponent />
   </React.StrictMode>,
 document.getElementById('root')
 );