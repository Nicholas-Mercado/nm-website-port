import "./topbar.scss"
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import MailRoundedIcon from '@mui/icons-material/MailRounded';

export default function Topbar({menuOpen, toggleMenu}) {
  return (
    <div className={"topbar " + (menuOpen && "active ")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo" >
            Nicholas Mercado
          </a>
          <div className="itemContainer">
            <PhoneAndroidOutlinedIcon className="icon "/>
            <span className="iconRight">+555 555 5555</span>
            <MailRoundedIcon className="icon"/>
            <span>Nicholasamerc@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={toggleMenu}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

