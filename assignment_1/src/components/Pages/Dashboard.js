import "./Dashboard.css";
import map from "../../assets/images/map.jpg";

const Dashboard = () => {
  return (
    <div className="col-md-10 px-md-4">
      <div className="row">
        <div className="col-md-3 stretch-card grid-margin grid-margin-sm-0 pb-sm-3">
          <div className="card bg-warning">
            <div className="card-body px-3 py-4">
              <div className="d-flex justify-content-between align-items-start">
                <div className="color-card">
                  <p className="mb-0 color-card-head">Total Chargers</p>
                  <h2 className="text-white">10</h2>
                </div>
                <i className="card-icon-indicator mdi mdi-basket bg-inverse-icon-warning"></i>
              </div>
              <h6 className="text-white">100%</h6>
            </div>
          </div>
        </div>
        <div className="col-md-3 stretch-card grid-margin grid-margin-sm-0 pb-sm-3">
          <div className="card bg-danger">
            <div className="card-body px-3 py-4">
              <div className="d-flex justify-content-between align-items-start">
                <div className="color-card">
                  <p className="mb-0 color-card-head">Charger Online</p>
                  <h2 className="text-white">8</h2>
                </div>
                <i className="card-icon-indicator mdi mdi-cube-outline bg-inverse-icon-danger"></i>
              </div>
              <h6 className="text-white">80%</h6>
            </div>
          </div>
        </div>
        <div className="col-md-3 stretch-card grid-margin grid-margin-sm-0 pb-sm-3 pb-lg-0 pb-xl-3">
          <div className="card bg-primary">
            <div className="card-body px-3 py-4">
              <div className="d-flex justify-content-between align-items-start">
                <div className="color-card">
                  <p className="mb-0 color-card-head">Delayed Chargers</p>
                  <h2 className="text-white">1</h2>
                </div>
                <i className="card-icon-indicator mdi mdi-briefcase-outline bg-inverse-icon-primary"></i>
              </div>
              <h6 className="text-white">10%</h6>
            </div>
          </div>
        </div>
        <div className="col-md-3 stretch-card pb-sm-3 pb-lg-0">
          <div className="card bg-success">
            <div className="card-body px-3 py-4">
              <div className="d-flex justify-content-between align-items-start">
                <div className="color-card">
                  <p className="mb-0 color-card-head">Offline Chargers</p>
                  <h2 className="text-white">1</h2>
                </div>
                <i className="card-icon-indicator mdi mdi-account-circle bg-inverse-icon-success"></i>
              </div>
              <h6 className="text-white">10%</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
