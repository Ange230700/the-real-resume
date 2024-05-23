import { Link } from "react-router-dom";

function Resume() {
  return (
    <main className="resume-wrapper">
      <section className="title">
        <h1>Développeur full-stack</h1>
      </section>
      <section className="contact">
        <h3>Contact</h3>
        <div className="contact-wrapper">
          <div className="basic-contact-info">
            <p>Ange KOUAKOU</p>
            <p className="mail">
              <a href="mailto:kouakouangeericstephane@gmail.com">
                kouakouangeericstephane@gmail.com
              </a>
            </p>
            <p className="phone-number">
              <a href="tel:+33751524188">+33 7 51 52 41 88</a>
            </p>
            <p>44000 Nantes</p>
          </div>
          <div className="socials-wrapper">
            <div className="socials">
              {/* <!-- <img
                class="socials-logo"
                src="./assets/svg/github.svg"
                alt="github"
              /> --> */}
              <p>
                <Link
                  className="socials-link-text"
                  to="https://github.com/Ange230700"
                >
                  https://github.com/Ange230700
                </Link>
              </p>
            </div>
            <div className="socials">
              {/* <!-- <img
                class="socials-logo"
                src="./assets/svg/linkedin.svg"
                alt="linkedin"
              /> --> */}
              <p>
                <Link
                  className="socials-link-text"
                  to="https://www.linkedin.com/in/ange-kouakou/"
                >
                  https://www.linkedin.com/in/ange-kouakou/
                </Link>
              </p>
            </div>
            <div className="socials">
              {/* <!-- <img
                class="socials-logo"
                src="./assets/svg/linkedin.svg"
                alt="linkedin"
              /> --> */}
              <p>
                <Link className="socials-link-text" to="/">
                  {" "}
                </Link>
              </p>
            </div>
            {/* <!-- <div class="socials">
              <img
                class="socials-logo"
                src="./assets/svg/portfolio-link.svg"
                alt="portfolio link"
              />
              <p>
                <a class="socials-link-text" href=""
                  >Link to my portfolio website</a
                >
              </p>
            </div> --> */}
          </div>
        </div>
      </section>
      <section className="description">
        <h3>Description</h3>
        <p className="description-text">
          Je dispose de solides bases dans les technologies frontend et backend.
          J'ai contribué à la réalisation de projets web en employant des
          pratiques modernes pour de meilleures performance et une bonne
          expérience utilisateur. Mon objectif est de mettre mes compétences à
          profit pour participer à des solutions innovantes et impactantes.
        </p>
        <section className="competences">
          <h3>Compétences</h3>
          <h4>&nbsp;&nbsp;&nbsp;&nbsp;Compétences techniques</h4>
          <ul className="competences-techniques-list">
            <li className="competences-techniques-list-item">React</li>
            <li className="competences-techniques-list-item">Express</li>
            <li className="competences-techniques-list-item">Node</li>
            <li className="competences-techniques-list-item">MySQL</li>
            <li className="competences-techniques-list-item">Git</li>
            <li className="competences-techniques-list-item">SCSS</li>
            <li className="competences-techniques-list-item">
              Figma - UX / UI
            </li>
            <li className="competences-techniques-list-item">JWT</li>
            <li className="competences-techniques-list-item">REST API</li>
            <li className="competences-techniques-list-item">
              SCRUM (Jira / Trello)
            </li>
            <li className="competences-techniques-list-item">VS code</li>
          </ul>
          <h4>&nbsp;&nbsp;&nbsp;&nbsp;Soft skills</h4>
          <ul className="soft-skills-list">
            <li className="soft-skills-list-item">Travail en équipe</li>
            <li className="soft-skills-list-item">Autonomie</li>
            <li className="soft-skills-list-item">Adaptabilité</li>
            <li className="soft-skills-list-item">Gestion du temps</li>
          </ul>
        </section>
      </section>
      <section className="experiences">
        <h3>Expériences</h3>
        <h4>• Réalisation d'un service de contenus vidéo</h4>
        <ul className="experiences-list">
          <li className="experiences-list-item">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Permettre aux
            utilisateurs d'accéder à une grande variété de contenus vidéo
          </li>
          <li className="experiences-list-item">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Implémenter le
            filtrage via une barre de recherche et la catégorisation des vidéos
          </li>
          <li className="experiences-list-item">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Intégrer
            l'authentification des utilisateurs pour un accès sécurisé et
            personnalisé.
          </li>
          <li className="experiences-list-item">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Administrer la
            base de données pour une gestion optimale des contenus via une
            interface d'administration
          </li>
        </ul>
        <h4>
          • Réalisation d'une application permettant d'accéder à des radios du
          monde entier
        </h4>
        <ul className="experiences-list">
          <li className="experiences-list-item">
            &nbsp;&nbsp;&nbsp;&nbsp;- Récupérer la liste des stations radios via
            une API existante
          </li>
          <li className="experiences-list-item">
            &nbsp;&nbsp;&nbsp;&nbsp;- Implémenter le filtrage par nom de
            station, pays et genre de radio
          </li>
          <li className="experiences-list-item">
            &nbsp;&nbsp;&nbsp;&nbsp;- Implémenter le contrôle de lecture des
            radios
          </li>
        </ul>
        <h4>
          • Réalisation d'une application de localisation de restaurants autour
          du campus de la Wild Code School
        </h4>
        <ul className="experiences-list">
          <li className="experiences-list-item">
            &nbsp;&nbsp;&nbsp;&nbsp;- Afficher la liste des restaurants de la
            zone avec les informations nécessaires
          </li>
          <li className="experiences-list-item">
            &nbsp;&nbsp;&nbsp;&nbsp;- Implémenter le filtrage via une barre de
            recherche
          </li>
          <li className="experiences-list-item">
            &nbsp;&nbsp;&nbsp;&nbsp;- Intégrer la carte de Google Maps via une
            API permettant de localiser les restaurants
          </li>
        </ul>
      </section>
      <section className="formation">
        <h3>Formation</h3>
        <ul className="formation-list">
          <li className="formation-list-item">
            <p className="formation-title-and-school">
              Bootcamp Développement Web |
              <span className="school">Wild Code School</span>
            </p>
            <p className="formation-date">09/2023 - 02/2024</p>
          </li>
          <li className="formation-list-item">
            <p className="formation-title-and-school">
              Bachelor informatique |
              <span className="school">Ynov Campus de Nantes</span>
            </p>
            <p className="formation-date">09/2022 - 04/2023</p>
          </li>
          <li className="formation-list-item">
            <p className="formation-title-and-school">
              Prépa informatique intégrée - année 2 |
              <span className="school">CESI Toulouse</span>
            </p>
            <p className="formation-date">09/2021 - 05/2022</p>
          </li>
          <li className="formation-list-item">
            <p className="formation-title-and-school">
              Formation ingénieur électronique embarqué - année 1 |
              <span className="school">CESI Toulouse</span>
            </p>
            <p className="formation-date">10/2020 - 04/2021</p>
          </li>
          <li className="formation-list-item">
            <p className="formation-title-and-school">
              Prépa technologique intégrée - année 2 |
              <span className="school">CESI Saint-Nazaire</span>
            </p>
            <p className="formation-date">09/2019 - 05/2020</p>
          </li>
          <li className="formation-list-item">
            <p className="formation-title-and-school">
              Cycle Préparatoire Scientifique - 2 ans |
              <span className="school">LFBP Abidjan, Côte d'Ivoire</span>
            </p>
            <p className="formation-date">09/2017 - 06/2019</p>
          </li>
        </ul>
      </section>

      {/* <!-- <section class="hobbies">
        <h3>Hobbies</h3>
      </section> --> */}
    </main>
  );
}

export default Resume;
