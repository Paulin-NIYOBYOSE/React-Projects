import "./App.css";


function App() {
  return(
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New item</label>
          <input type="text" id="item"/>
        </div>
        <button className="btn">this is a button</button>
      </form>
      <h1 className="header">To do list</h1>
      <ul>
        <li>
          <label htmlFor="item">Item 1</label>
          <button>Delete</button>
        </li>
        <li>
          <label htmlFor="">Item 1</label>
          <button>Delete</button>
        </li>
      </ul>
    </>
  );
}
export default App; 
