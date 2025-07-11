import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const articleData = {
  1: {
    title: 'The Power of Creativity',
    content: 'Full article content for The Power of Creativity...',
  },
  2: {
    title: 'Confidence in Competitions',
    content: 'Full article content for Confidence in Competitions...',
  },
  3: {
    title: 'Celebrating Indian Culture',
    content: 'Full article content for Celebrating Indian Culture...',
  },
  4: {
    title: 'Why Talent Needs a Stage',
    content: 'Full article content for Why Talent Needs a Stage...',
  },
  5: {
    title: 'Empowering Youth',
    content: 'Full article content for Empowering Youth...',
  },
  6: {
    title: 'Bridging Tradition with Modernity',
    content: 'Full article content for Bridging Tradition with Modernity...',
  },
  7: {
    title: 'Digital Expression for All',
    content: 'Full article content for Digital Expression for All...',
  },
  8: {
    title: 'Creativity in Classrooms',
    content: 'Full article content for Creativity in Classrooms...',
  },
  9: {
    title: 'The Power of Creativity',
    content: 'Full article content for The Power of Creativity...',
  },
  10: {
    title: 'Confidence in Competitions',
    content: 'Full article content for Confidence in Competitions...',
  },
  11: {
    title: 'Celebrating Indian Culture',
    content: 'Full article content for Celebrating Indian Culture...',
  },
  12: {
    title: 'Why Talent Needs a Stage',
    content: 'Full article content for Why Talent Needs a Stage...',
  },
  13: {
    title: 'Empowering Youth',
    content: 'Full article content for Empowering Youth...',
  },
  14: {
    title: 'Bridging Tradition with Modernity',
    content: 'Full article content for Bridging Tradition with Modernity...',
  },
  15: {
    title: 'Digital Expression for All',
    content: 'Full article content for Digital Expression for All...',
  },
  16: {
    title: 'Creativity in Classrooms',
    content: 'Full article content for Creativity in Classrooms...',
  },
};

function ArticlePage() {
  const { id } = useParams();
  const article = articleData[id];

  if (!article) return <p>Article not found</p>;

  return (
    <>
      <Navbar />
      <main style={{ padding: '40px', maxWidth: '900px', margin: 'auto' }}>
        <h1>{article.title}</h1>
        <p>{article.content}</p>
      </main>
      <Footer />
    </>
  );
}

export default ArticlePage;
