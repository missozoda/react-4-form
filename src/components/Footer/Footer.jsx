import React from 'react';

const Footer = ({theme}) => {
  return (
    <>
      <footer className={`${theme === "dark" ? "dark" : ""}  d-flex justify-content-between align-item-center`}>
        <h3 className="fs-2 fw-bold text-primary mx-5">Footer</h3>
        <p className='text-primary'>2022</p>
      </footer>
    </>
  );
};

export default Footer;