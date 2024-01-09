import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render } from '@testing-library/react';
import { renderIntoDocument } from 'react-dom/test-utils';

const FunctionComponent = ({ onClick }) => {

  const [messageList, setMessageList] = useState([])
  const [inputText, setInputText] = useState('')

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        text: inputText,
        author: 'user',
      };

      setMessageList([...messageList, newMessage]);
      setInputText('');
    }
  };
  useEffect(() => {
    const lastMessage = messageList.length > 0 ? messageList[messageList.length - 1] : null;

    if (lastMessage && lastMessage.author === 'user') {
      // Добавляем задержку перед ответом робота
      const robotResponseTimeout = setTimeout(() => {
        const robotMessage = {
          text: 'Спасибо за ваше сообщение. Я робот созданный учеником GB.',
          author: 'robot',
        };
        setMessageList([...messageList, robotMessage]);
      }, 1500);

      // Очищаем таймаут при размонтировании компонента или при следующем сообщении пользователя
      return () => clearTimeout(robotResponseTimeout);
    }
  }, [messageList]);

  return (
    <div>
      <div>
        {messageList.map((message, index) => (
          <div key={index} className={message.author === 'robot' ? 'robot-message' : 'user-message'}>
            <strong>{message.author}: </strong>{message.text}
          </div>
        ))}
      </div>
      <div>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>ОТПРАВИТЬ</button>
      </div>
    </div>
  );
};
const App = () => {
  return(
    <>
    {<FunctionComponent/>}
    </>
  )
}
ReactDOM.render(
   <React.StrictMode>
   <App/>
   </React.StrictMode>,
 document.getElementById('root')
 );