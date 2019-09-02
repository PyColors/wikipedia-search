import React from 'react';

const ImgPropositions = ({ images }) => {

  let defaultImg = 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/206px-Wikipedia-logo-v2.svg.png';

  const imagesList = images.length ? (
    images.map(img => {
      return (
        <figure key={img.pageid}>
          <img src={img.thumbnail ? img.thumbnail.source : defaultImg} alt={img.title} />
          <figcaption>{img.title}</figcaption>
        </figure>
      )
    })
  ) : (
    <p className="content-proposition__information">No images have been found yet</p>
  )

  return (
      <React.Fragment>
        <div className="content-proposition">
          {imagesList}
        </div>
      </React.Fragment>
  )
}

export default ImgPropositions;
