import React from "react";

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
      width="430"
      style={{ height: "10px" }}
    >
      <tbody>
        <tr>
          <td width="130" rowSpan="10">
            <p style={{ textAlign: "center" }}>
              <img
                width="110"
                className="logo"
                src="https://staging-agencyhabitat23-staging.kinsta.cloud/wp-content/uploads/2024/01/Abby-Cantwell_Dec2022_Cropped.png"
                // src={employeeImage}
                alt="Logo 1"
              />
            </p>

            <p>
              <img
                width="120"
                className="logo"
                src="https://staging-agencyhabitat23-staging.kinsta.cloud/wp-content/uploads/2024/01/URGO-logo-email_.png"
                alt="Logo 2"
              />
            </p>
          </td>
          <td
            width="5"
            rowSpan="10"
            style={{ borderRight: "1px solid #003865" }}
          >
            &nbsp;
          </td>

          <td width="12" rowSpan="10">
            &nbsp;
          </td>
        </tr>

        <tr>
          <td
            style={{
              fontWeight: "bold",
              fontFamily: "helvetica, sans-serif",
              color: "#003865",
              fontSize: "22px",
            }}
          >
            {fullName}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "helvetica, sans-serif",
              color: "#003865",
              fontSize: "16px",
              fontWeight: "normal",
            }}
          >
            {jobTitle}
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "helvetica, sans-serif",
              color: "#003865",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            Urgo Medical North America
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "helvetica, sans-serif",
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
            style={{
              fontFamily: "helvetica, sans-serif",
              color: "#003865",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            <a
              style={{ textDecoration: "underline", color: "#003865" }}
              href="tel:0000000000"
            >
              {phoneNumber}
            </a>
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "helvetica, sans-serif",
              color: "#003865",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            <a
              style={{ textDecoration: "underline", color: "#003865" }}
              href={`mailto:${emailAddress}`}
            >
              {emailAddress}
            </a>
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "helvetica, sans-serif",
              color: "#003865",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            100 Lexington Street, Suite 400
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "helvetica, sans-serif",
              color: "#003865",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            Fort Worth, TX 76102
          </td>
        </tr>
        <tr>
          <td
            style={{
              fontFamily: "helvetica, sans-serif",
              color: "#003865",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            <a
              style={{ textDecoration: "underline", color: "#003865" }}
              href="https://urgomedical.us"
            >
              urgomedical.us
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default GeneratedSignature;
