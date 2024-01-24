import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "./Card";
function App() {
  return (
<div className="container">
    <div className="row">
      <Card planName="Free" price="0" user="✔ Single User" storage="✔ 50GB Storage" project="✔ Unlimted Public Projects" community="✔ Community Access" projects="❌ Unlimited Private Projects" phone="❌ Dedicated Phone Support" free="❌ Free Subdoman" monthly="❌ Monthly Status Report"/>
      <Card planName="Pro" price="19" user="✔ Single User" storage="✔ 50GB Storage" project="✔ Unlimted Public Projects" community="✔ Community Access" projects="✔ Unlimited Private Projects" phone="❌ Dedicated Phone Support" free="❌ Free Subdoman" monthly="❌ Monthly Status Report"/>
      <Card planName="Plus" price="49" user="✔ Single User" storage="✔ 50GB Storage" project="✔ Unlimted Public Projects" community="✔ Community Access" projects="✔ Unlimited Private Projects" phone="✔ Dedicated Phone Support" free="✔ Free Subdoman" monthly="✔ Monthly Status Report"/>

    </div>
    <div></div>
    </div>
  );
}

export default App;
