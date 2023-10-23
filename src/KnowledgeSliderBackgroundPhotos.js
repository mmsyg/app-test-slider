import React from 'react';
import data from './assets/datta.json'

const KnowledgeSliderBackgroundPhotos = (props) => {

    const que = data.knowledgeSlider.filter(questionx => questionx.id === props.id);
    return (  <div className="gallery_bg">
<img className='gallery1' src={que[0].img[0].source} alt="gal1"/>


    </div> );
}
 
export default KnowledgeSliderBackgroundPhotos;