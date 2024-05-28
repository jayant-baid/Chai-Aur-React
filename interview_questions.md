## Counter App Ques
**What will happen if we add multiple setCounter(cnt+1) in addValue func?**

useState send the UI updates in batches, and as react fiber is algo behind it, while processing it will see, if you are doing the same work with same values, it will treat as one and thus here it is incrementing only once. 

Now, for the second scenario, where we are using prevCounter it gives the current or existing state, as it is the result of callback which will execute every time.

```js
const addValue = () => {
  setCounter(counter + 1);
  setCounter(counter + 1);
  setCounter(counter + 1);
  setCounter(counter + 1);
  };
```

it's called state as a snapshot. When we write setCounter(counter+1) multiple times it is updated only once because in the onclick handler of that render, even after calling setCounter(counter + 1) multiple times the value of the counter is 0, because after our event handler finishes, then React re-renders the component. useState batches me updated karta h, not single single leta h. So jb abhi iska batch aaega, tb counter li value same hi rhegi

```js
const addValue = () => {
  setCounter((prevCounter) => prevCounter+1);
  setCounter((prevCounter) => prevCounter+1);
  setCounter((prevCounter) => prevCounter+1);
  setCounter((prevCounter) => prevCounter+1);
  };
```
Isme cnt will be increased by 4, because isme woh counter ki prev value le rha h and then setCounter. **setCounter me callBack func**

setCounter batches me update karta h