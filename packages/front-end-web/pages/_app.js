import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import '../itscss/index.scss';

class FindMusicianBuddy extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <title>Find-Musician-Buddy</title>
                    <link rel="shortcut icon" href="/images/music-player.png" />
                </Head>
                <Component {...pageProps} />
                {/* <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
            </>
        );
    }
}

export default FindMusicianBuddy;
