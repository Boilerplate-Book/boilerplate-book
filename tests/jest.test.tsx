import { render } from '@testing-library/react'

type Props = { message: string }
const StubComponent: React.FC<Props> = ({ message }) => {
  return <div>{message}</div>
}

describe('Jest', () => {
  it('should work', () => {
    const message = 'Hello World'
    const { container } = render(<StubComponent message={message} />)
    expect(container.innerHTML).toContain(message)
  })
})
