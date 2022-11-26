import React from 'react';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function Female() {
  const [users] = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);
  let pages = [];

  const femaleStudents = users.filter((userObj) => {
    return userObj.gender == 'female';
  });

  const handlePrev = () => {
    if (currentPage === 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage === Math.floor(totalPost / postPerPage)) {
      setCurrentPage(Math.floor(totalPost / postPerPage));
    } else {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  let currentPosts = femaleStudents.slice(firstPostIndex, lastPostIndex);
  const totalPost = femaleStudents.length;

  for (let i = 1; Math.ceil(i <= totalPost / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className="display_wrapper">
        <div className="displayUsers">
          {currentPosts.map((user, index) => {
            const { email, picture, name, gender, location, dob, ...rest } =
              user;
            return (
              <figure key={`${name}${index}`}>
                <img
                  className="userImage"
                  src={picture.medium}
                  alt={`${name.title} ${name.first}'s pic`}
                />
                <figcaption>
                  <h3>
                    {name.title} {name.first} {name.last}
                  </h3>
                  <p>
                    <span>{gender}</span> - {dob.age}
                  </p>
                  <p>{location.country}</p>
                  <p>{email}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
        <div className="page_btns_div">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1 ? true : false}
          >
            <span>&#171;</span> Prev
          </button>
          {pages.map((page, index) => {
            return (
              <button
                className={page === currentPage ? 'page_btn_active' : ''}
                key={index}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            );
          })}
          <button
            onClick={handleNext}
            disabled={
              currentPage === Math.floor(totalPost / postPerPage) ? true : false
            }
          >
            Next <span>&#187;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Female;
