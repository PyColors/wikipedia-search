import React from 'react';
import renderer from 'react-test-renderer';
import Propositions from './Propositions';

const props = {
    pages: [
      {
        "pageid": 32908,
        "ns": 0,
        "title": "Warsaw",
        "index": 8,
        "thumbnail": {
        "source": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Pa%C5%82ac_Na_Wyspie_w_Warszawie%2C_widok_na_elewacj%C4%99_po%C5%82udniow%C4%85.jpg/250px-Pa%C5%82ac_Na_Wyspie_w_Warszawie%2C_widok_na_elewacj%C4%99_po%C5%82udniow%C4%85.jpg",
        "width": 250,
        "height": 167
        },
        "terms": {
        "description": [
          "capital and largest city of Poland"
        ]
      }
      }
    ]
  };

it('should renders correctly', () => {
  const tree = renderer
    .create(<Propositions {...props} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
