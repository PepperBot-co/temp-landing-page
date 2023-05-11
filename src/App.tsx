import logo from './logo.svg';
import './App.css';
import { GithubIcon, EmailIcon, FacebookIcon, InstagramIcon, TwitterIcon } from './icons';

const socialLinks = [
  { href: "https://github.com/PepperBot-co", title: "GitHub", icon: <GithubIcon /> },
  { href: "mailto:hello@pepperbot.co", title: "Email", icon: <EmailIcon /> },
  { href: "https://facebook.com/pepperbot.co", title: "Facebook", icon: <FacebookIcon /> },
  { href: "https://www.instagram.com/pepperbot.co", title: "Instagram", icon: <InstagramIcon /> },
  { href: "https://twitter.com/pepperbot_co", title: "Twitter", icon: <TwitterIcon /> },
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1>Welcome to Pepperbot!</h1>
        <p>Pepperbot is your personal AI assistant, designed to make your life easier.</p>
        <div className="icons-container">
          {socialLinks.map(({ href, title, icon }) => (
            <a className={`icon ${title.toLowerCase()}`} target="_blank" rel="noopener noreferrer" href={href} title={title} key={title}>
              <div className="ir">
                {icon}
              </div>
            </a>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
