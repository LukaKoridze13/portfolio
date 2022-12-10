import React from "react";

export default function ContactMe() {
  function email() {
    window.open("mailto:lukakoridze13@gmail.com", "_blank");
  }
  return (
    <button
      className="mt-16 pb-4 border-b-2 border-green-600 font-bold tracking-widest z-30 relative"
      onClick={email}>
      CONTACT ME
    </button>
  );
}
