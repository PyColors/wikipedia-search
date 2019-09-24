import React from 'react';

const InfosPropositions = ({ articles }) => {

  const infosList = articles.length ? (
    
    articles.map(article => {
      return (
        <p key={article.pageid}>
           <p>{article.title}</p>
        </p>
      )
    })
  ) : (
    <p className="content-proposition__information">Notting has been found yet</p>
  )

  return (
      <React.Fragment>
        <div className="content-proposition">
          {infosList}
        </div>
      </React.Fragment>
  )
}

export default InfosPropositions;
