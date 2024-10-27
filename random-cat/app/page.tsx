'use client';
import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const IndexPages: NextPage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImage().then((newImage) => {
      setImageUrl(newImage.url);
      setLoading(false);
    });
  }, []);

  const handleClick = async () => {
    setLoading(true);
    const newImage = await fetchImage();
    setImageUrl(newImage.url);
    setLoading(false);
  };

  return (
    <div>
      <button onClick={handleClick}>他の猫を見る</button>
      {loading || (
        <Image src={imageUrl} alt="cat picture" width={800} height={500} />
      )}
    </div>
  );
};

export default IndexPages;

type Image = {
  url: string;
};

const fetchImage = async (): Promise<Image> => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search');
  const images = await res.json();
  console.log(images);
  return images[0];
};
