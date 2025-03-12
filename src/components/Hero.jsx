import React from 'react';

const Hero = () => {
    return (
        <section className="bg-base-200 py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-5xl font-bold mb-4">Hi, I'm Andrew Bush</h1>
                <p className="text-xl mb-8">
                    Sometimes I build innovative apps with React Native and TypeScript.
                </p>
                <a href="#about" className="btn btn-primary">
                    Learn More
                </a>
            </div>
        </section>
    );
};

export default Hero;
