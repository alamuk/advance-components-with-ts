// this is a wrapper component
import {
  type ComponentPropsWithoutRef,
  type FormEvent,
  useImperativeHandle,
  useRef,
  forwardRef,
} from 'react';

export type FormHandle = {
  clear: () => void;
};
// type FormProps = ComponentPropsWithoutRef<'form'>;

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps },
  ref,
) {
  const form = useRef<HTMLFormElement>(null);
  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log('Clearing');
        form.current?.reset();
      },
    };
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // data.name = does not work here.
    // data.get('name'); need to use
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    // data.name = work here.
    onSave(data);
    // formRef.current?.reset(); // also we can use // formRef.current.clear() in where form is used.
  }
  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
});

export default Form;
