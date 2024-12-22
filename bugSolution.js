```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldCleanUp, setShouldCleanUp] = useState(true);

  useEffect(() => {
    // This effect runs after every render
    console.log('Component rendered:', count);
    return () => {
      // Cleanup function only runs if shouldCleanUp is true
      if (shouldCleanUp) {
        console.log('Component unmounting');
      }
    };
  }, [count, shouldCleanUp]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleUnmount = () => {
    setShouldCleanUp(false); 
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleUnmount}>Unmount</button>
    </div>
  );
}
```