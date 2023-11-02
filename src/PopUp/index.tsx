import './index.scss'
import { createPortal } from "react-dom"
const modalRoot = document.querySelector("#modal-root")

export const PopUp = ({setPopUpOpen} : any): JSX.Element => {
    console.log('sss');
    const width = window.innerWidth;
    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget === e.target) {
          setPopUpOpen(false)
        }
      }
    return createPortal(
        <div className="popUp" onClick={handleBackgroundClick}>
        <div className="popUp_content">
            <svg className="popUp_content-svg" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15.5" cy="15.5" r="15.5" fill="#fff"></circle><path d="M11.2045 10.0005C10.9659 10.0008 10.7328 10.0722 10.5349 10.2057C10.3371 10.3391 10.1835 10.5285 10.0938 10.7496C10.0042 10.9707 9.98244 11.2136 10.0314 11.4471C10.0804 11.6806 10.1979 11.8943 10.3689 12.0607L13.7205 15.4122L10.3689 18.7638C10.2538 18.8744 10.1618 19.0068 10.0985 19.1534C10.0351 19.2999 10.0017 19.4576 10.0001 19.6173C9.99844 19.7769 10.0287 19.9353 10.089 20.0831C10.1494 20.2309 10.2386 20.3652 10.3515 20.4781C10.4644 20.591 10.5987 20.6802 10.7465 20.7406C10.8943 20.8009 11.0527 20.8312 11.2123 20.8296C11.372 20.8279 11.5297 20.7945 11.6763 20.7311C11.8228 20.6678 11.9552 20.5758 12.0658 20.4607L15.4174 17.1091L18.7689 20.4607C18.8795 20.5758 19.012 20.6678 19.1585 20.7311C19.3051 20.7945 19.4628 20.8279 19.6224 20.8296C19.7821 20.8312 19.9405 20.801 20.0883 20.7406C20.2361 20.6803 20.3704 20.591 20.4833 20.4781C20.5962 20.3652 20.6854 20.2309 20.7457 20.0831C20.8061 19.9353 20.8363 19.7769 20.8347 19.6173C20.8331 19.4577 20.7996 19.2999 20.7363 19.1534C20.6729 19.0068 20.581 18.8744 20.4658 18.7638L17.1143 15.4122L20.4658 12.0607C20.6392 11.8921 20.7577 11.6751 20.8056 11.4381C20.8536 11.2011 20.8288 10.9551 20.7345 10.7324C20.6403 10.5097 20.481 10.3206 20.2774 10.19C20.0739 10.0595 19.8357 9.99339 19.5939 10.0005C19.2822 10.0098 18.9863 10.1401 18.7689 10.3638L15.4174 13.7154L12.0658 10.3638C11.9539 10.2487 11.8199 10.1573 11.672 10.0949C11.524 10.0325 11.3651 10.0004 11.2045 10.0005V10.0005Z" fill="#000"></path></svg>
            Дякуємо за звернення, ваш запит знаходиться в обробці
            Невдовзі ми зв'яжемось з вами для уточнення деталей
        </div>

        </div>,
      modalRoot as HTMLDivElement
    )
}