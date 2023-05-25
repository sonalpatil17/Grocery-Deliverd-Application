import React from "react";

export default function Hero4({ children, hero4 }) {
  return <header className={hero4}>{children}</header>;
}

Hero4.defaultProps = {
  hero4: "defaultHero4"
};