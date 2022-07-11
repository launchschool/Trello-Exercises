import React from "react";
import { Link } from "react-router-dom";

const UISection = () => {
  const LINK_FILES = [
    "All Boards",
    "Card Archived",
    "Card Editing Description",
    "Card",
    "Copy Card Popover",
    "Create Board",
    "Due Date Popover",
    "Labels Popover",
    "Move Card Popover",
    "Single Board"
  ];
  const links = LINK_FILES.map(link => {
    let formattedLink = link.split(" ");
    formattedLink[0] = formattedLink[0].toLowerCase();
    formattedLink = formattedLink.join("");
    return (
      <p style={{ marginTop: "1em" }}>
        <Link
          to={`/ui/${formattedLink}`}
          style={{
            color: "white",
            marginBottom: "5px",
            display: "inline-block",
            textDecoration: "none"
          }}
        >
          {link}
        </Link>
        <br />
      </p>
    );
  });
  return (
    <section
      style={{ margin: "0 auto", maxWidth: "1250px", padding: "30px 20px" }}
    >
      <h1 style={{ fontWeight: "bold", fontSize: "1.5em" }}>
        Choose a static Template
      </h1>

      {links}
    </section>
  );
};

export default UISection;
