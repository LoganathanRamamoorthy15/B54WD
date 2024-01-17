export default Card;

function Card(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      
      <div className="card-body">
      <h1>$0/month</h1>
      <ul>_____________________________</ul>
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          ✔Single User<br></br>
          ✔50GB storage<br></br>
          ✔Unlimited Public Projects<br></br>
          ✔Community Access<br></br>
          ❌Unlimited Private Projects<br></br>
          ❌Dedicated Phone Support<br></br>
          ❌Free Subdomain<br></br>
          ❌Monthly Statusreport
        </p>
        <a href="#" className="btn btn-primary">
          Button
        </a>

        <h1>$9/month</h1>
        <ul>_____________________________</ul>
        <h5 className="card-title">{props.name1}</h5>
        <p className="card-text">
        ✔Single User<br></br>
        ✔50GB storage<br></br>
        ✔Unlimited Public Projects<br></br>
        ✔Community Access<br></br>
        ✔Unlimited Private Projects<br></br>
        ✔Dedicated Phone Support<br></br>
        ✔Free Subdomain<br></br>
          ❌Monthly Statusreport
        </p>
        <a href="#" className="btn btn-primary">
          Button
        </a>
        
        <h1>$49/month</h1>
        <ul>_____________________________</ul>
        <h5 className="card-title">{props.name2 }</h5>
        <p className="card-text">
        ✔Single User<br></br>
        ✔50GB storage<br></br>
        ✔Unlimited Public Projects<br></br>
        ✔Community Access<br></br>
        ✔Unlimited Private Projects<br></br>
        ✔Dedicated Phone Support<br></br>
        ✔Free Subdomain<br></br>
        ✔Monthly Statusreport
        </p>
        
        <a href="#" className="btn btn-primary">
          Button
        </a>
      </div>
    </div>
  );
}
