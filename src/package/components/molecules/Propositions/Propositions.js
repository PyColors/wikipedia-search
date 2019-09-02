import React from 'react';

const Propositions = ({ results }) => {

  const resultsList = results.length ? (
    results.map(result => {
      return (
        <div key={result.pageid} className="content-proposition">
          <div className="mui--text-subhead">{result.title}</div>
        </div>
      )
    })
  ) : (
    <p className="content-proposition__information">Notting has been found yet</p>
  )
  return (
      <React.Fragment>
        {resultsList}
      </React.Fragment>
  )
}

export default Propositions;
