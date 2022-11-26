import React from 'react';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/users.css';

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [display, setDisplay] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);
  let pages = [];

  useEffect(() => {
    requestUsers();
  }, []);
  async function requestUsers() {
    const response = await fetch('https://randomuser.me/api/?results=51');
    if (response.ok) {
      const usersData = await response.json();
      setUsers(usersData.results); //an array
      setLoading(false);
    } else {
      const message = `An error has occurred: ${response.status}`;
      console.error(message);
    }
  }
  const handleNested = () => {
    setDisplay(false);
  };
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
  let currentPosts = users.slice(firstPostIndex, lastPostIndex);
  const totalPost = users.length;
  for (let i = 1; Math.ceil(i <= totalPost / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="User_page">
      <div className="user_page_intro">
        <h1>The Oracle School Students</h1>
        <p>
          Our Outstanding students are Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Hic quasi nobis odio error veritatis nesciunt
          blanditiis? Fugiat facere quia hic?
        </p>

        <nav className="nested_nav">
          <Link className="nested_links" onClick={handleNested} to={'female'}>
            Female Students
          </Link>
          <Link className="nested_links" onClick={handleNested} to={'male'}>
            Male Students
          </Link>
        </nav>
      </div>
      {loading ? (
        <div style={{ height: '70vh' }}>
          <h1 style={{ textAlign: 'center' }}>Loading...</h1>
        </div>
      ) : (
        <div className="display_wrapper">
          <div className="displayUsers">
            {currentPosts.map((user, index) => {
              const { email, picture, name, gender, location, dob, ...rest } =
                user;
              return (
                <figure
                  key={`${name}${index}`}
                  style={{ display: display ? 'block' : 'none' }}
                >
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
          <div
            className="page_btns_div"
            style={{ display: display ? 'flex' : 'none' }}
          >
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
                currentPage === Math.floor(totalPost / postPerPage)
                  ? true
                  : false
              }
            >
              Next <span>&#187;</span>
            </button>
          </div>
        </div>
      )}
      <Outlet context={[users]} />
    </div>
  );
}

export default Users;