import "./SideBar.css";
import EvStationIcon from "@mui/icons-material/EvStation";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HandymanIcon from "@mui/icons-material/Handyman";
import SummarizeIcon from "@mui/icons-material/Summarize";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const SideBar = () => {
  return (
    <div className="col-md-2 wrapper">
      <nav id="sidebar">
        <ul className="list-unstyled components">
          <p>Welcome</p>
          <li className="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <EvStationIcon /> Chargers
            </a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="/#">View Chargers</a>
              </li>
              <li>
                <a href="/#">View Site</a>
              </li>
              <li>
                <a href="/#">View Site Group</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#feesSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <AttachMoneyIcon /> Fees
            </a>
            <ul className="collapse list-unstyled" id="feesSubmenu">
              <li>
                <a href="/#">View Chargers</a>
              </li>
              <li>
                <a href="/#">View Site</a>
              </li>
              <li>
                <a href="/#">View Site Group</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#sessionSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <AssessmentIcon /> Sessions
            </a>
            <ul className="collapse list-unstyled" id="sessionSubmenu">
              <li>
                <a href="/#">Page 1</a>
              </li>
              <li>
                <a href="/#">Page 2</a>
              </li>
              <li>
                <a href="/#">Page 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#driverSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <HandymanIcon /> Driver
            </a>
            <ul className="collapse list-unstyled" id="driverSubmenu">
              <li>
                <a href="/#">Page 1</a>
              </li>
              <li>
                <a href="/#">Page 2</a>
              </li>
              <li>
                <a href="/#">Page 3</a>
              </li>
            </ul>
          </li>

          <li>
            <a
              href="#reportsSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <SummarizeIcon /> Reports
            </a>
            <ul className="collapse list-unstyled" id="reportsSubmenu">
              <li>
                <a href="/#">Page 1</a>
              </li>
              <li>
                <a href="/#">Page 2</a>
              </li>
              <li>
                <a href="/#">Page 3</a>
              </li>
            </ul>
          </li>

          <li>
            <a
              href="#loadManagementSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <HourglassBottomIcon /> Load Management
            </a>
            <ul className="collapse list-unstyled" id="loadManagementSubmenu">
              <li>
                <a href="/#">Page 1</a>
              </li>
              <li>
                <a href="/#">Page 2</a>
              </li>
              <li>
                <a href="/#">Page 3</a>
              </li>
            </ul>
          </li>

          <li>
            <a
              href="#userSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <GroupAddIcon /> Users
            </a>
            <ul className="collapse list-unstyled" id="userSubmenu">
              <li>
                <a href="/#">Page 1</a>
              </li>
              <li>
                <a href="/#">Page 2</a>
              </li>
              <li>
                <a href="/#">Page 3</a>
              </li>
            </ul>
          </li>

          <li>
            <a
              href="#alertsSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <AddAlertIcon /> Manage Alerts
            </a>
            <ul className="collapse list-unstyled" id="alertsSubmenu">
              <li>
                <a href="/#">Page 1</a>
              </li>
              <li>
                <a href="/#">Page 2</a>
              </li>
              <li>
                <a href="/#">Page 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#adminSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <AdminPanelSettingsIcon /> Admin Report
            </a>
            <ul className="collapse list-unstyled" id="adminSubmenu">
              <li>
                <a href="/#">Page 1</a>
              </li>
              <li>
                <a href="/#">Page 2</a>
              </li>
              <li>
                <a href="/#">Page 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
