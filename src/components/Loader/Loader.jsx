import Box from 'components/Box';
import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Box display="flex" justifyContent="center" pt={10}>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#5b5f67"
        barColor="#fbc500"
      />
    </Box>
  );
};
