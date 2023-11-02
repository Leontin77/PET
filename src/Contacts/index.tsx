import "./contacts.scss";
import { useState } from "react";
import emailjs from 'emailjs-com';
export const Contacts = () => {

  const [name, setName] = useState('')
  const [surame, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [request, setRequest] = useState('')

  const [data, setData] = useState({})
  emailjs.init('5hEPvDX5N2RgGy0np');

  const onSubmit = (e: any) => {
    e.preventDefault
    setData({
      Name: name,
      Surname: surame,
      Email: email,
      Tel: tel,
      Request: request
    })
    const templateParams = {
      name: name,
      surname: surame,
      email: email,
      tel: tel,
      request: request,
    };
  
    emailjs.send("service_1ivsytk","template_qulgh5n", templateParams)
      .then((response) => {
        console.log('Email sent successfully', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

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
          <button type='button' className="formsInputs-button" onClick={(e: any) => onSubmit(e)}>Відправити</button>
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
