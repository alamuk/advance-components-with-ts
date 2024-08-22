import Input from './components/Input.tsx';
import { useRef } from 'react';
import Button from './components/Button.tsx';
import Container from './components/Container.tsx';

export default function App() {
  const input = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input id="name" label="Your Name" type="text" />
      <Input id="age" label="Your age" type="number" />
      <p>
        <Button>A button </Button>
      </p>
      <p>
        <Button href="https://www.ihatslondon.co.uk">A Link</Button>
      </p>

      <Container as={Button}>Click Me</Container>
      <Input label="Test" id="test" ref={input} />
    </main>
  );
}
