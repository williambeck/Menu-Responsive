import Head from 'next/head';
import Menu from '../components/Menu';


function Home() {
    return (
        <div>
            <Head>
                <title>WB - About Us</title>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' />
            </Head>
            <Menu />

            <section className='top'>
                <div className='max-width'>
                    <div className='top-content'>                        
                        <div className='text-2'>About Us</div>                       
                    </div>
                </div>
            </section>
            
            

            <div>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script src="custom.js"></script>
            </div>

        </div>
    )
}

export default Home;