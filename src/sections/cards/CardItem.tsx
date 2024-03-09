'use client';

// @mui
import {
  Card,
  Chip,
  Grid,
  Box,
  Stack,
  Typography,
  CardContent,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
//
import Image from 'next/image';
import RouterLink from '@/hooks/routes/router-link';

// ----------------------------------------------------------------------

type Props = {
  data: Item[];
  loading: boolean;
  handleLoadMore: () => void;
};

export type Item = {
  artistName: string;
  trackName: string;
  trackViewUrl: string;
  artworkUrl100: string;
  trackPrice: number;
  releaseDate: string;
  currency: string;
  primaryGenreName: string;
};

export default function CardItem({ data, loading, handleLoadMore }: Props) {
  return (
    <Grid container spacing={3}>
      {data.length ? (
        data.map((v, i) => (
          <Grid item key={i} xs={12}>
            <Card sx={{ borderRadius: 2 }}>
              <CardContent sx={{ paddingBottom: '16px !important' }}>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item xs={4}>
                    <Box
                      sx={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      component={RouterLink}
                      href={v.trackViewUrl}
                    >
                      <Image
                        src={v.artworkUrl100}
                        alt={v.trackName}
                        width={100}
                        height={100}
                        priority={true}
                        placeholder="empty"
                        style={{
                          borderRadius: 8,
                          margin: 'auto',
                        }}
                      />
                      <Image
                        src="/play-circle-filled-twotone-24-px.svg"
                        alt="play_button"
                        width={36}
                        height={36}
                        priority={true}
                        placeholder="empty"
                        style={{
                          position: 'absolute',
                          top: 0,
                          bottom: 0,
                          margin: 'auto',
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={8}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: (theme) => theme.palette.text.secondary,
                          fontSize: '11px',
                        }}
                        gutterBottom
                      >
                        {v.artistName}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 'bold',
                          letterSpacing: '0.5px',
                          lineHeight: '1.15rem',
                          color: '#334155',
                          fontSize: '14px',
                          mb: 2,
                        }}
                      >
                        {v.trackName}
                      </Typography>

                      <Stack
                        spacing={2}
                        alignItems="center"
                        direction="row"
                        justifyContent="space-between"
                        sx={{ width: '100%' }}
                      >
                        <Chip
                          label={v.primaryGenreName}
                          size="small"
                          variant="filled"
                          sx={{
                            bgcolor: '#10b981',
                            px: 1,
                            color: 'white',
                            fontSize: '10px',
                            fontWeight: 'bold',
                          }}
                        />

                        <Box sx={{ display: 'inline-flex' }}>
                          <Image
                            src="/currency-dollar.svg"
                            alt="currency_dollar"
                            width={16}
                            height={16}
                            priority={true}
                            placeholder="empty"
                          />

                          <Typography
                            variant="body2"
                            sx={{
                              color: '#f5b014',
                              fontSize: '12px',
                              letterSpacing: '0.43px',
                              fontWeight: 'bold',
                              ml: 0.75,
                            }}
                          >
                            {v.trackPrice}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Typography
            sx={{
              textAlign: 'center',
              color: (theme) => theme.palette.text.disabled,
              fontStyle: 'italic',
            }}
          >
            Maybe you must search another song.
          </Typography>
        </Grid>
      )}

      {!data.length ? null : (
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <LoadingButton
            variant="contained"
            color="inherit"
            sx={{
              background: '#e2e8f0',
              color: '#64748b',
              textTransform: 'capitalize',
              fontWeight: 'bold',
              mt: 1,
              borderRadius: 16,
              py: '10px',
              px: '30px',
            }}
            loading={loading}
            onClick={handleLoadMore}
          >
            Load More
          </LoadingButton>
        </Grid>
      )}
    </Grid>
  );
}
