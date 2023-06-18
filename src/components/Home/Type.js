import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Técnico Mecánico",
          "Ingeniero Mecánico Electricista",
          "PMP Project Manager",
          "Profesional Dinámico",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
