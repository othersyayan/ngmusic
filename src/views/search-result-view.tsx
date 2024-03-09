'use client';

import React, { useMemo, useState, useCallback } from 'react';
import Image from 'next/image';
import { useQuery } from 'react-query';
// @mui
import {
  Box,
  Link,
  Stack,
  Container,
  IconButton,
  CircularProgress,
  Typography,
} from '@mui/material';
// layouts
import MainLayout from '@/layouts/main-layout';
// icons
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// utils
import { getSearchTrack } from '@/utils/api';
// hooks
import { useRouter, useSearchParams } from '@/hooks/routes';
import RouterLink from '@/hooks/routes/router-link';
//
import CardItem, { Item } from '@/sections/cards/CardItem';
import DialogSearch from '@/components/dialog-search';

// ----------------------------------------------------------------------

export default function SearchResultView() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const query: {
    keyword: string;
    country?: string;
    entity?: string;
    limit?: number | number[];
    offset?: number;
  } = useMemo(
    () => ({
      keyword: searchParams.get('keyword') ?? '',
      limit: searchParams.get('limit') ? Number(searchParams.get('limit')) : 4,
      offset: searchParams.get('offset')
        ? Number(searchParams.get('offset'))
        : 0,
      country: searchParams.get('country') ?? 'US',
      entity: searchParams.get('entity') ?? 'musicVideo',
    }),
    [searchParams],
  );

  const { isLoading, data } = useQuery<any | Error>(
    [query.keyword, query.country, query.entity, query.limit, query.offset],
    () =>
      getSearchTrack(
        query.keyword ?? '',
        query.country ?? 'US',
        query.entity ?? 'musicVideo',
        Number(query.limit) ?? 5,
        Number(query.offset) ?? 0,
      ),
  );

  const loadMore = () => {
    const newSP = new URLSearchParams({
      keyword: query.keyword,
      country: 'US',
      entity: 'musicVideo',
      limit: searchParams.get('limit')
        ? String(Number(searchParams.get('limit')) + 4)
        : String(4),
      offset: String(0),
    }).toString();

    const href = `search-result?${newSP}`;

    router.push(href);
  };

  return (
    <MainLayout>
      <Container maxWidth="xs">
        <Box
          sx={{
            backgroundImage: 'linear-gradient(100deg, #712bda, #a45deb 100%)',
            boxShadow: '0 0 6px 0 rgba(148, 77, 230, 0.75) !important',
            color: (theme) => theme.palette.primary.contrastText,
            py: 1,
            px: 0.5,
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            sx={{
              width: '100%',
            }}
          >
            <IconButton size="medium" edge="start" color="inherit">
              <MenuIcon />
            </IconButton>
            <Link component={RouterLink} href="/">
              <Image
                src="/ngmusic.svg"
                alt="ngmusic_logo_text"
                width={75}
                height={15}
                style={{
                  margin: 'auto',
                }}
                priority={true}
                placeholder="empty"
              />
            </Link>

            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              onClick={() => setOpenDialog(true)}
            >
              <SearchIcon />
            </IconButton>
          </Stack>
        </Box>
        <Box
          component="main"
          sx={{
            px: 3,
            py: 4,
            border: '1px solid rgba(148, 77, 230, 0.45)',
            bgcolor: '#f8fafc',
            minHeight: '93vh',
          }}
        >
          {isLoading ? (
            <Stack alignItems="center" justifyContent="center">
              <CircularProgress />
            </Stack>
          ) : data ? (
            <>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 4,
                }}
              >
                <Typography variant="body1">Search result for:</Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: (theme) => theme.palette.primary.main,
                  }}
                >
                  {query.keyword !== '' ? query.keyword : '-'}
                </Typography>
              </Box>
              <CardItem
                data={data.data.results as Item[]}
                loading={isLoading}
                handleLoadMore={loadMore}
              />
            </>
          ) : null}
        </Box>
      </Container>

      <DialogSearch
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
      />
    </MainLayout>
  );
}
