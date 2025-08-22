import { Link } from "react-router-dom";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";

import "./style.css";

const Profile = () => {
  return (
    <>
      <div className="summary profile_container">
        <div className="profile">
          <div className="row title_row">
            <div className="profile_title">
              <h3 className="page-title small section-header">Profile</h3>
            </div>
            <div className="text-spaced text-small">
              <Link to={"/app"}>
                <span>App</span>
              </Link>

              <Link to={"/edit-profile"}>
                <span>Password & Security</span>
              </Link>
            </div>
          </div>

          <div className="header_details">
            <div>
              <div className="avtar_wrapper">
                <div id="avtar-id">
                  <img src="/images/profile_test.jpg" alt="profile_image" />
                </div>
                <div className="context_menu">
                  <Link>Change photo</Link>
                </div>
              </div>
            </div>

            <div>
              <h2 className="full_name">Md Afzal Ansari</h2>
            </div>
          </div>

          {/* section */}

          <section>
            <div className="row">
              <div className="seven_column columns">
                <h3 className="page-title small section-header">
                  Account
                  <span className="section-header-right profile-link-with-img">
                    <DonutSmallIcon
                      className="console_icon"
                      style={{ height: "11px", width: "11px" }}
                    />
                    <Link>Manage</Link>
                  </span>
                </h3>

                <div className="row">
                  <div className="five column lable">Support Code</div>
                  <div className="seven column value">
                    <span className="section-header-right profile-link-with-img">
                      <DonutSmallIcon
                        className="console_icon"
                        style={{ height: "11px", width: "11px" }}
                      />
                      <Link>View</Link>
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="five column lable">E-mail</div>
                  <div className="seven column value">
                    mdafzal14777@gmail.com
                  </div>
                </div>

                <div className="row">
                  <div className="five column lable">PAN</div>
                  <div className="seven column value">
                    *215A
                  </div>
                </div>

                <div className="row">
                  <div className="five column lable">Phone</div>
                  <div className="seven column value">
                    *8287
                  </div>
                </div>

                <div className="row">
                  <div className="five column lable">Demat (BO)</div>
                  <div className="seven column value">
                    <span className="value dp-ids-list">
                      <span className="value">1208160180663367</span>
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="five column lable">Segments</div>
                  <div className="seven column value">
                    <Link>MF, BSE, NSE</Link>
                  </div>
                </div>

                <div className="row">
                  <div className="five column lable">Demat authorisation</div>
                  <div className="seven column value">
                    <Link>eDIS</Link>
                  </div>
                </div>

              </div>

              {/* right part */}
              <div className="five-col">
                  <h3 className="page-title small section-header">
                  Bank Account
                  <span className="section-header-right profile-link-with-img">
                    <DonutSmallIcon
                      className="console_icon"
                      style={{ height: "11px", width: "11px" }}
                    />
                    <Link>Manage</Link>
                  </span>
                </h3>

                <p className="bank-row">
                  <span className="value">*6500</span>
                  <span className="text-light text-xxsmall">BANDHAN BANK LTD</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Profile;
