import React from "react";
import defaultImage from "../img/urgo-placeholder.png";
import urgoEmailLogo from "../img/urgo-logo-email.png";

function GeneratedSignature({
  fullName,
  jobTitle,
  phoneNumber,
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
      width="380"
      style={{ height: "10px" }}
    >
      {/* <div dangerouslySetInnerHTML={{ __html: conditionalStyles }} /> */}
      <tbody>
        <tr>
          <td width="50" rowSpan="10">
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
            rowSpan="10"
            style={{ borderRight: "1px solid #003865" }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;
          </td>

          <td width="15" rowSpan="10">
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
              color: "#003865",
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
              color: "#003865",
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
              color: "#003865",
              fontSize: "8px",
              fontWeight: "normal",
            }}
          >
            &nbsp;
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            style={{
              fontFamily: "'Helvetica', 'Arial', sans-serif",
              color: "#003865",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            <a
              style={{ textDecoration: "underline", color: "#003865" }}
              href={`tel:${phoneNumber}`}
            >
              <font face="'Helvetica', 'Arial', sans-serif">{phoneNumber}</font>
            </a>
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            style={{
              fontFamily: "'Helvetica', 'Arial', sans-serif",
              color: "#003865",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            <a
              style={{ textDecoration: "underline", color: "#003865" }}
              href={`mailto:${emailAddress}`}
            >
              <font face="'Helvetica', 'Arial', sans-serif">
                {emailAddress}
              </font>
            </a>
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            style={{
              fontFamily: "'Helvetica', 'Arial', sans-serif",
              color: "#003865",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            <font face="'Helvetica', 'Arial', sans-serif">
              100 <span style={{ display: "none" }}> -</span>Lexington
              <span style={{ display: "none" }}> -</span> Street, Suite 400
            </font>
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            style={{
              fontFamily: "'Helvetica', 'Arial', sans-serif",
              color: "#003865",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            <font face="'Helvetica', 'Arial', sans-serif">
              Fort <span style={{ display: "none" }}> -</span>Worth,
              <span style={{ display: "none" }}> -</span> TX 76102
              <span style={{ display: "none" }}> -</span>
            </font>
          </td>
        </tr>
        <tr>
          <td
            width="100%"
            style={{
              fontFamily: "'Helvetica', 'Arial', sans-serif",
              color: "#003865",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            <a
              style={{ textDecoration: "underline", color: "#003865" }}
              href="https://urgomedical.us"
            >
              <font face="'Helvetica', 'Arial', sans-serif">
                urgomedical.us
              </font>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default GeneratedSignature;
