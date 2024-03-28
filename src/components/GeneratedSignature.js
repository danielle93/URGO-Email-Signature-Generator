import React from "react";
import defaultImage from "../img/urgo-placeholder.png";
import urgoEmailLogo from "../img/urgo-logo-email.png";

import cellIcon from "../img/cell-icon.png";
import deskIcon from "../img/desk-icon.png";
import faxIcon from "../img/fax-icon.png";
import emailIcon from "../img/email-icon.png";
import locationIcon from "../img/location-icon.png";
import websiteIcon from "../img/website-icon.png";

function GeneratedSignature({
  fullName,
  jobTitle,
  phoneNumber,
  deskNumber,
  faxNumber,
  emailAddress,
  address,
  employeeImage,
  color,
}) {
  return (
    <table
      className="generatedSignature"
      cellSpacing="0"
      cellPadding="0"
      border="0"
      width="390"
      style={{ height: "10px" }}
      borderCollapse="collapse"
    >
      {/* <div dangerouslySetInnerHTML={{ __html: conditionalStyles }} /> */}
      <tbody>
        <tr>
          <td width="50" rowSpan="14">
            <p
              style={{
                textAlign: "center",
                display: employeeImage ? "block" : "none",
              }}
            >
              <img
                width={employeeImage ? "110" : "0"}
                className="logo"
                src={employeeImage || defaultImage} // Use employeeImage if available, otherwise use the defaultImage
                alt="Employee Headshot"
              />
            </p>
            <p
              style={{
                fontSize: "10px",
                display: employeeImage ? "block" : "none",
              }}
            >
              &nbsp;
            </p>
            <p>
              <img
                width={employeeImage ? "105" : "125"}
                className="logo"
                src={urgoEmailLogo}
                alt="Urgo Logo"
              />
            </p>
          </td>
          <td
            width="15"
            rowSpan="14"
            style={{ borderRight: "1px solid #003865" }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;
          </td>

          <td width="15" rowSpan="14">
            &nbsp;&nbsp;&nbsp;&nbsp;
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            style={{
              fontWeight: "bold",
              fontFamily: "'Helvetica', 'Arial', sans-serif",
              color: "#003865",
              fontSize: "22px",
            }}
          >
            <font face="'Helvetica', 'Arial', sans-serif">{fullName}</font>
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            style={{
              fontFamily: "'Helvetica', 'Arial', sans-serif",
              color: "#7088ad",
              fontSize: "16px",
              fontWeight: "normal",
            }}
          >
            <font face="'Helvetica', 'Arial', sans-serif">{jobTitle}</font>
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            style={{
              fontFamily: "'Helvetica', 'Arial', sans-serif",
              color: "#7088ad",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            <font face="'Helvetica', 'Arial', sans-serif">
              Urgo Medical North America
            </font>
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            style={{
              fontFamily: "'Helvetica', 'Arial', sans-serif",
              color: "#7088ad",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            &nbsp;
          </td>
        </tr>

        <tr style={{ display: phoneNumber ? "block" : "none" }}>
          <table
            cellSpacing="0"
            cellPadding="0"
            border="1"
            height="10"
            style={{ height: "10px" }}
            borderCollapse="collapse"
          >
            <tr>
              <td width="14">
                <img
                  style={{
                    display: "block",
                  }}
                  src={cellIcon}
                  alt="Cell Phone Icon"
                  width="14"
                />
              </td>
              <td
                width="300"
                style={{
                  fontFamily: "'Helvetica', 'Arial', sans-serif",
                  color: "#7088ad",
                  fontSize: "14px",
                  fontWeight: "normal",
                }}
              >
                &nbsp;&nbsp;
                <a
                  style={{
                    display: "inline-block",
                    textDecoration: "underline",
                    color: "#7088ad",
                  }}
                  href={`tel:${phoneNumber}`}
                >
                  <font face="'Helvetica', 'Arial', sans-serif">
                    {phoneNumber}
                  </font>
                </a>
              </td>
            </tr>
          </table>
        </tr>
        <tr style={{ display: deskNumber ? "block" : "none" }}>
          <table
            cellSpacing="0"
            cellPadding="0"
            border="1"
            height="10"
            style={{ height: "10px" }}
            borderCollapse="collapse"
          >
            <tr>
              <td width="14">
                <img
                  style={{
                    display: "block",
                  }}
                  src={deskIcon}
                  alt="Desk Phone Icon"
                  width="14"
                />
              </td>
              <td
                width="300"
                style={{
                  fontFamily: "'Helvetica', 'Arial', sans-serif",
                  color: "#7088ad",
                  fontSize: "14px",
                  fontWeight: "normal",
                }}
              >
                &nbsp;&nbsp;
                <a
                  style={{
                    display: "inline-block",
                    textDecoration: "underline",
                    color: "#7088ad",
                  }}
                  href={`tel:${deskNumber}`}
                >
                  <font face="'Helvetica', 'Arial', sans-serif">
                    {deskNumber}
                  </font>
                </a>
              </td>
            </tr>
          </table>
        </tr>
        <tr style={{ display: faxNumber ? "block" : "none" }}>
          <table
            cellSpacing="0"
            cellPadding="0"
            border="1"
            height="10"
            style={{ height: "10px" }}
            borderCollapse="collapse"
          >
            <tr>
              <td width="14">
                <img
                  style={{
                    display: "block",
                  }}
                  src={faxIcon}
                  alt="Fax Icon"
                  width="14"
                />
              </td>
              <td
                width="300"
                style={{
                  fontFamily: "'Helvetica', 'Arial', sans-serif",
                  color: "#7088ad",
                  fontSize: "14px",
                  fontWeight: "normal",
                }}
              >
                &nbsp;&nbsp;
                <a
                  style={{
                    display: "inline-block",
                    textDecoration: "underline",
                    color: "#7088ad",
                  }}
                  href={`tel:${faxNumber}`}
                >
                  <font face="'Helvetica', 'Arial', sans-serif">
                    {faxNumber}
                  </font>
                </a>
              </td>
            </tr>
          </table>
        </tr>
        <tr>
          <table
            cellSpacing="0"
            cellPadding="0"
            border="1"
            height="10"
            style={{ height: "10px" }}
            borderCollapse="collapse"
          >
            <tr>
              <td width="14">
                <img
                  style={{
                    display: "block",
                  }}
                  src={emailIcon}
                  alt="Email Address Icon"
                  width="14"
                />
              </td>
              <td
                width="300"
                style={{
                  fontFamily: "'Helvetica', 'Arial', sans-serif",
                  color: "#7088ad",
                  fontSize: "14px",
                  fontWeight: "normal",
                }}
              >
                &nbsp;&nbsp;
                <a
                  style={{
                    display: "inline-block",
                    textDecoration: "underline",
                    color: "#7088ad",
                  }}
                  href={`tel:${emailAddress}`}
                >
                  <font face="'Helvetica', 'Arial', sans-serif">
                    {emailAddress}
                  </font>
                </a>
              </td>
            </tr>
          </table>
        </tr>

        <tr>
          <table
            cellSpacing="0"
            cellPadding="0"
            border="1"
            height="10"
            style={{ height: "10px" }}
            borderCollapse="collapse"
          >
            <tr>
              <td width="14">
                <img
                  style={{
                    display: "block",
                  }}
                  src={locationIcon}
                  alt="Address Icon"
                  width="14"
                />
              </td>
              <td
                width="300"
                style={{
                  fontFamily: "'Helvetica', 'Arial', sans-serif",
                  color: "#7088ad",
                  fontSize: "14px",
                  fontWeight: "normal",
                }}
              >
                &nbsp;&nbsp;
                <font face="'Helvetica', 'Arial', sans-serif">
                  100<span style={{ display: "none" }}>-</span> Lexington
                  <span style={{ display: "none" }}>-</span> Street, Suite 400
                </font>
              </td>
            </tr>
          </table>
        </tr>
        <tr>
          <td
            width="100%"
            style={{
              fontFamily: "'Helvetica', 'Arial', sans-serif",
              color: "#7088ad",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <font face="'Helvetica', 'Arial', sans-serif">
              Fort<span style={{ display: "none" }}>-</span> Worth,
              <span style={{ display: "none" }}>-</span> TX 76102
              <span style={{ display: "none" }}>-</span>
            </font>
          </td>
        </tr>
        <tr>
          <td height="6"></td>
        </tr>
        <tr>
          <table
            cellSpacing="0"
            cellPadding="0"
            border="1"
            height="10"
            style={{ height: "10px" }}
            borderCollapse="collapse"
          >
            <tr>
              <td width="14">
                <img
                  style={{
                    display: "block",
                  }}
                  src={websiteIcon}
                  alt="Website Link Icon"
                  width="14"
                />
              </td>
              <td
                width="300"
                style={{
                  fontFamily: "'Helvetica', 'Arial', sans-serif",
                  color: "#7088ad",
                  fontSize: "14px",
                  fontWeight: "normal",
                }}
              >
                &nbsp;&nbsp;
                <a
                  style={{
                    display: "inline-block",
                    textDecoration: "underline",
                    color: "#00A7C9",
                  }}
                  href="https://urgomedical.us"
                >
                  <font face="'Helvetica', 'Arial', sans-serif">
                    urgomedical.us
                  </font>
                </a>
              </td>
            </tr>
          </table>
        </tr>
      </tbody>
    </table>
  );
}

export default GeneratedSignature;
