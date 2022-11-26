import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home() {
  return (
    <div>
      <section className="home-conatiner">
        <div className="school_vision">
          <h1>Oracle School Teachers Portal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            aliquam mollitia ab id nostrum repellat assumenda laborum at.
            Temporibus laborum, esse quis provident exercitationem non! Ducimus
            repudiandae autem repellendus eos sunt.
          </p>
        </div>

        <Link className="student_button" to={'/users'}>
          Students <span>&#8594;</span>{' '}
        </Link>

        <div className="events-div">
          <h2>Events</h2>
          <div className="events">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/multi-ethnic-people-discussing-financial-strategy-with-remote-collegue-working-company-presentation-during-online-videocall-meeting-conference-startup-office-business-call-computer-screen_482257-30577.jpg?w=740&t=st=1667030160~exp=1667030760~hmac=2b5f771813e29c9f0b7ac41f65058146111ab63b4ac0ebcd91c722e150f24c62"
                alt="PTA meeting"
              ></img>
              <figcaption>
                <h2>Meeting</h2>
                <p>Parents teacher meeting to hold on tuesday</p>
              </figcaption>
            </figure>
            <figure>
              <img
                src="https://img.freepik.com/free-photo/nurse-measuring-patient-blood-pressure_53876-14933.jpg?t=st=1667030386~exp=1667030986~hmac=debee05a8b1ca240594b754420b054996041c0929cdd32b6d5064d43bed75e5d"
                alt="free clinc"
              />
              <figcaption>
                <h2>Free Clinc</h2>
                <p>Free clinc day for teachers 30th october</p>
              </figcaption>
            </figure>
            <figure>
              <img
                src="https://img.freepik.com/free-photo/group-young-people-sitting-conference-together_58466-11188.jpg?t=st=1667030464~exp=1667031064~hmac=34d8333964f6ceacdb514353f62cf5a9fd00c8cf070be33591a8df0eb7277183"
                alt="trainig workshop"
              />
              <figcaption>
                <h2>Work Shop Trainig</h2>
                <p>Teacher workshop traning 2 months away!</p>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="latestNews-div">
          <h2>Latest News</h2>
          <div className="latestNews">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/smiling-african-girl-pointing-index-finger-fan-money-dollar-banknotes-cash-money-isolated-blue-turquoise-wall-background-people-sincere-emotions-lifestyle-concept-mock-up-copy-space_365776-5943.jpg?w=740&t=st=1667030542~exp=1667031142~hmac=21568882f0b3e8d8df12179ec1dd3182721257a4422f849dbd69e12e3a22ee04"
                alt=""
              />
              <figcaption>
                <h2>Arrears</h2>
                <p>Arrears will be paid soon</p>
              </figcaption>
            </figure>
            <figure>
              <img
                src="https://img.freepik.com/free-psd/top-view-timetable-with-mock-up-paper-clips_23-2148621652.jpg?w=740&t=st=1667030614~exp=1667031214~hmac=675260f90bdf8938b0ab05d0c71a0794b129658f9851f15d87c47a63fe23bef9"
                alt=""
              />
              <figcaption>
                <h2>Exams</h2>
                <p>Exam timetable draft out now!</p>
              </figcaption>
            </figure>
            <figure>
              <img
                src="https://img.freepik.com/free-vector/quiz-word-concept_23-2147844150.jpg?w=740&t=st=1667030754~exp=1667031354~hmac=07a916fbb320769965ce680db60e1b0e912e3c1286d49a4fd03be138fca7f726"
                alt=""
              />
              <figcaption>
                <h2>National Quiz</h2>
                <p>Invitation Invitaion Invitaion!</p>
              </figcaption>
            </figure>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quod
          porro repudiandae laboriosam, ab quibusdam magni voluptatum,
          asperiores expedita corporis quia fugiat voluptates consequuntur error
          dicta et optio commodi officiis! Atque nulla recusandae tempore maxime
          enim nisi quidem iste quia iure. Doloribus iste dolor quos laudantium
          consequuntur! Sequi sapiente rerum totam, repellendus nobis iste quasi
          minima deleniti voluptas veniam placeat! Totam sequi dicta nobis rerum
          ipsum odio, incidunt numquam harum, ullam quaerat quidem praesentium
          unde saepe illum animi, ad reprehenderit labore. Temporibus earum
          tempore iste quisquam distinctio numquam vel perspiciatis! Dolores
          voluptates aliquid consectetur numquam quod iusto excepturi corporis
          beatae a dolor, quidem adipisci blanditiis nostrum sapiente deserunt.
          Nisi eum minima nulla aut ullam iure consectetur aliquid placeat at
          natus? Quisquam at neque, eum fuga distinctio soluta nisi fugiat sequi
          repellat? Consequatur quaerat optio aut deleniti adipisci nesciunt
          vero, magni magnam totam delectus at fugit soluta non pariatur. Quo,
          numquam?
        </p>
      </section>
    </div>
  );
}

export default Home;