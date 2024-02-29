import * as React from 'react';
import MainFeaturedPost from './MainFeaturedPost';


const postTechnology = {
    title: 'Technology',
    description:
      "Section technology",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };
  

export default function ComposantTechnology (props)
{
    return ( 
        <main>
          <MainFeaturedPost post={postTechnology} />
        </main>
    );

}