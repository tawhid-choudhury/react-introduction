# Assignment 7

This Assignment is done by **TAWHID AL MUHAMIN CHOUDHURY**. It was assigned by **Programming Hero** as the first assignment using React library.

### Question: Add at least 3 Project features:

**Project Features:**

- In this project, we created a dynamic web-page that can fetch data from API. Currently it is using a fake API.
- We can dynamically add courses to cart, along with the courses price and credit hours.
- We can also check if a course is being added more than two times, and restrict users from doing that.
- Checking credit limit is also integrated. The web page does not allow user to add more than 20 credit hours.
- All course addition success and failure is shown using toasts.

### Question: Discuss how you managed the state in your assignment project.

**State management:**

States are objects that hold the value for components. Each time a state changes, the components re-renders. Hooks are used to manage states in react. This project uses two hooks to manage states. They are:

- useEffect
- useState

**useEffect:** useEffect is a hook which runs a callback function called side-effect, when a given dependencies change. This project uses useEffect to load data when the page is initially loaded in the browser. the following code is used in [Course.jsx](./src/components/Courses/Courses.jsx).

```
 useEffect(() => {
        fetch("courses.json")
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
```

in this code snippet, the dependencies are empty because we want to fetch the data from api for the first time the page loads in the browser. The callback function fetches the json data then parses it to object the sets the course state to the fetched data.

**useState:** useState is a hook that is used to sat values that rerender the component as they update. This project has used useState many times.

IN [App.jsx](./src/App.jsx):

```
    const [cart,setCart] = useState([]);
    const [creditRemaining, setCreditRemaining ] = useState(20);
    const [creditTaken,setCreditTaken] = useState(0);
    const [price,setPrice] = useState(0);
```

IN [Courses.jsx](./src/components/Courses/Courses.jsx):

```
    const [courses, setCourses] = useState([]);
```

Since react has one way data flow, it is impossible for child components to update any value in their parent component without use state. for example in this project [Course.jsx](./src/components/Course/Course.jsx) passed the selected course to its parent [Courses.jsx](./src/components/Courses/Courses.jsx), which passed the object to its parent [App.jsx](./src/App.jsx). Futhermore, [App.jsx](./src/App.jsx) passed the object, total credit taken, total credit remaining and price to [Cart.jsx](./src/components/Cart/Cart.jsx) to add it to cart. If all this was passed down using regular variables then the react virtual dom would not update the value every time it changed.

These were the main state management actions taken in this project.
