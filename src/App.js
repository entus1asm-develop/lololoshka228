import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import { Title, Input } from './components/CommonComponets/CommonComponents';
import ToggleText from './components/ToggleText/ToggleText';
import SquareToggle from './components/SquareToggle/SquareTogle';
import ShowMoreText from './components/ShowMoreText/ShowMoreText';
import DropdownButton from './components/DropdownButton/DropdownButton';
import Rating from './components/Rating/Rating';

const menuItems = [
  { title: 'Главная', link: '/' },
  { title: 'Новости', link: '/news' },
  // Добавьте другие пункты меню по необходимости
];

function App() {
  return (
    <div className="App">
<div>
      <Header logo="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.edigitalagency.com.au%2Flogos%2Fnew-mcdonalds-logo-png%2F&psig=AOvVaw2X_rdkmVLg-cLszndH3ks7&ust=1705569089289000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiPuZ6K5IMDFQAAAAAdAAAAABAS" siteName="God damn boy" />
      <Nav menuItems={menuItems} />
      <Title text="Заголовок" size="24px" color="red" />
      <Input type="text" placeholder="Введите текст" value="" />
      <ToggleText />
      <SquareToggle />
      <ShowMoreText text="Текст с несколькими предложениями." />
      <DropdownButton buttonText="Открыть меню" subItems={['Пункт 1', 'Пункт 2', 'Пункт 3']} />
      <Rating maxStars={5} selectedStars={1} />
      <Footer />
    </div>
    </div>
  );
}

export default App;
