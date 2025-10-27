import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Section title="Sobre Mim">
          <p>
            Sou técnico em Desenvolvimento de Sistemas formado pela ETEC Elias
            Nechar. Tenho facilidade em aprender novas tecnologias, sou
            organizado, comunicativo e apaixonado por tecnologia. Busco aplicar
            meus conhecimentos para resolver problemas e criar soluções
            funcionais. Atualmente, estou me aprimorando em desenvolvimento web
            e sistemas embarcados.
          </p>
        </Section>

        <Section title="Formação Acadêmica">
          <p>ETEC Elias Nechar – Técnico em Desenvolvimento de Sistemas (2024)</p>
        </Section>

        <Section title="Cursos">
          <ul>
            <li>“O que é Git e GitHub” – 2h (28/05/2024)</li>
            <li>“Introdução ao Arduino” – 2h (15/05 a 16/05/2024)</li>
          </ul>
        </Section>

        <Section title="Habilidades Técnicas">
          <ul>
            <li>PHP, HTML, Python, Arduino</li>
            <li>Git e GitHub (básico)</li>
            <li>VS Code, Arduino IDE</li>
            <li>Pacote Office, Windows</li>
            <li>Design básico com Canva</li>
          </ul>
        </Section>

        <Section title="Competências Pessoais">
          <ul>
            <li>Boa comunicação e atendimento ao público</li>
            <li>Organização e responsabilidade</li>
            <li>Facilidade de aprendizado</li>
          </ul>
        </Section>

        <Section title="Projetos">
          <div className="projects">
            <ProjectCard
              title="Projeto Exemplo"
              description="Um exemplo de aplicação em HTML e Arduino."
              link="https://github.com/brunobaio"
            />
          </div>
        </Section>

        <Section title="Contato">
          <p>
            Email:{" "}
            <a href="mailto:brunobaio65@gmail.com">brunobaio65@gmail.com</a>
          </p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/brunobaio" target="_blank">
              github.com/brunobaio
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/brunobaio"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/brunobaio
            </a>
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default App;
