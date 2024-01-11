import React from "react";
// import logo from "../img/agency-hab-logo-50.png";
import facebookIcon from "../img/facebook.png";
import tiktokIcon from "../img/tiktok.png";
import instagramIcon from "../img/instagram.png";
import linkedinIcon from "../img/linkedin.png";

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
      style={{
        borderCollapse: "separate",
        borderSpacing: "8px",
      }}
    >
      <tr>
        {/* Top Left Quadrant: Logo */}
        <td>
          <img
            src={employeeImage}
            alt="Agency Habitat"
            style={{
              objectFit: "cover",
              overflow: "hidden",
              display: "block",
              borderRadius: "30px",
            }}
            width="215"
          />
        </td>

        {/* Top Right Quadrant: Social Media Icons */}
        <td
          style={{
            textAlign: "left",
            borderRadius: "30px",
            overflow: "hidden",
            background: "#f5f0eb",
            padding: "0 20px",
          }}
        >
          {/* Align them in a row */}
          <a href="https://agencyhabitat.com">
            <img
              src="https://agencyhabitat.com/wp-content/uploads/2023/11/agency-hab-logo-50.png"
              alt="Agency Habitat Logo"
              border="0"
              width="150"
            />
          </a>
          {phoneNumber && (
            <p
              className="hide-if-no-phone-number"
              style={{
                borderTop: "1px solid rgba(0,0,0,0.1)",
                margin: "8px 0",
              }}
            ></p>
          )}
          <p
            style={{
              fontSize: "14px",
              margin: 0,
              fontFamily: "Arial, Helvetica, sans-serif",
              color: "#070F0B",
            }}
          >
            {phoneNumber}
          </p>
          <p
            style={{
              borderTop: "1px solid rgba(0,0,0,0.1)",
              margin: "8px 0",
            }}
          ></p>
          <a
            href="agencyhabitat.com"
            style={{
              fontSize: "14px",
              fontFamily: "Arial, Helvetica, sans-serif",
              margin: "0",
              textDecoration: "none !important",
              display: "inline-block",
              textTransform: "uppercase",
              color: "#070F0B",
            }}
          >
            agencyhabitat.com
          </a>
          <p
            style={{
              borderTop: "1px solid rgba(0,0,0,0.1)",
              margin: "6px 0",
            }}
          ></p>
          <div
            style={{
              paddingTop: "5px",
              textAlign: "center",
            }}
          >
            <a
              href="https://www.linkedin.com/company/agencyhabitat/"
              style={{
                textDecoration: "none",
              }}
            >
              <img src={linkedinIcon} alt="LinkedIn" width="35" border="0" />
            </a>
            <a
              href="https://www.tiktok.com/@agencyhabitat"
              style={{
                textDecoration: "none",
              }}
            >
              <img src={tiktokIcon} alt="TikTok" width="35" border="0" />
            </a>

            <a
              href="https://www.instagram.com/agencyhabitat/"
              style={{
                textDecoration: "none",
              }}
            >
              <img src={instagramIcon} alt="Instagram" width="35" border="0" />
            </a>
            <a
              href="https://www.facebook.com/agencyhabitat"
              style={{ textDecoration: "none" }}
            >
              <img src={facebookIcon} alt="Facebook" width="35" border="0" />
            </a>
          </div>
        </td>
      </tr>
      <tr>
        {/* Bottom Left Quadrant: Personal Info */}
        <td
          colspan="2"
          style={{
            padding: "20px",
            borderRadius: "30px",
            backgroundColor: `${color}`,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "24px",
              fontFamily: "Arial, Helvetica, sans-serif",
              color: "#2C2C2A",
              fontWeight: "300",
            }}
          >
            {fullName}
          </p>
          <p
            style={{
              margin: "10px 0 0 0",
              fontSize: "14px",
              fontFamily: "Arial, Helvetica, sans-serif",
              color: "#2C2C2A",
              textTransform: "uppercase",
            }}
          >
            {jobTitle}
          </p>
        </td>
      </tr>
    </table>
  );
}

export default GeneratedSignature;
