import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Rating, Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const imgUrl =
  'https://c8.alamy.com/comp/R9J6XM/seamless-pattern-with-alphabet-isolated-on-black-background-vector-illustration-easy-to-edit-R9J6XM.jpg';
export default function ExamCard({ exam }) {
  const { examName, duration, totalQuestions, examId, liveDate, deadDate } = exam;

  // handling routes
  const navigate = useNavigate();
  const isExamActive = true; // Date.now() >= liveDate && Date.now() <= deadDate;
  const handleCardClick = () => {
    if (isExamActive) {
      // Navigate to the /exam/examId route when the exam is active
      navigate(`/exam/${examId}`);
    }
  };

  return (
    <Card>
      <CardActionArea onClick={handleCardClick}>
        <CardMedia component="img" height="140" image={imgUrl} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {examName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            MCQ
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
            <Stack direction="row" alignItems="center">
              <Typography variant="h6"> {totalQuestions}ques</Typography>
            </Stack>
            <Typography color="textSecondary" ml={1} sx={{}}>
              {duration}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
