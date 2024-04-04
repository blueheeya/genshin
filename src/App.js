/* eslint-disable */
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  const header = Header();
  const footer = Footer();
  return (
    <>
      <div>{header}</div>
      <div>{footer}</div>
    </>
  );
}

export default App;
