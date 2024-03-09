'use client';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { m } from 'framer-motion';
// @mui
import { Stack } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
// hooks
import { useRouter, usePathname, useSearchParams } from '@/hooks/routes';
// components
import { MotionContainer, varFade } from '@/components/animate';
import FormProvider from '@/components/hook-form/form-provider';
import RHFTextField from '@/components/hook-form/rhf-textfield';

// ----------------------------------------------------------------------

type Props = {
  handleAfter?: () => void;
};

export default function SearchForm({ handleAfter }: Props) {
  const router = useRouter();

  const pathname = usePathname();

  const searchParams = useSearchParams();

  const keyword = searchParams.get('keyword');

  const LoginSchema = Yup.object().shape({
    query: Yup.string().required('You must fill the artists / album / title'),
  });

  const defaultValues = {
    query: keyword ?? '',
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

      const searchParams = new URLSearchParams({
        keyword: formValue.query,
        country: 'US',
        entity: 'musicVideo',
        limit: String(4),
        offset: String(0),
      }).toString();

      const href = `search-result?${searchParams}`;

      router.push(href);
    } catch (error) {
      console.error(error);
    } finally {
      reset();

      if (handleAfter) {
        handleAfter();
      }
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
              bgcolor:
                pathname !== '/search-result'
                  ? 'rgba(255,255,255,0.35)'
                  : 'linear-gradient(153deg, #712bda, #a45deb 100%)',
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
