import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack, Container, Tooltip } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
// icons
import { Icon } from '@iconify/react';
import edit2Outline from '@iconify/icons-eva/edit-2-outline';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
// utils
import { fCurrency } from '../../../utils/formatNumber';
//
import Label from '../../Label';
// import ColorPreview from '../../ColorPreview';

// ------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={30} height={30} color="gray" />;

const ParkinglotImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

const Item = styled('div')(({ bgcl }) => ({
  backgroundColor: bgcl
}));

export default function ShopParkinglotCard({ parkinglot }) {
  const { name, cover, price, colors, status, priceScale, address, code } = parkinglot;

  return (
    <Card>
      <Box sx={{ pt: '50%', position: 'relative' }}>
        {status && (
          <Label
            varient="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase'
            }}
          >
            {status}
          </Label>
        )}
        <ParkinglotImgStyle alt={name} src={cover} />
      </Box>

      {/* <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle1" noWrap>
            {name}
          </Typography>

          <Typography variant="caption" noWrap>
            {address}
          </Typography>
        </Link>

        <Container maxWidth="sm">
          {getIcon(edit2Outline)}&nbsp;
          {getIcon(trash2Outline)}
        </Container>
      </Stack> */}
      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle1" noWrap>
            {name}
          </Typography>
          <Typography variant="caption" noWrap>
            {address}
          </Typography>
        </Link>

        <Box sx={{ textAlign: 'right' }}>
          {getIcon(edit2Outline)}&nbsp;
          {getIcon(trash2Outline)}
        </Box>
      </Stack>
    </Card>
  );
}
