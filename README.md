

## command line
1. npm create vite@latest tsc-in-react
2. npm install
3. prettier file 
4. npm run dev
5. GitHub repo 
6. .gitignore file
7. initialized / updated 

### input component
- reusable components with styles and markup 

### props 
all the function components comes with props object 

### spread operator in input component 
`{ label, id, ...props }` // all the other props spreading here. 
` <input id={id} {...props} /> `

### merging a type object in react
- & ComponentPropsWithoutRef<>. it's a generic type. 
- & ComponentPropsWithRef 
- those come with generic type where we can use all the elements of HTML by using. 
- & ComponentPropsWithoutRef<"button"> // html button
- & ComponentPropsWithoutRef<"input"> // html input
- & ComponentPropsWithoutRef<"a"> // html anchor/link

### why it is used -ComponentPropsWithoutRef<>
- to merge with another type to bring all the props of the elements which includes with that type. 
- it brings/holds the default props of the elements.
- it accepts one of the build elements 
- it is for custom component 
- 

### 'in' operator return boolean
```
function isAnchorProp(props: ButtonProps | AnchorProps): {
  return 'href' in props;
}
```

### type predicate  `props is AnchorProps`
``` 
function isAnchorProp(props: ButtonProps | AnchorProps): props is AnchorProps {
return 'href' in props;
}
```


### ElementType 
- it use for name of the component type. 

### ReactNode 
- it is used for jsx code or raw text that can be output 



### related Type 
this is a type or name of the element from which we want to get all the default props. 

### ref={} 
- it is a special ref{} supported by react. 
- it helps to forward the ref to another component. 
- it comes by merging & ComponentPropsWithRef<'input'> but we will not use it. 
- we will use forward() function in the component




### polymorphic wrapper component:
- it will be used to share some common JSX code, logic, or styling.
- it is pretty much always use for a wrapper component.
- it is made without knowing in advance what component will wrap.
- it can be used for receiving the component that should be returned as props.


### Examples: More Component Ideas
With the concepts covered thus far, you're already able to build some interesting non-trivial components in a type-safe way.



Here are some examples:

A Card Component That Has Multiple "Slots"

Full code (with example usage): https://github.com/academind/react-typescript-course-resources/blob/main/examples/Card.tsx

A reusable Card component that does not just accept the children prop but instead also accepts an actions prop which receives JSX as value.

It may be used like this:
``` 
<Card
title="My Card"
actions={
<button onClick={() => console.log('Button clicked!')}>
Click Me!
</button>
}
>
  <p>Some content</p>
</Card>
```
A Button Component That Accepts Text & An Icon

Full code (with example usage): https://github.com/academind/react-typescript-course-resources/blob/main/examples/IconButton.tsx

A reusable IconButton component which will output text side-by-side next to a configurable icon (or actually any component). It accepts an icon prop which wants a component identifier as a value.

It may be used like this:

<IconButton icon={HeartIcon} onClick={() => console.log('Button clicked!')}>
Like
</IconButton>
A Generic List Component

Full code (with example usage): https://github.com/academind/react-typescript-course-resources/blob/main/examples/List.tsx

A reusable List component which outputs an <ul> that wraps a list that may output any kind of value (strings, numbers, objects, ...). The component accepts the items as a prop as well as a renderItem prop that expects to get a function that controls how each item should be rendered.

It may be used like this:

``` <main>
  <section>
    <h2>Users</h2>
    <List
      items={users}
      renderItem={(user) => <li key={user.id}>{user.name}</li>}
    />
  </section>
  <section>
    <h2>Hobbies</h2>
    <List
      items={hobbies}
      renderItem={(hobby) => <li key={hobby}>{hobby}</li>}
    />
  </section>
</main>
```