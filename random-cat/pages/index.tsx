'use client';
import { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import styles from './index.module.css';
import Image from 'next/image';

type Props = {
  initialImageUrl: string;
};

const IndexPages: NextPage<Props> = ({ initialImageUrl }) => {
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // fetchImage().then((newImage) => {
  //   //   setImageUrl(newImage.url);
  //   //   setLoading(false);
  //   // });
  //   handleClick();
  //   console.log('初回.');
  // }, []); // 第2引数が空の配列なのは、このコンポーネントがマウントされた時のみに実行するという意味.

  const handleClick = async () => {
    setLoading(true);
    const newImage = await fetchImage();
    setImageUrl(newImage.url);
    setLoading(false);
  };

  return (
    <div className={styles.page}>
      <button onClick={handleClick} className={styles.button}>
        他の猫を見る
      </button>
      <div className={styles.frame}>
        {loading || (
          <Image src={imageUrl} alt="cat_image" className={styles.img} width={400} height={400} />
        )}
      </div>
    </div>
  );
};

export default IndexPages;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const image = await fetchImage();
  return {
    props: {
      initialImageUrl: image.url,
    },
  };
};

type Image = {
  url: string;
};

const fetchImage = async (): Promise<Image> => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search');
  const images = await res.json();
  console.log(images);
  return images[0];
};
//////////////////////////////////////
