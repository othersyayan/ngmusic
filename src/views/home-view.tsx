'use client';

import { m } from 'framer-motion';
import Image from 'next/image';
// @mui
import { Container, Box, styled } from '@mui/material';
// layouts
import MainLayout from '@/layouts/main-layout';
// sections
import SearchForm from '@/sections/form/search-form';
// components
import { MotionContainer, varFade } from '@/components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled(MotionContainer)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100vh',
  backgroundImage: 'linear-gradient(153deg, #712bda, #a45deb 100%)',
  overflow: 'hidden',
}));

// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <MainLayout>
      <Container maxWidth="xs">
        <RootStyle>
          <Box sx={{ flexGrow: 1 }} />
          <m.div
            variants={varFade().inDown}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              src="/ngmusic_logo.svg"
              alt="ngmusic_logo"
              width={75}
              height={85}
              style={{
                margin: 'auto',
              }}
              priority={true}
              placeholder="empty"
            />
          </m.div>

          <Box sx={{ flexGrow: 1 }} />

          <SearchForm />
        </RootStyle>
      </Container>
    </MainLayout>
  );
}
