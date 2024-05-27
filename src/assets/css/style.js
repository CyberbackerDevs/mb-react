import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Typography from '@mui/material/Typography';
import DialogContentText from '@mui/material/DialogContentText';
import Autocomplete from '@mui/material/Autocomplete';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
// import { treadmill } from 'ldrs';
import React from 'react';

// Register the custom element if it's not already registered
// if (typeof customElements.get('l-treadmill') === 'undefined') {
//     treadmill.register();
// }

// Styled components
export const StyledDraggableCard = styled('div')(({ theme, isDragging }) => ({
  opacity: isDragging ? 0.5 : 1,
  padding: '15px',
  margin: '10px 0',
  backgroundColor: '#303030',
  color: '#FFF',
  cursor: 'move',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  border: '1px solid #444',
  transition: 'box-shadow 0.3s ease-in-out',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '20px',
  backgroundColor: '#1976d2',
  '&:hover': {
    backgroundColor: '#155a9b',
  },
}));

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: '#424242',
  color: '#FFF',
}));

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  '& .MuiAccordionSummary-expandIcon': {
    color: '#FFF',
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    backgroundColor: '#333',
    color: '#FFF',
  },
  '& .MuiInputLabel-root': {
    color: '#FFF',
  },
}));

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: '#424242',
    color: '#FFF',
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 8,
  top: 8,
  color: theme.palette.grey[500],
}));

export const StyledColumn = styled('div')(({ theme }) => ({
  width: '250px',
  height: '100vh',
  backgroundColor: '#f4f4f4',
  borderRadius: '8px',
  padding: '10px',
  marginRight: '15px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
}));

export const StyledColumnHeader = styled('div')(({ theme }) => ({
  fontWeight: 'bold',
  color: '#333',
  textAlign: 'center',
  marginBottom: '20px',
  padding: '10px',
  backgroundColor: '#f4f4f4',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  borderBottom: '1px solid #ccc',
}));

export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  marginBottom: '20px',
  backgroundColor: '#2a2a2a',
  color: 'white',
  borderRadius: '4px',
  '& .MuiInputBase-root': {
    color: 'white',
    borderColor: '#333',
  },
  '& .MuiInputLabel-root': {
    color: 'gray',
  },
}));

export const StyledColumnBody = styled('div')(({ theme }) => ({
  overflowY: 'auto',
  flexGrow: 1,
}));

export const LoadingIndicatorContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
}));

// export const LoadingIndicator = () => (
//   <LoadingIndicatorContainer>
//     <l-treadmill size="150" speed="1.25" color="black"></l-treadmill>
//   </LoadingIndicatorContainer>
// );

// Styled components for DeleteModal
export const ModalContainer = styled('div')({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1050, 
  background: '#FFF',
  padding: '30px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  color: '#333',
  textAlign: 'center', 
  width: 'auto',
  maxWidth: '500px', 
  animation: 'appear 300ms ease-out forwards', 
});

export const Overlay = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: 1040, 
  animation: 'fadeIn 300ms ease-out forwards', 
});

export const ConfirmButton = styled('button')({
  padding: '10px 20px',
  margin: '10px',
  borderRadius: '5px',
  border: '2px solid #d9534f',
  cursor: 'pointer',
  transition: 'all 200ms',
  fontWeight: 'bold',
  backgroundColor: '#d9534f', 
  color: 'white',
  '&:hover': {
    backgroundColor: '#c9302c',
  },
});

export const CancelButton = styled('button')({
  padding: '10px 20px',
  margin: '10px',
  borderRadius: '5px',
  border: '2px solid #6c757d',
  cursor: 'pointer',
  transition: 'all 200ms',
  fontWeight: 'bold',
  backgroundColor: '#6c757d', 
  color: 'white',
  '&:hover': {
    backgroundColor: '#5a6268',
  },
});

// Styled components for LinearProgressWithLabel
export const LinearProgressContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const LinearProgressBar = styled(LinearProgress)({
  width: '100%',
  marginRight: '8px',
});

export const LinearProgressLabel = styled(Box)({
  minWidth: '35px',
});

export const LinearProgressWithLabel = ({ value }) => {
  return (
    <LinearProgressContainer>
      <LinearProgressBar variant="determinate" value={value} />
      <LinearProgressLabel>
        <Typography variant="body2" color="textSecondary">{`${Math.round(value)}%`}</Typography>
      </LinearProgressLabel>
    </LinearProgressContainer>
  );
};

// Export icons and typography
export {
  PhoneIcon,
  EmailIcon,
  MessageIcon,
  TextSnippetIcon,
  Typography,
  DialogActions,
  DialogContent,
  DialogTitle,
  CloseIcon,
  ExpandMoreIcon,
  AccordionDetails,
  DialogContentText,
  Autocomplete,
};
