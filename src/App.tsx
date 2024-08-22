import Input from './components/Input.tsx';
import { useRef } from 'react';
import Button from './components/Button.tsx';
import Container from './components/Container.tsx';
import Form, { type FormHandle } from './components/Form.tsx';

export default function App() {
  // const input = useRef<HTMLInputElement>(null);

  const customFormRef = useRef<FormHandle>(null);
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData); //number of the value also will be a string here when extracted.
    customFormRef.current?.clear();
  }
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
      {/*<Input label="Test" id="test" ref={input} />*/}
      <Form onSave={handleSave} ref={customFormRef}>
        <Input id="name" label="Name" type="text" />
        <Input id="age" label="Age" type="number" />
        <p>
          <Button> Save </Button>
        </p>
      </Form>
    </main>
  );
}
