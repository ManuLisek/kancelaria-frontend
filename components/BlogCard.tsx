import * as React from 'react';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const StyledTypography = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  id: number;
}

const BlogCard = ({
  title, description, image, id,
}:BlogCardProps): JSX.Element => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image={image}
      alt={title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <StyledTypography variant="body2" color="text.secondary">
        {description}
      </StyledTypography>
    </CardContent>
    <Link href={`/article/${id}`}>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Link>
  </Card>
);

export default BlogCard;
