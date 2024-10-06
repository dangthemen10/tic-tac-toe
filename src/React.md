# ReactJS

## I. Kiến thức cơ bản về JavaScript và ES6+

Trước khi tìm hiểu ReactJS hay NextJS, Nên nắm vững JavaScript, đặc biệt là các tính năng của ES6+ như:

### 1. ES6+ features

<details>
<summary><h4>let/const</h4> </summary>

- `let`: Dùng để khai báo biến có thể thay đổi giá trị. Điểm khác biệt so với `var` là `let` chỉ tồn tại trong phạm vi của block.

```js
if (true) {
  let x = 10;
  console.log(x); // OK
}
console.log(x); // Lỗi vì x không tồn tại ngoài block
```

- `const`: Dùng để khai báo hằng số, không thể thay đổi giá trị sau khi gán lần đầu.

```js
const person = { name: 'Alice' };
person.name = 'Bob';  // OK

person = { name: 'Charlie' };  // Lỗi
```
</details>
<details>
<summary><h4>Arrow functions</h4> </summary>

- Arrow function là một tính năng mới của ES6, giúp viết code ngắn gọn hơn.
- Arrow function sử dụng khá ok trong các TH dùng: map, filter, reducer,...
- Arrow function không có bind.
- Arrow function không phù hợp là method của object.

```js
// Arrow function:
const arrowFunction = () => {
  console.log("Hellow");
};

/// =========== VD1: =============== //
const person = {
  name: 'Alice',
  age: 18,
  // Sử dụng arrow function
  getName: () => {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

// Gọi phương thức getName
person.getName(); // In ra: "Hello, my name is undefined and I am undefined years old."

// =========== VD2: =============== //
const person = {
  name: 'Alice',
  getName: function () {
    return console.log(this.name);
  },
};

// Ở đây this sẽ là object person
person.getName(); // 'Alice'

const getNamePerson = person.getName();

getNamePerson(); // getNamePerson is not a function -> this trỏ tới object window 

// Cách giải quyết: dùng bind để cho this trỏ tới object person.
const getNamePerson = person.getName.bind(person)
```

</details>

<details>
<summary><h4>Destructuring: </h4> </summary>

- Giúp lấy ra các giá trị từ object hoặc array.

```js
const person = { name: 'Alice', age: 30 };
const { name, age } = person;
```
</details>

<details>
<summary><h4>Spread/Rest Operators: </h4> </summary>

- Spread operator `(...)`: Dùng để trải các phần tử của array hoặc object. Giúp dễ dàng sao chép hoặc kết hợp chúng.

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]

const obj1 = { name: 'Alice' };
const obj2 = { ...obj1, age: 25 };  // { name: 'Alice', age: 25 }
```

- Rest operator `(...)`: Dùng để thu thập các đối số vào một array trong các hàm.

```js
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number);
}

console.log(sum(1, 2, 3));  // 6
console.log(sum(3, 3));  // 6
console.log(sum(1, 2, 3, 4, 5));  // 15
```

</details>

<details>
<summary><h4>Template Literals: </h4> </summary>

- Template literals dùng để nhúng biến và biểu thức vào chuỗi một cách dễ dàng, mà không cần dùng phép nối chuỗi "+".

```js
const name = "Alice"
const greeting = `Hello, ${name}!`;
```

</details>

<details>
<summary><h4>Classes: </h4> </summary>

- ES6 giới thiệu cú pháp `class` để định nghĩa các đối tượng và phương thức.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal('Dog');
dog.speak();  // "Dog makes a sound."
```

</details>

<details>
<summary><h4>Modules: </h4> </summary>

- Modules giúp chia nhỏ code thành các file riêng biệt và dùng cú pháp `import/export` để chia sẻ code giữa các file. Giúp quản lý code dễ dàng.

```js
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// app.js
import { add, subtract } from './math';
console.log(add(5, 3));  // 8
```

</details>

<details>
<summary><h3>2. DOM manipulation:</h3> </summary>

DOM (Document Object Model) là một mô hình đại diện cho toàn bộ cấu trúc của trang HTML dưới dạng cây. 
JavaScript có thể tương tác với các phần tử HTML thông qua DOM.

