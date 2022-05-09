import Header from "./components/header";
import initialEmails from "./data/emails";
import { useState } from "react";
import "./styles/app.css";

function App() {
  const [listOfEmails, setEmails] = useState(initialEmails);
  console.log(initialEmails);

  const emails = listOfEmails.map((renderEmails) => {
    return (
      <li className="email">
        <div className="select">
          <input className="select-checkbox" type="checkbox" />
        </div>
        <div className="star">
          <input className="star-checkbox" type="checkbox" />
        </div>
        <div className="sender">{renderEmails.sender}</div>
        <div className="title">{renderEmails.title}</div>
      </li>
    );
  });

  const toggleRead = (target) => {
    const updatedEmails = listOfEmails.map((email) =>
      email === target ? { ...email, read: !email.read } : email
    );
    setEmails(updatedEmails);
  };

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li className="item active">
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li className="item">
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input id="hide-read" type="checkbox" checked={false} />
          </li>
        </ul>
      </nav>
      <main className="emails">{emails}</main>
    </div>
  );
}

export default App;
