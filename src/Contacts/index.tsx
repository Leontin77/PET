import "./contacts.scss";
import { useEffect, useState } from "react";
import emailjs from 'emailjs-com';
import { PopUp } from "PopUp";
import Recaptcha from 'react-google-recaptcha';
import insta from "../images/insta.png"




export const Contacts = () => {

  const [name, setName] = useState('')
  const [surame, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [request, setRequest] = useState('')
  const KEY = "6Ld72v0oAAAAAC99VH8fKEPCGaPPO2zHBuW8Xe-e"
  const [recaptchaValue, setRecaptchaValue] = useState('');
  const [captchaError, setCaptchaError] = useState(false);

  const [data, setData] = useState({})
  const [popUpOpen, setPopUpOpen] = useState(false)
  emailjs.init('5hEPvDX5N2RgGy0np');

  const [width, setWidth] = useState(window.innerWidth)


  const onRecaptchaChange = (value: any) => {
    // Update the reCAPTCHA value when it changes
    console.log("value", value);
    setRecaptchaValue(value);
    setCaptchaError(false)
  };

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [window.innerWidth])



  const onSubmit = (e: any) => {
    e.preventDefault()

    if (!recaptchaValue) {
      setCaptchaError(true)
      return;
    }


    if (!name || !surame || !email || !tel) {
      return;
    }

    const templateParams = {
      name: name,
      surname: surame,
      email: email,
      tel: tel,
      request: request,
    };

    emailjs.send("service_1ivsytk","template_lir20jj", templateParams)
        .then((response) => {
          setPopUpOpen(true)
          console.log('Email sent successfully', response);
          setRecaptchaValue('');
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          setRecaptchaValue('');
        });

  }


  console.log('data', data);

  return (
      <div className="contactsWrapper">
        <div className="contactsWrapper-content">
          <form id="demo-form" className="formsInputs">
            <div className="formsInputs-title">Звʼяжіться з нами!</div>
            {width > 1024 ? <div className="formsInputs-name">
                  <div>
                    <div className="description">Імʼя</div>
                    <input className="formsInputs-name-input" type="text" onChange={(e: any) => setName(e.target.value)}/>
                  </div>
                  <div>
                    <div className="description">Прізвище</div>
                    <input className="formsInputs-name-input" type="text" onChange={(e: any) => setSurname(e.target.value)}/>
                  </div>
                </div> :
                <>
                  <div className="description">Імʼя</div>
                  <input className="formsInputs-info" type="text" onChange={(e: any) => setName(e.target.value)}/>
                  <div className="description">Прізвище</div>
                  <input className="formsInputs-info" type="text" onChange={(e: any) => setSurname(e.target.value)}/>
                </>
            }
            <div className="description">Ел. пошта</div>
            <input className="formsInputs-info" type="email" onChange={(e: any) => setEmail(e.target.value)}/>
            <div className="description">Телефон</div>
            <input className="formsInputs-info" type="tel" onChange={(e: any) => setTel(e.target.value)}/>
            <div className="description">Запит</div>
            <input className="formsInputs-info" type="text" onChange={(e: any) => setRequest(e.target.value)}/>
            <div className="captha-form">
              <Recaptcha
                  sitekey={KEY} // Replace with your reCAPTCHA Site Key
                  onChange={onRecaptchaChange}
              />
              {captchaError && <p className="error">Пройдіть перевірку каптчі</p>}
            </div>
            <button type='submit' className="formsInputs-button" onClick={(e: any) => onSubmit(e)}>Відправити</button>
          </form>
          <div className="aboutUs">
            <div className="aboutUs-title"> ТОВ "ПАУЕР ЕЙТ ТЕХНОЛОДЖИЗ" </div>
            <div className="aboutUs-content">
              <div className="aboutUs-content__title">Відділ продажу:</div>
              <a href="tel:+38-066-090-14-12" className="aboutUs-content__description">
                +38-(066)-090-14-12
              </a>
            </div>
            <div className="aboutUs-content">
              <div className="aboutUs-content__title">Адреса</div>
              <div className="aboutUs-content__description">
                Київ, Україна
              </div>
            </div>
            <div className="aboutUs-content">
              <div className="aboutUs-content__title">Наша пошта</div>
              <a href="mailto:info@p8tech.com.ua" className="aboutUs-content__description">
                info@p8tech.com.ua
              </a>
            </div>
            <div className="aboutUs-content">
              <div className="aboutUs-content__title">Instagram</div>
              <a href="http://instagram.com/_u/p8tech" className="aboutUs-content__description">
                <img className="insta" src={insta} alt="" />
                P8T
              </a>
            </div>
          </div>
        </div>
        {popUpOpen && <PopUp setPopUpOpen={setPopUpOpen}/>}
      </div>

  );
};
