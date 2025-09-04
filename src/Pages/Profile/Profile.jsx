import { Link } from "react-router-dom";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import api from "../../api/api.js";
import "./style.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSupportCode, setShowSupportCode] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  // Fetch user profile
  useEffect(() => {
    const getProfileData = async () => {
      try {
        const response = await api.get("/user/profile");
        setUser(response.data.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    getProfileData();
  }, []);

  // Upload profile image
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profile", file);

    try {
      setUploading(true);
      const response = await api.post(`/user/profile/upload`, formData, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        setUser((prev) => ({ ...prev, profile: response.data.profileUrl }));
        toast.success("Profile photo updated successfully 🎉");
      } else {
        toast.error("Image upload failed");
      }
    } catch (err) {
      toast.error("Error uploading image");
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const maskValue = (value) => {
    if (!value) return "";
    const str = value.toString();
    return "*" + str.slice(-4);
  };

  if (loading) return <p>Loading profile...</p>;
  if (!user) return <p>Couldn’t load profile data.</p>;

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
                  <img
                    src={user?.profile || "/images/profile_test.jpg"}
                    alt="profile_image"
                  />
                </div>
                <div className="context_menu">
                  <button
                    onClick={() => fileInputRef.current.click()}
                    disabled={uploading}
                  >
                    {uploading ? "Uploading..." : "Change photo"}
                  </button>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{
                      opacity: 0,
                      position: "absolute",
                      zIndex: -1,
                      pointerEvents: "none",
                      width: "1px",
                      height: "1px",
                    }}
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="full_name">{user.name}</h2>
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
                      {showSupportCode ? (
                        <span>{user.supportCode || "N/A"}</span>
                      ) : (
                        <span className="section-header-right profile-link-with-img">
                          <DonutSmallIcon
                            className="console_icon"
                            style={{ height: "11px", width: "11px" }}
                          />
                          <Link
                            to="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setShowSupportCode(true);
                            }}
                          >
                            View
                          </Link>
                        </span>
                      )}
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="five column lable">E-mail</div>
                  <div className="seven column value">{user.email}</div>
                </div>

                <div className="row">
                  <div className="five column lable">PAN</div>
                  <div className="seven column value">
                    {maskValue(user.panCardNumber)}
                  </div>
                </div>

                <div className="row">
                  <div className="five column lable">Phone</div>
                  <div className="seven column value">
                    {maskValue(user.phone)}
                  </div>
                </div>

                <div className="row">
                  <div className="five column lable">Demat (BO)</div>
                  <div className="seven column value">
                    <span className="value dp-ids-list">
                      <span className="value">{user.dematNumber}</span>
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="five column lable">Segments</div>
                  <div className="seven column value">
                    {Array.isArray(user.segments) && user.segments.length > 0
                      ? user.segments.join(", ")
                      : "N/A"}
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
                  <span className="value">
                    {maskValue(user.bankAccountNumber)}
                  </span>
                  <span className="text-light text-xxsmall">
                    {user.bankName}
                  </span>
                </p>
              </div>
            </div>
          </section>

          <section className="preferences">
            <div className="row">
              <div className="seven_column columns">
                <h3 className="page-title small section-header">Settings</h3>
                <div className="row chart-preferance">
                  <div className="five columns">Chart</div>
                  <div className="six columns">
                    <div className="su-radio-group">
                      <div className="su-radio-wrap">
                        <input
                          type="radio"
                          name="chartType"
                          id="radio-168"
                          className="su-radio"
                          value="chartiq"
                          defaultChecked
                        />
                        <label htmlFor="radio-168" className="su-radio-label">
                          ChartIQ
                        </label>
                      </div>
                      <br />
                      <div className="su-radio-wrap">
                        <input
                          type="radio"
                          name="chartType"
                          id="radio-169"
                          className="su-radio"
                          value="tradingview"
                        />
                        <label htmlFor="radio-169" className="su-radio-label">
                          TradingView
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="five columns">Theme</div>
                  <div className="six columns">
                    <div className="su-radio-group">
                      <div className="su-radio-wrap">
                        <input
                          type="radio"
                          name="theme"
                          id="radio-171"
                          className="su-radio"
                          value="default"
                          defaultChecked
                        />
                        <label htmlFor="radio-171" className="su-radio-label">
                          Default
                        </label>
                      </div>

                      <div className="su-radio-wrap">
                        <input
                          type="radio"
                          name="theme"
                          id="radio-172"
                          className="su-radio"
                          value="dark"
                        />
                        <label htmlFor="radio-172" className="su-radio-label">
                          Dark
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instant order updates - Now with the correct `checked` attribute */}
                <div className="row switch-row">
                  <div className="five columns">
                    <span>Instant order updates</span>
                  </div>
                  <div className="six columns order-update-toasts">
                    <div className="su-switch-group">
                      <input
                        type="checkbox"
                        name=""
                        id="switch-instant-update"
                        stateon="on"
                        stateoff="off"
                        className="su-switch"
                        defaultChecked
                      />
                      <label
                        htmlFor="switch-instant-update"
                        className="su-switch-control"
                      ></label>
                    </div>
                  </div>
                </div>

                <div className="row switch-row">
                  <div className="five columns">
                    <span>Sticky order window</span>
                  </div>
                  <div className="six columns order-update-toasts">
                    <div className="su-switch-group">
                      <input
                        type="checkbox"
                        name=""
                        id="sticky-order-window"
                        stateon="true"
                        stateoff="false"
                        className="su-switch"
                        value="false"
                      />
                      <label
                        htmlFor="sticky-order-window"
                        className="su-switch-control"
                      ></label>
                    </div>
                  </div>
                </div>

                <div className="row switch-row">
                  <div className="five columns">
                    <span>Remember F&O order quantity</span>
                  </div>
                  <div className="six columns order-update-toasts">
                    <div className="su-switch-group">
                      <input
                        type="checkbox"
                        name=""
                        id="remember-order-quantity"
                        stateon="true"
                        stateoff="false"
                        className="su-switch"
                        value="false"
                      />
                      <label
                        htmlFor="remember-order-quantity"
                        className="su-switch-control"
                      ></label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="five-col">
                <h3 className="page-title small section-header">
                  Sessions
                  <Link to={"#"} className="profile_link">
                    Clear all
                  </Link>
                </h3>
                <ul>
                  <li className="row">Kite Android</li>
                  <li className="row">Kite Web</li>
                  <li className="row">Console</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Profile;
