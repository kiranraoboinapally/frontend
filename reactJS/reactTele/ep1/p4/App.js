const App = () => {
  return React.createElement('h1', { id: 'header' }, 'Welcome to ReactDOM');
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
