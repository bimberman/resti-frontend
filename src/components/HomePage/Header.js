import '../../css/HeaderStyle.css';

function Header(){
    return(
        <header className="masthead text-white text-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h4 className="mb-5">Welcome to Resti Review</h4>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form>
                <div className="form-row">
                  <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input type="email" className="form-control form-control-lg" placeholder="Search For A Restaurant..."></input>
                  </div>
                  <div className="col-12 col-md-3">
                    <button type="submit" className="btn btn-block btn-lg btn-primary">Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;