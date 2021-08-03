import './Spinner.css';

// TODO: Use Material-UI
const Spinner = () => (
  <div style={styles.container}>
    <div className="loader">Loading...</div>
  </div>
);

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default Spinner;
