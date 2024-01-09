import React, { useState, useEffect, useLayoutEffect, useCallback, useMemo, useRef} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render } from '@testing-library/react';
import { renderIntoDocument } from 'react-dom/test-utils';
//const text = "Riders on the storm Into this house we're born Like a dog without a bone";
//const Msg = (
//<div className ='test'>
//  <h2>{text}</h2>
//</div>
//);
//const FunctionComponent = () => {
//  return Msg;
//};
const FunctionComponent = ({ onClick }) => {
  console.log("render")
  const [count, setCount] = useState(0)
  const [films, setFilms] = useState(["film 1"])
  const [messages, setMessages] = useState(["message 1"])
  const cb = useCallback(() => {
    console.log("click")
  }, [])

  const result = useMemo(() =>{
    return 1 + 1  // тяжелая операция
  }, [])

  useEffect(() => {
    console.log("bot Effect")
  const TEXT = "hello from bot"
  const lastMessages = messages[messages.length - 1]
  let timerId = null

  if (lastMessages !==TEXT) {
    timerId = setTimeout(() => {
      setMessages([...messages, TEXT])
    }, 500)
  }

  return () => {
    console.log("componentWillUnmount")
    clearInterval(timerId)
    }
  }, [messages])
  //async (another effects)
  useEffect(() => {
    console.log("useEffect 1", films)
    }, [films])

  useEffect(() => {
    const listener = () => {
      console.log("click")
    }

    console.log("useEffect 2")
    document.addEventListener("click", listener)

    return () => {
      console.log("componentWillUnmount")
      document.removeEventListener("click", listener)
    }
  }, [])

//sync (DOM)
useLayoutEffect(() => {
  console.log("useLayoutEffect")
}, [])

const increment = () => {
  setCount(c => c + 1)
}
const addFilm = () => {
  setFilms([...films, "new film"])
}
const removeFilm = (name) => {
  setFilms(films.filter(film => film !== name))
}
const sendMessage = (message) => {
  setMessages([...messages, message])
}

    return ( 
    <div> 
    <h1>FunctionComponent</h1>
    <h2>count{count}</h2>
    <h2>{messages}</h2>
    <button onClick ={increment}>increment</button>
    <button onClick ={() => sendMessage("test ")}>sendMessage</button>
  </div>
  );
  };

class ClassComponent extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      count: 0,
      FirstName: "FirstName",
      LastName: "LastName",
      films:["film 1", "film 2"],
      tree:{
        prev: "tree prev",
        child:{
          current: null,
          prev: "child prev"
        },
        parent: null
      }
    }
  }
  listener = () => {
    console.log("click")
  }

  //делать вычисления
  static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps")
    return {
      ...state, 
      next: "some next  "
    }
  }

  // работа с дом, подписки, слушатели, запросы, обновления состояния, запуск таймеров
  componentDidMount(){
    console.log("componentDidMount")

    document.addEventListener("click", this.listener)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.count > 10) {
      return false
    }
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    //return null
    return{
      scroll: 10
    }
  }
// работа с дом, подписки, слушатели, запросы, обновления состояния, запуск таймеров
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("componentDidUpdate", snapshot)
  }

  componentWillUnmount(){
    console.log("componentWillUnmount")
    document.removeEventListener("click", this.listener)
  }
  //очищает действия 

  increment = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }))
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  };

addfilm = () => {
  this.setState({
    films: [...this.state.films, new Date().toLocaleString()]
  })
}
removefilm = (name) => {
  this.setState({
    films: this.state.films.filter(film => film !== name )
  })
} 


// tree:{
//   prev: "tree prev",
//   child:{
//     current: null,
//     prev: "child prev"
//   },
//   parent: null
// }

UpdateCurrent = () => {
const {tree} = this.state;
this.setState({
  tree: {...tree, child: {...tree.child, current: "new child current"}}
})
}
UpdateParent = () => {
  const {tree} = this.state;
this.setState({
  tree: {...tree, parent: "new parent"}}
)
}

render() {
  const { onClick } = this.props;
  const {count, FirstName, LastName, films, tree} = this.state;
  console.log("render", this.state)
  //const state = {}
  return(
    <div> 
      <h1>ClassConponent</h1>
      <h2>count{count}</h2>
      <h2>FirstName{FirstName}</h2>
      <h2>LastName{LastName}</h2>
    <button onClick ={this.increment}>increment</button>
    <button onClick ={this.decrement}>decrement</button>

    <hr/>

    <button onClick={this.addfilm}>add</button>
    {films.map(film => (
      <div>
        <h3>{film}</h3>
        <button onClick={() => this.removefilm(film)}>x</button>
      </div>
    ))}

<hr/>

<h2>Tree</h2>
<h2>{JSON.stringify(tree)}</h2>
<button onClick ={this.UpdateCurrent}>UpdateCurrent</button>
<button onClick ={this.UpdateParent}>UpdateParent</button>
  </div>
  )
};
}

const App = () => {
const [visible, setVisible] = useState(true)
  //const state = {}
  return(
    <>
    <button onClick ={() => setVisible(!visible)}>setVisible</button>
    {<FunctionComponent/>}
    {/*visible && <ClassComponent/>*/}
    </>
  )

}
ReactDOM.render(
   <React.StrictMode>
   <App/>
   </React.StrictMode>,
 document.getElementById('root')
 );