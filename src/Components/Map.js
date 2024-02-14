import React from "react";

const MapIframe = () => {
  return (
    <iframe
      title="Bajka Hotel & Resort Map"
      width="100%"
      height="500px"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2527.3815425712555!2d18.283011376460728!3d50.694303871639775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710fbb68b890299%3A0xa8418c563147e3f6!2sBajka%20Hotel%20%26%20Resort%20%2F%20Restauracja%20Bajka!5e0!3m2!1spl!2spl!4v1705432023032!5m2!1spl!2spl"
      style={{ border: "0" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapIframe;
