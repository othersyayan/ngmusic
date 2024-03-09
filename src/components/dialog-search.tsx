import { Dialog, Box, Typography } from '@mui/material';
//
import SearchForm from '@/sections/form/search-form';

// ----------------------------------------------------------------------

type Props = {
  open: boolean;
  handleClose: () => void;
};

export default function DialogSearch({ open, handleClose }: Props) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      sx={{
        bgcolor: 'rgba(0, 0, 0, 0.65) !important',
      }}
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          overflowY: 'hidden',
        },
      }}
    >
      <Box sx={{ p: 3, minHeight: 300, textAlign: 'center', minWidth: 400 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: 'white', fontWeight: 900 }}
        >
          Search
        </Typography>
        <SearchForm handleAfter={handleClose} />
      </Box>
    </Dialog>
  );
}
