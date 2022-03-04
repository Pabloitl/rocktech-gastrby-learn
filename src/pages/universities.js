import Anchor from "../components/anchor";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";

export default function Universities() {
  const universities = useStaticQuery(graphql`
    {
      allUniversities {
        edges {
            node {
                name
            }
        }
      }
    }
  `)

    console.log(universities);

  return (
      <Layout>
      <h2 className="text-lg text-center">List of Universities</h2>
      <div className="flex justify-center p-5 text-center align-center">
        <img
          alt="Books"
          src="https://sbooks.net/wp-content/uploads/2021/10/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg"
        />
      </div>
      <ul className="p-4 text-center">
        {universities.allUniversities.edges.map((university, index) => {
          return (
            <li key={index}>
              <Anchor to={`/universities/${university.node.name}`}>
                {university.node.name}
              </Anchor>
            </li>
          );
        })}
      </ul>
      </Layout>
  );
}
