'use client';

import * as React from 'react';
import Image from 'next/image';
// @mui
import {
  AppBar,
  Box,
  Link,
  Stack,
  Toolbar,
  Container,
  Typography,
  IconButton,
} from '@mui/material';
// icons
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
//
import RouterLink from '@/hooks/routes/router-link';

// ----------------------------------------------------------------------

export default function DrawerAppBar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        sx={{
          backgroundImage: 'linear-gradient(100deg, #712bda, #a45deb 100%)',
          boxShadow: '0 0 6px 0 rgba(148, 77, 230, 0.75) !important',
          maxWidth: 400,
          mx: 'auto',
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <Toolbar>
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
                width={80}
                height={20}
                style={{
                  margin: 'auto',
                }}
                priority={true}
                placeholder="empty"
              />
            </Link>

            <IconButton size="medium" edge="start" color="inherit">
              <SearchIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xs">
        <Box
          component="main"
          sx={{
            p: 3,
            border: '1px solid rgba(148, 77, 230, 0.45)',
            bgcolor: '#f8fafc',
          }}
        >
          <Toolbar />
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
            quibusdam, aliquam dolore excepturi quae. Distinctio enim at
            eligendi perferendis in cum quibusdam sed quae, accusantium et
            aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus
            quia corrupti alias distinctio nostrum. Minima ex dolor modi
            inventore sapiente necessitatibus aliquam fuga et. Sed numquam
            quibusdam at officia sapiente porro maxime corrupti perspiciatis
            asperiores, exercitationem eius nostrum consequuntur iure aliquam
            itaque, assumenda et! Quibusdam temporibus beatae doloremque
            voluptatum doloribus soluta accusamus porro reprehenderit eos
            inventore facere, fugit, molestiae ab officiis illo voluptates
            recusandae. Vel dolor nobis eius, ratione atque soluta, aliquam
            fugit qui iste architecto perspiciatis. Nobis, voluptatem! Cumque,
            eligendi unde aliquid minus quis sit debitis obcaecati error,
            delectus quo eius exercitationem tempore. Delectus sapiente,
            provident corporis dolorum quibusdam aut beatae repellendus est
            labore quisquam praesentium repudiandae non vel laboriosam quo ab
            perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt
            commodi nihil corrupti cum non fugiat praesentium doloremque
            architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore
            molestiae dicta blanditiis est expedita eius debitis cupiditate
            porro sed aspernatur quidem, repellat nihil quasi praesentium quia
            eos, quibusdam provident. Incidunt tempore vel placeat voluptate
            iure labore, repellendus beatae quia unde est aliquid dolor
            molestias libero. Reiciendis similique exercitationem consequatur,
            nobis placeat illo laudantium! Enim perferendis nulla soluta magni
            error, provident repellat similique cupiditate ipsam, et tempore
            cumque quod! Qui, iure suscipit tempora unde rerum autem saepe nisi
            vel cupiditate iusto. Illum, corrupti? Fugiat quidem accusantium
            nulla. Aliquid inventore commodi reprehenderit rerum reiciendis!
            Quidem alias repudiandae eaque eveniet cumque nihil aliquam in
            expedita, impedit quas ipsum nesciunt ipsa ullam consequuntur
            dignissimos numquam at nisi porro a, quaerat rem repellendus.
            Voluptates perspiciatis, in pariatur impedit, nam facilis libero
            dolorem dolores sunt inventore perferendis, aut sapiente modi
            nesciunt.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
