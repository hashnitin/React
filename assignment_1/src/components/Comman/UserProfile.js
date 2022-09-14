import "./UserProfile.css";
import face from "../../assets/images/face.jpg";

const UserProfile = () => {
  return (
    <div className="col-md-10  p-3 px-md-4">
      <ul class="navbar-nav ml-lg-auto float-right">
        <li class="nav-item nav-profile dropdown border-0">
          <a
            class="nav-link dropdown-toggle"
            id="profileDropdown"
            href="#"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <img class="nav-profile-img mr-2" alt="" src={face} />
            <span class="profile-name">Henry Klein</span>
          </a>
          <div
            class="dropdown-menu navbar-dropdown w-100"
            aria-labelledby="profileDropdown"
          >
            <a class="dropdown-item" href="#">
              <i class="mdi mdi-cached mr-2 text-success"></i> Change Password
            </a>
            <a class="dropdown-item" href="#">
              <i class="mdi mdi-logout mr-2 text-primary"></i> Signout
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
