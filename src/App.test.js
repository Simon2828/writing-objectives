import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import LearningObjective from './LearningObjective';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Learning Objective renders a learning objective and its steps to success', () => {

// arrange
  const lO = "Write an ending" //how to deal with state in tests - mock it??

  const mockState = {state: {location}}



  console.log({mockState})


// act
  const learningObjectiveComponent = renderer.create(<LearningObjective state={mockState}/>);
  let tree = learningObjectiveComponent.toJSON();

// assert
  expect(tree).toMatchSnapshot();
})

// 