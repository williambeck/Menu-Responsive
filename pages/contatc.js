import { useState } from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';

function Contato() {

   

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Site sobre ..." />
                <meta name="author" content="William Beck" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <title>WB - Contact</title>
            </Head>
            <Menu />

            <section className='top'>
                <div className='max-width'>
                    <div className='top-content'>
                        <div className='text-2'>Contact</div>                  
                    </div>
                </div>
            </section>

            

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="custom.js"></script>
        </div>
    )
}

export default Contato;