import React from "react";
import Layout from "../components/Layout";
import { FC } from "react";

const About: FC = () => {
  return (
    <Layout page="about" title="Test Station">
      <div>
        <div className="card w-75">
          <div className="card-header">About</div>
          <div className="card-body d-flex flex-column align-items-center">
            <div>Copyright &copy; 2020 Mikhail Chernorutsky</div>
            <div>
              <a href="https://github.com/r47717" target="_blank">
                https://github.com/r47717
              </a>
            </div>
            <div className="images d-flex flex-wrap align-items-center justify-content-center">
              <a href="https://getbootstrap.com" target="_blank">
                <img src="/img/bootstrap.jpg" alt="" />
              </a>
              <a href="https://yarnpkg.com" target="_blank">
                <img src="/img/yarn.jpg" alt="" />
              </a>
              <a href="https://reactjs.org" target="_blank">
                <img src="/img/react.png" alt="" />
              </a>
              <a href="https://nextjs.org" target="_blank">
                <img src="/img/nextjs.png" alt="" />
              </a>
              <a href="https://nodejs.org" target="_blank">
                <img src="/img/nodejs.png" alt="" />
              </a>
              <a href="https://jamstack.org" target="_blank">
                <img src="/img/jamstack.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* language=CSS */}
      <style jsx>{`
        .images img {
          display: inline-block;
          margin: 30px;
          width: 150px;
          height: auto;
        }

        .card {
          box-shadow: 10px 10px 10px #777777;
          border: none;
        }
      `}</style>
    </Layout>
  );
};

export default About;
