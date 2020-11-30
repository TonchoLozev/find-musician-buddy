import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import { END } from 'redux-saga';

import { wrapper } from '../store/index';

import '../itscss/index.scss';

class FindMusicianBuddy extends App {
    getInitialProps = async ({ Component, ctx }) => {
        // 1. Wait for all page actions to dispatch
        const pageProps = {
            ...(Component.getInitialProps
                ? await Component.getInitialProps(ctx) : {}),
        };

        // 2. Stop the saga if on server
        if (ctx.req) {
            console.log('Saga is executing on server, we will wait');
            ctx.store.dispatch(END);
            await (ctx.store).sagaTask.toPromise();
        }

        // 3. Return props
        return {
            pageProps,
        };
    };

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

export default wrapper.withRedux(FindMusicianBuddy);
