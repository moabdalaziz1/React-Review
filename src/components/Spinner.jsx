import BeatLoader from 'react-spinners/BeatLoader';

const override = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '100px auto',
};

const Spinner = ({ loading }) => {
  return (
    <BeatLoader 
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={30}
      speedMultiplier={1}
    />
  );
};

export default Spinner;
