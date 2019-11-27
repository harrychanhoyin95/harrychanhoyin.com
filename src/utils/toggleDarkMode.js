const toggleDarkMode = (mode, setMode) => {
  mode === 'light' ? setMode('dark') : setMode('light');
};

export default toggleDarkMode;