![DOM Tree](https://images.viblo.asia/full/54aa92df-82e9-479b-924f-4639143bda82.gif)

<ol>
    <li>Document Node (Root): Đại diện cho toàn bộ tài liệu HTML.</li>
    <li>Element Node: Đại diện cho các thẻ HTML.</li>
    <li>Attribute Node: Đại diện cho các thuộc tính của thẻ HTML.</li>
    <li>Text Node: Chứa văn bản trong thẻ HTML.</li>
    <li>Comment Node: Đại diện cho các chú thích (comments) trong tài liệu.</li>
</ol>

#### Tương tác với DOM

- Select elements: Sử dụng document.querySelector hoặc getElementById để chọn các phần tử trên trang.

```js
const button = document.querySelector('button');
```

- Modify elements: Thay đổi nội dung hoặc thuộc tính của phần tử.

```js
button.textContent = 'Click me';
button.style.color = 'blue';
```

- Event handling: Thêm sự kiện cho phần tử.

```js
button.addEventListener('click', () => {
  alert('Button clicked');
});
```

</details>

<details>
<summary><h3>Promises và Async/await:</h3></summary>

Để làm việc với asynchronous code, điều này sẽ rất hữu ích khi làm việc với API calls trong React.

</details>

## II. Bắt đầu với ReactJs

### 1. ReactJS là gì?

> React còn được gọi là ReactJS hoặc React.js, là 1 thư viện JavaScript mã nguồn mở dùng để xây dựng giao diện người dùng được phát triển bởi đội ngũ kỹ sư đến từ Facebook; nó được giới thiệu vào năm 2011, tuy nhiên đến năm 2013 mới được giới thiệu cho cộng đồng lập trình viên.

Nguyên lý xây dựng của React dựa trên components (component-based approach), có thể tái sử dụng và phù hợp với ứng dụng 1 trang (Single Page Application – SPA).
React giúp xây dựng giao diện người dùng dựa trên JSX (môt cú pháp mở rộng của JavaScript), tạo ra các DOM ảo (virtual DOM) để tối ưu việc render 1 trang web.

### 2. Tại sao nên sử dụng ReactJS?

#### 2.1 Ưu điểm của ReactJS

- Hiệu suất cao (High Performance): ReactJS sử dụng cơ chế Virtual DOM, giúp giảm thiểu thao tác trực tiếp với DOM thật, một trong những nguyên nhân làm chậm hiệu suất.
- Tái sử dụng component (Reusable Components): React cho phép xây dựng ứng dụng từ các component nhỏ, độc lập và có thể tái sử dụng. Điều này giúp tăng tốc độ phát triển, giảm thiểu sự lặp lại code, và dễ dàng duy trì, mở rộng ứng dụng.
- Cộng đồng lớn và hệ sinh thái mạnh mẽ.
- Hỗ trợ Server-Side Rendering giúp tối ưu SEO.
- Quản lý state hiệu quả với Hooks.
- Học dễ dàng và nhanh chóng (Easy to Learn): ReactJS chỉ tập trung vào view layer (giao diện) trong mô hình MVC, do đó dễ học hơn so với các framework toàn diện như Angular hoặc Vue.js. Chỉ cần có kiến thức về JavaScript và hiểu cơ bản về cách làm việc với DOM là có thể bắt đầu với React.

### 2.2 Nhược điểm của ReactJS

- Cập nhật liên tục, gây khó khăn trong việc theo kịp xu hướng.
- Tài liệu không nhất quán.
- Chỉ tập trung vào view layer, cần thêm thư viện khác cho các tính năng khác như routing (định tuyến) hay quản lý trạng thái phức tạp (như Redux).
- JSX có thể khó hiểu cho người mới.

### 3. Khái niệm cơ bản của ReactJS

#### 3.1 JSX (JavaScript XML)

- JSX là một cú pháp mở rộng cho JavaScript, cho phép viết mã HTML ngay trong file JavaScript mà không cần phải tách riêng các phần (VD: VueJS tách biệt giữa template với JS ).

```js
const name = "Dang"
const element = <h1>Hello, {name} </h1>;
```

##### Lý do sử dụng JSX trong React:

- JSX cho phép nhúng các biểu thức JavaScript vào trong cú pháp giống HTML. Điều này cho phép dễ dàng xử lý logic, vòng lặp, điều kiện và biến động dữ liệu một cách liền mạch ngay trong giao diện.
- JSX kết hợp cả logic JavaScript và cấu trúc HTML trong cùng một file, giúp dễ dàng quản lý, kiểm soát và phát triển ứng dụng.

##### Cách hoạt động của JSX

- Khi trình biên dịch React gặp JSX, nó sẽ biên dịch JSX thành các lời gọi hàm JavaScript để tạo ra các phần tử React. Ví dụ:

```js
const element = <h1>Hello, world!</h1>;
```

- Sẽ được biên dịch thành:

```js
const element = React.createElement('h1', null, 'Hello, world!');
```

- Sau đó, React sẽ sử dụng Virtual DOM để quản lý việc cập nhật giao diện một cách hiệu quả.

##### Cú pháp cơ bản của JSX

1. Viết thẻ HTML trong JavaScript: JSX cho phép viết các phần tử HTML như là một phần của code JavaScript.

    ```js
    const element = <h1>Hello, world!</h1>;
    ```

2. Chèn biểu thức JavaScript vào JSX: Nhúng các biểu thức JavaScript vào bên trong JSX bằng cách đặt trong cặp dấu ngoặc nhọn `{}`

    ```js
    const name = 'Đăng';
    const element = <h1>Hello, {name}!</h1>;
    ```

3. Thuộc tính (Props) trong JSX: có thể truyền các thuộc tính giống như trong HTML thông qua props. VD truyền một thuộc tính className (tương đương class trong HTML):

    ```js
    const element = <div className="container">Hello World!</div>;
    ```

    *Lưu ý trong JSX, sẽ sử dụng className thay vì class vì class là một từ khóa trong JavaScript.*

4. JSX cần một thẻ bao ngoài: Trong React, khi trả về nhiều phần tử từ một component, chúng phải được bọc trong một phần tử cha (parent element) duy nhất, chẳng hạn như `<div>`, hoặc sử dụng `React.Fragment (<>...</>)`:

    ```js
    return (
      <div>
        <h1>Hello!</h1>
        <p>Welcome to my page.</p>
      </div>
    );
    ```

    Hoặc sử dụng `Fragment`:

    ```js
    return (
      <>
        <h1>Hello!</h1>
        <p>Welcome to my page.</p>
      </>
    );
    ```

5. Điều kiện hiển thị (Conditional Rendering): Có thể sử dụng biểu thức JavaScript như toán tử điều kiện (`if`, `ternary operator`, `Logical AND operator &&`) để điều khiển việc hiển thị các phần tử trong JSX:

    ```js
    const isLoggedIn = true;
    return (
      <div>
        {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
      </div>
    );
    ```

6. Hiển thị Danh sách (Rendering Lists): Có thể sử dụng các hàm JavaScript như `map()` để lặp qua một danh sách và hiển thị các phần tử trong JSX:

    ```js
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>{number}</li>
    );

    return (
      <ul>{listItems}</ul>
    );
    ```

    Các phần tử JSX trực tiếp bên trong `map()` luôn cần có khóa. Rules of keys:
    - Khóa phải là duy nhất giữa các element
    - Khóa không được thay đổi

7. Định kiểu trực tiếp (Inline Styling): Có thể thêm CSS inline trong JSX thông qua thuộc tính style, nhưng phải viết kiểu CSS theo dạng object và các thuộc tính CSS sẽ được viết theo kiểu camelCase:

    ```js
    const divStyle = {
      color: 'blue',
      backgroundColor: 'lightgray',
    };

    return <div style={divStyle}>Styled text</div>;
    ```

#### 3.2 Component

Component là một trong những khái niệm cốt lõi của React.

React sử dụng kiến trúc dựa trên thành phần trong React có nghĩa là sẽ chia ứng dụng thành nhiều phần nhỏ hơn.

Mỗi component đảm nhận một nhiệm vụ cụ thể, và chúng hoạt động độc lập với nhau. Khi cần, có thể tái sử dụng các component này ở nhiều nơi khác nhau mà không cần phải viết lại từ đầu.

##### Loại Component trong React

- Có hai loại component chính ( Presentational Components & Container Components):
  - Functional Components
  - Class Components

1. Class Components (Hay còn gọi là Stateful Components):

   - Viết dưới dạng lớp (`class`) và hỗ trợ quản lý vòng đời của component.
   - Bắt buộc phải có phương thức `render()` để trả về JSX.

    ```js
    class Clock extends React.Component {
      constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }

      componentWillUnmount() {
        clearInterval(this.timerID);
      }

      tick() {
        this.setState({
          date: new Date()
        });
      }

      render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
    }
    ```

2. Functional Components (Hay còn gọi là Stateless Components):

   - Đây là loại component phổ biến nhất hiện nay, đặc biệt sau khi React giới thiệu Hooks.
   - Functional component là một hàm JavaScript trả về JSX.
   - Không có state và không sử dụng lifecycle methods.

    ```js
      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }
    ```

##### Child Component & Parent Component

- Trong React, có thể xây dựng các component phức tạp bằng cách lồng ghép các component nhỏ vào nhau. 
Component cha sẽ truyền props cho component con và điều khiển cách component con hoạt động.

  ```js
  function ChildComponent(props) {
    return <p>Hello, {props.name}</p>;
  }

  function ParentComponent() {
    return <ChildComponent name="Đăng" />;
  }
  ```

#### 3.3 State (Trạng thái)

- State là dữ liệu nội bộ của một component.
- State có thể thay đổi trong quá trình component hoạt động.
- Khi State thay đổi, React sẽ tự động cập nhật giao diện tương ứng mà không cần reload lại trang.

```js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

#### 3.4 Props (Thuộc tính)

- Props (viết tắt của "properties") là các thuộc tính được truyền từ component cha đến component con.
- Props giúp bạn chia sẻ dữ liệu giữa các component mà không làm ảnh hưởng đến tính độc lập của chúng.
- Props trong React tương tự như tham số truyền vào một hàm JavaScript.

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Welcome name="Đăng" />;
}
```

#### 3.5 Single-way Data binding (Luồng dữ liệu một chiều)

- React sử dụng cơ chế data binding một chiều, nghĩa là dữ liệu chỉ được truyền từ component cha xuống component con thông qua props.
- Điều này giúp việc quản lý dữ liệu và kiểm soát cũng như sửa lỗi dễ dàng.

![Single-way Data binding](https://miro.medium.com/v2/resize:fit:4800/format:webp/0*XlqKyWTnowWg4QLo.png)

#### 3.6 Virtual DOM

- Virtual DOM là một bản sao nhẹ của DOM thật, được giữ trong bộ nhớ.
- Khi React render các thành phần (components), Virtual DOM được tạo ra và lưu giữ trong bộ nhớ.
- Khi dữ liệu hoặc trạng thái của component thay đổi, React sẽ cập nhật Virtual DOM, so sánh nó với bản sao cũ (diffing), và chỉ cập nhật những phần cần thiết trên DOM thật. Điều này giúp cải thiện hiệu suất.

### 4. Handling Events

- Event Handling trong React là một khái niệm cơ bản giúp bạn quản lý các sự kiện người dùng như click, nhập liệu, di chuột... tương tự như trong JavaScript.
- React xử lý các sự kiện bằng cách sử dụng cú pháp camelCase (onClick, onLoad, onDoubleClick,...) và truyền hàm sự kiện trực tiếp trong JSX.
- Các trình xử lý sự kiện phải được truyền vào, không được gọi! onClick={handleClick}, không onClick={handleClick()}.
- Có thể xử lý sự kiện bằng cách truyền một hàm dưới dạng prop cho một phần tử như `<button>`.
- Các hàm trình xử lý sự kiện thường được định nghĩa bên trong các thành phần & có tên bắt đầu bằng `handle`, theo sau là tên của sự kiện.

```js
function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

### 5. Hooks

- Hooks mới được thêm ở phiên bản React 16.8.
- Hooks thường bắt đầu bằng prefix `use`
- Hooks cho phép sử dụng state và các tính năng khác của React mà không cần sử dụng Class Components.
- Các hook phổ biến gồm:
  - `useState`: Quản lý state trong functional component.
  - `useEffect`: Xử lý các side effects (các tác vụ ngoại vi như gọi API, thao tác với DOM) trong functional component.
  - `useContext` Quản lý global state

```js
import { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return <div>{data ? `Data: ${data}` : 'Loading...'}</div>;
}
```

#### 5.1 useState() – Quản lý state

- Công dụng: `useState` là Hook cơ bản nhất giúp bạn quản lý trạng thái trong functional components.
Nó trả về một mảng gồm hai phần tử: giá trị hiện tại của state và một hàm để cập nhật giá trị đó.

- Cú pháp: `const [state, setState] = useState(initialValue);`
  - `state`: Giá trị hiện tại của state.
  - `setState`: Hàm để thay đổi giá trị của state.
  - `initialValue`: Giá trị ban đầu của state.

  Example:

  ```js
  import { useState } from 'react';

  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
  ```

- Cơ chế re-render:
Mỗi khi gọi hàm setCount (hoặc bất kỳ hàm cập nhật state nào), React sẽ đánh dấu component tương ứng cần được re-render. 
Trong lần render mới, React sẽ sử dụng giá trị state cập nhật để hiển thị lại UI.

#### 5.2 useEffect() – Quản lý side effects

- Công dụng: `useEffect` là hook được sử dụng để xử lý side effects trong functional component. Side effects là các tác vụ mà không trực tiếp ảnh hưởng đến việc render UI, ví dụ như gọi API, thao tác với DOM, hoặc thiết lập bộ hẹn giờ (timers).
- `useEffect` nhận vào một hàm callback và tùy chọn là một mảng phụ thuộc (dependency array).
- Hàm callback sẽ được thực thi sau khi render.
- Cú pháp:

  ```js
    useEffect(() => {
      // Code chạy khi component mount hoặc update
      return () => {
        // Cleanup code (nếu có)
      };
    }, [dependencies]);
  ```

- Dependencies array:
  - Mảng các giá trị mà khi thay đổi sẽ kích hoạt effect.
  - Nếu không cung cấp mảng phụ thuộc, effect sẽ chạy lại sau mỗi lần render.
  - Nếu mảng phụ thuộc rỗng [], effect chỉ chạy một lần duy nhất khi component được render lần đầu.

- `useEffect` cần Cleanup: Khi `useEffect` tạo ra các side effects như đăng ký sự kiện, thiết lập timer, websocket connections hoặc bất kỳ tác vụ nào cần dọn dẹp để ngăn chặn rò rỉ tài nguyên, cần viết hàm cleanup để đảm bảo rằng các side effects được giải phóng khi component unmount hoặc trước khi effect mới chạy.
  
  Example:

  ```js
  import { useState, useEffect } from 'react';

  function TimerComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);

      // Cleanup: Dọn dẹp timer khi component unmount
      return () => {
        clearInterval(intervalId);
      };
    }, []); // Chỉ chạy một lần khi component mount

    return <div>Timer: {count}</div>;
  }
  ```

- useEffect không cần Cleanup: Khi side effect trong `useEffect` không tạo ra các resources cần dọn dẹp (cleanup), không cần phải viết hàm cleanup.

  Example:

  ```js
  import { useEffect, useState } from 'react';

  function DataFetcher() {
    const [data, setData] = useState(null);

    useEffect(() => {
      // Gọi API và cập nhật state khi có kết quả
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => setData(data));
    }, []); // Mảng phụ thuộc rỗng: chỉ gọi API một lần sau khi render lần đầu tiên

    return (
      <div>
        {data ? `Dữ liệu: ${data}` : 'Loading...'}
      </div>
    );
  }
  ```

#### 5.3 useContext – Quản lý global state

- Công dụng: `useContext` cho phép truy cập vào giá trị của Context mà không cần phải truyền props qua nhiều cấp component. Khi giá trị của Context thay đổi, tất cả các components sử dụng `useContext` sẽ được render lại để hiển thị giá trị mới.
- Cú pháp:

  ```js
  const value = useContext(MyContext);
  ```

  Example:

  ```js
  import React, { useState, useContext, createContext } from 'react';

  const ThemeContext = createContext();

  function App() {
    const [theme, setTheme] = useState('light');

    return (
      <ThemeContext.Provider value={theme}>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
        <Content />
      </ThemeContext.Provider>
    );
  }

  function Content() {
    const theme = useContext(ThemeContext);

    return <div>The current theme is {theme}</div>;
  }
  ```

#### 5.4 useReducer – Quản lý state phức tạp

- Công dụng: `useReducer` là một sự thay thế cho `useState` khi cần quản lý các logic thay đổi state phức tạp hơn. Nó hoạt động tương tự như redux khi sử dụng reducer functions.
- Cú pháp:

  ```js
  const [state, dispatch] = useReducer(reducer, initialState);
  ```
  
  - state: giá trị hiện tại sau mỗi lần xử lý một action.
  - dispatch: Hàm để gửi một action đến reducer. Khi gọi dispatch, nó sẽ kích hoạt reducer để tính toán lại state dựa trên action đó.
  - reducer: Là một hàm nhận vào hai tham số: state hiện tại và một action. Dựa vào action, hàm này sẽ trả về state mới.
  - initialState: Giá trị state ban đầu.

  Example:

  ```js
  import { useReducer } from 'react';

  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      </div>
    );
  }
  ```

#### 5.5 useRef – Truy cập DOM hoặc giữ giá trị không tái render

- Công dụng: `useRef` có thể được sử dụng để giữ tham chiếu đến DOM hoặc lưu trữ một giá trị mà không gây ra render lại khi giá trị đó thay đổi.
- Cú pháp:

  ```js
  const ref = useRef(initialValue);
  ```

  Example: Truy cập DOM element:

  ```js
  import { useRef, useEffect } from 'react';

  function FocusInput() {
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    }, []);

    return <input ref={inputRef} />;
  }
  ```

  Example: Lưu giá trị không gây render lại:

  ```js
  function Timer() {
    const count = useRef(0);

    useEffect(() => {
      const interval = setInterval(() => {
        count.current += 1;
        console.log(count.current);
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return <div>Open the console to see the timer</div>;
  }
  ```

#### 5.6 useMemo – Tối ưu hóa performance

- Công dụng: `useMemo` giúp ghi nhớ kết quả của một phép tính để tránh tính toán lại khi các giá trị phụ thuộc không thay đổi. Điều này giúp tối ưu hóa performance khi thực hiện các tính toán nặng.
- Cú pháp:
  
  ```js
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```

  Example:

  ```js
  import { useMemo, useState } from 'react';

  function ExpensiveComponent({ numbers }) {
    const sum = useMemo(() => {
      return numbers.reduce((acc, num) => acc + num, 0);
    }, [numbers]);

    return <div>Sum: {sum}</div>;
  }
  ```

#### 5.7 useCallback – Ghi nhớ hàm (function)

- Công dụng: `useCallback` giúp ghi nhớ một hàm để nó không bị tạo mới trong mỗi lần render, điều này hữu ích khi bạn truyền hàm xuống các component con.

- Cú pháp:
  
  ```js
  const memoizedCallback = useCallback(() => {
    doSomething(a, b);
  }, [a, b]);
  ```

  Example:

  ```js
  import { useState, useCallback } from 'react';

  function ParentComponent() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
      setCount((prev) => prev + 1);
    }, []);

    return <ChildComponent onIncrement={increment} />;
  }

  function ChildComponent({ onIncrement }) {
    return <button onClick={onIncrement}>Increment</button>;
  }
  ```

#### 5.8 Custom Hooks – Tái sử dụng logic

- Công dụng: Custom Hooks cho phép tái sử dụng logic giữa các components. Có thể tạo ra một Hook từ các Hooks khác để tổ chức code tốt hơn.

- Cú pháp: Custom hooks chỉ là các function bình thường, nhưng sử dụng các hooks bên trong nó.

  Example:

  ```js
  import { useState, useEffect } from 'react';

  function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
  }

  // Use
  function Component() {
    const width = useWindowWidth();

    return <div>Window width: {width}</div>;
  }
  ```

### 6. Render and Commit

Trước khi các thành phần của  được hiển thị trên màn hình, chúng phải được React xử lý:

#### Step 1: Trigger a render

Có hai lý do để một component render:

- Đây là lần render ban đầu của thành phần.
- Trạng thái của thành phần (hoặc một trong những tổ tiên của nó) đã được cập nhật.

#### Step 2: React renders your components

Sau khi kích hoạt render, React sẽ gọi các thành phần của bạn để tìm ra nội dung hiển thị trên màn hình. “Rendering” là React gọi các thành phần của bạn.

- Khi render ban đầu, React sẽ gọi root component.
- Đối với các lần render tiếp theo, React sẽ gọi hàm component mà việc cập nhật trạng thái đã kích hoạt render.

Quá trình này là đệ quy: nếu thành phần được cập nhật trả về một thành phần khác, React sẽ hiển thị thành phần đó tiếp theo, và nếu thành phần đó cũng trả về một cái gì đó, nó sẽ hiển thị thành phần đó tiếp theo, và cứ như vậy

#### Step 3: React cam kết thay đổi vào DOM

Sau khi kết xuất (gọi) các thành phần, React sẽ sửa đổi DOM.

- Đối với việc kết xuất ban đầu, React sẽ sử dụng `appendChild()` API DOM để đưa tất cả các nút DOM mà nó đã tạo ra lên màn hình.

- Đối với việc re-renders, React sẽ áp dụng các thao tác tối thiểu cần thiết (được tính toán trong khi kết xuất!) để làm cho DOM khớp với đầu ra kết xuất mới nhất.

### 7. References

- Hooks: https://react.dev/reference/react/hooks
- Rules of React: https://react.dev/reference/rules
- https://react.dev/
- https://legacy.reactjs.org/
