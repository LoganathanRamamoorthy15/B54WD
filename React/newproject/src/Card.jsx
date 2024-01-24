function Card  (props) {
    return (
<div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class=""><center>{props.planName}</center></h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title"><center>${props.price}<small class="text-body-secondary fw-light">/month</small></center></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>{props.user}</li>
              <li>{props.storage}</li>
              <li>{props.project}</li>
              <li>{props.community}</li>
              <li>{props.projects}</li>
              <li>{props.free}</li>
              <li>{props.monthly}</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Button</button>
          </div>
        </div>
      </div>
    );
}

export default Card;
