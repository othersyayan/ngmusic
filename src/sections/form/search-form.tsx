'use client';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { m } from 'framer-motion';
// @mui
import { Stack } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
// hooks
import { useRouter } from '@/hooks/routes';
// utils
// import { getSearchTrack } from '@/utils/api';
// components
import { MotionContainer, varFade } from '@/components/animate';
import FormProvider from '@/components/hook-form/form-provider';
import RHFTextField from '@/components/hook-form/rhf-textfield';

// ----------------------------------------------------------------------

export default function SearchForm() {
  const router = useRouter();

  const LoginSchema = Yup.object().shape({
    query: Yup.string().required('You must fill the artists / album / title'),
  });

  const defaultValues = {
    query: '',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (formValue) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      // const response = getSearchTrack(
      //   formValue.query,
      //   'US',
      //   'musicVideo',
      //   5,
      //   0,
      // );

      const searchParams = new URLSearchParams({
        keyword: formValue.query,
        country: 'US',
        entity: 'musicVideo',
        limit: String(5),
        offset: String(0),
      }).toString();

      const href = `search-result?${searchParams}`;

      router.replace(href);
    } catch (error) {
      console.error(error);
      reset();
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={3} sx={{ p: 3 }} component={MotionContainer}>
        <m.div variants={varFade().inUp}>
          <RHFTextField
            name="query"
            placeholder="Artis / Album / Title"
            size="small"
            fullWidth
            InputProps={{
              sx: {
                backgroundColor: 'white',
                borderRadius: (theme) => theme.spacing(2.5),
                '& ::placeholder': {
                  textAlign: 'center',
                },
              },
            }}
            sx={{
              '& .MuiFormHelperText-root': {
                color: '#fef08a !important',
              },
            }}
          />
        </m.div>

        <m.div variants={varFade().inUp}>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            sx={{
              borderRadius: (theme) => theme.spacing(2.5),
              bgcolor: 'rgba(255,255,255,0.35)',
              textTransform: 'capitalize',
              fontWeight: 'bold',
              fontSize: (theme) => theme.spacing(2),
              border: 'none',
              boxShadow: 'none',
            }}
          >
            Search
          </LoadingButton>
        </m.div>
      </Stack>
    </FormProvider>
  );
}
