import '../assets/styles/scss/home.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="homeBody">
            <section className="star-wars">
                <div className="crawl">
                    <div className="title">
                        <p>Episode I:</p>
                        <h1>The Chronicles Awaken</h1>
                    </div>
                    <p>In a realm of endless stars and boundless adventures, the story of the Star Wars saga unfolds. This is the chronicle of epic battles, heroic sacrifices, and the enduring struggle between light and darkness. Our encyclopedia is your gateway to the intricate universe of the first six Star Wars films, where each entry is a step deeper into the rich lore of the Galactic Empire, the Rebel Alliance, the Jedi, and the Sith.</p>
                    <p>Here, you will find the stories of legendary heroes like Luke Skywalker and Princess Leia, the rise and fall of the chosen one, Anakin Skywalker, and the sinister machinations of Emperor Palpatine and Darth Vader. Uncover the secrets of the Force, explore distant planets, and delve into the epic confrontations that have shaped the fate of the galaxy.</p>
                    <p>Whether you are a seasoned fan or a newcomer to this timeless saga, our encyclopedia provides a comprehensive and immersive experience. May the Force be with you as you embark on your journey through the legendary universe of Star Wars.</p>
                    <p>Welcome, and let the adventure begin…</p>
                </div>
            </section>
            <div className="fade"></div>
        </div>
    )
}

export default Home;
