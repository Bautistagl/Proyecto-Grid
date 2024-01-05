import dynamic from 'next/dynamic';
import Footer from '@/components/index/Footer';
import { useInView } from 'react-intersection-observer';
import Article from '@/components/blog/Article';

const DynamicNavbar = dynamic(() => import('../components/index/Navbar'), {
  ssr: false,
  loading: () => <p> Im f</p>,
});

export default function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.7, // Percentage of element visibility to trigger the animation
  });
  const fadeInStylesLeft = {
    opacity: 1,
    transform: 'translateX(-50px)',
    transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
  };
  return (
    <>
      <div className="container-homePrincipal">
        <DynamicNavbar />
        <div className="banner-container3">
          <div style={{ marginTop: '150px' }} className="titulo-asic2">
            {' '}
            Grid Cloud Blog
          </div>
        </div>
        <div className='grid-articles'>
            <Article
                title='Why pay for Heroku/Render/Fly.io when you have AWS credits?'
                foto='/netero.jpg'
                author='SpectroGL'
                date='January 04,2024'
                time='5 min read'
            />
             <Article
                title='Why pay for Heroku/Render/Fly.io when you have AWS credits?'
                foto='/netero.jpg'
                author='SpectroGL'
                date='January 04,2024'
                time='5 min read'
            />
             <Article
                title='Why pay for Heroku/Render/Fly.io when you have AWS credits?'
                foto='/netero.jpg'
                author='SpectroGL'
                date='January 04,2024'
                time='5 min read'
            />
             <Article
                title='Why pay for Heroku/Render/Fly.io when you have AWS credits?'
                foto='/netero.jpg'
                author='SpectroGL'
                date='January 04,2024'
                time='5 min read'
            />

        </div>

        <Footer />
      </div>
    </>
  );
}
