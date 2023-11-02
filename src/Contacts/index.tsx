import "./contacts.scss";
import { useState } from "react";

export const Contacts = () => {

  const [name, setName] = useState('')
  const [surame, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [request, setRequest] = useState('')

  const [data, setData] = useState({})

  const onSubmit = () => {
    setData({
      Name: name,
      Surname: surame,
      Email: email,
      Tel: tel,
      Request: request
    })
  }

  console.log('data', data);

  return (
    <div className="contactsWrapper">
      <div className="contactsWrapper-content">
        <form className="formsInputs">
          <div className="formsInputs-title">Звʼяжіться з нами!</div>
          <div className="formsInputs-name">
            <div>
              <div className="description">Імʼя</div>
              <input className="formsInputs-name-input" type="text" onChange={(e: any) => setName(e.target.value)}/>
            </div>
            <div>
              <div className="description">Прізвище</div>
              <input className="formsInputs-name-input" type="text" onChange={(e: any) => setSurname(e.target.value)}/>
            </div>
          </div>
          <div className="description">Ел. пошта</div>
          <input className="formsInputs-info" type="text" onChange={(e: any) => setEmail(e.target.value)}/>
          <div className="description">Телефон</div>
          <input className="formsInputs-info" type="text" onChange={(e: any) => setTel(e.target.value)}/>
          <div className="description">Запит</div>
          <input className="formsInputs-info" type="text" onChange={(e: any) => setRequest(e.target.value)}/>
          <button type='button' className="formsInputs-button" onClick={onSubmit}>Відправити</button>
        </form>
        <div className="aboutUs">
          <div className="aboutUs-title"> ТОВ "ПАУЄР ЕЙТ ТЕХНОЛОДЖИЗ" </div>
          <div className="aboutUs-content">
            <div className="aboutUs-content__title">Передзвони нам</div>
            <div className="aboutUs-content__description">
              +38-(066)-090-14-12 Акопянц Ольга
            </div>
          </div>
          <div className="aboutUs-content">
            <div className="aboutUs-content__title">Адреса</div>
            <div className="aboutUs-content__description">
              вул. Сімʼї Бродських 31-33, корпус 3, Київ, Україна, 03057
            </div>
          </div>
          <div className="aboutUs-content">
            <div className="aboutUs-content__title">Наш веб-сайт</div>
            <div className="aboutUs-content__description">
              p8t.com.ua
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
