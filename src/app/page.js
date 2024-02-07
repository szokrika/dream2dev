import styles from './page.module.css';
import Nav from './components/Nav';
import Section from './components/Section';
import Banner from './components/Banner';
import PromoText from './components/PromoText';
import PromoImage from './components/PromoImage';
import Footer from './components/Footer';
import Button from './components/Button';
import { Fragment } from 'react';

const textPromo = [
  {
    title: 'Website Design',
    text: "We craft visually stunning websites that are optimized for user experience, ensuring your business stands out in today's digital landscape.",
  },
  {
    title: 'User Experience',
    text: 'We prioritize user experience in everything we do, creating websites that engage, inform, and delight your audience.',
  },
  {
    title: 'Web Development',
    text: 'Out expert web developers build robust and scalable websites that are optimized for performance and security.',
  },
  {
    title: 'E-Commerce Solutions',
    text: 'We specialize in building e-commerce platforms that are designed to convert and scale with your business.',
  },
];
const imagePromo = [
  {
    title: 'Boosting conversions',
    text: 'We help you increase your sales. Learn how!',
    image: '/image1.jpg',
    link: { href: '/services', text: 'Learn more' },
  },
  {
    title: 'Mobile ready',
    text: 'Our services are mobile-friendly. Learn more!',
    image: '/image2.png',
    link: { href: '/services', text: 'Learn more' },
    layout: 'right',
  },
  {
    title: 'SEO optimized',
    text: 'We help you rank higher in search engines. Learn more!',
    image: '/image1.jpg',
    link: { href: '/services', text: 'Learn more' },
  },
];

export default function Home() {
  return (
    <Fragment>
      <Nav />
      <main className={styles.main}>
        <Section title="">
          <Banner
            title="Welcome to Dream2Dev!"
            // subtitle="We help you grow your business!"
            description="We provide a variety of services to help you grow your business. Get started by learning more about us, our services, or by getting in touch with us."
            link={{
              href: '/about',
              text: 'Learn more',
            }}
            image={{
              src: '/banner.jpg',
              alt: 'A person working on a computer',
            }}
          />
        </Section>
        <Section title="Services we provide" columns={2}>
          {textPromo.map((promo, i) => (
            <PromoText key={i} {...promo} />
          ))}
        </Section>
        <Section title="Promo images">
          {imagePromo.map((promo, i) => (
            <PromoImage key={i} {...promo} />
          ))}
        </Section>
      </main>
      <Footer />
    </Fragment>
  );
}
