import { fireEvent, render, screen } from '@testing-library/react';

import TextField from './TextField';

const context = describe

describe('TextField', () => {
  const text = 'Tester'
  const setText = jest.fn()

  beforeEach(() => {
    setText.mockClear()
    //또는 jest.clearAllMocks()
  })

  function renderTextField(){
    render((
      <TextField
        label="Name"
        placeholder='="Input your name'
        text={text}
        setText={setText} />
    ))
  }

  it('renders an input', () => {
    renderTextField()
    expect(screen.getByLabelText(/Name/)).toBeInTheDocument();
  });

  context('when user types text',()=>{
    it('calls the change handler', ()=>{
      renderTextField()
      fireEvent.change(screen.getByLabelText('Name'),{
        target:{
          value:'New Name',
        }
      })
      expect(setText).toBeCalledWith('New Name')
    })
  })
});
