import Head from 'next/head';
import styles from './style.module.scss';
import Header from "../components/Header";
import Product from "../components/Product";

const product = {
  id: 1,
  images: [
    {
      image: '/img/image-product-1.jpg',
      thumbnail: '/img/image-product-1-thumbnail.jpg',
    },
    {
      image: '/img/image-product-2.jpg',
      thumbnail: '/img/image-product-2-thumbnail.jpg',
    },
    {
      image: '/img/image-product-3.jpg',
      thumbnail: '/img/image-product-3-thumbnail.jpg',
    },
    {
      image: '/img/image-product-4.jpg',
      thumbnail: '/img/image-product-4-thumbnail.jpg',
    },
  ],
  company: 'SNEAKER COMPANY',
  name: 'Fall Limited Edition Sneakers',
  description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  price: 125,
  originalPrice: 250,
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport"
              content="width=device-width, initial-scale=1.0"
        />

        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
        <meta name="description"
              content={process.env.NEXT_PUBLIC_DESCRIPTION}
        />

        <meta name="description"
              content={process.env.NEXT_PUBLIC_DESCRIPTION}
        />

        <meta property="og:url"
              content={process.env.NEXT_PUBLIC_URL}
        />
        <meta property="og:type"
              content="website"
        />
        <meta property="og:title"
              content={process.env.NEXT_PUBLIC_TITLE}
        />
        <meta property="og:description"
              content={process.env.NEXT_PUBLIC_DESCRIPTION}
        />
        <meta property="og:image"
              content={process.env.NEXT_PUBLIC_OG_IMAGE}
        />

        <meta name="twitter:card"
              content="summary_large_image"
        />
        <meta property="twitter:url"
              content={process.env.NEXT_PUBLIC_URL}
        />
        <meta name="twitter:title"
              content={process.env.NEXT_PUBLIC_TITLE}
        />
        <meta name="twitter:description"
              content={process.env.NEXT_PUBLIC_DESCRIPTION}
        />
        <meta name="twitter:image"
              content={process.env.NEXT_PUBLIC_OG_IMAGE}
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>

      <Header />

      <main>
        <section>
          <Product {...product} />
        </section>
      </main>
    </div>
  )
}
