import { useParams, useNavigate } from "react-router-dom";
import { useInterview } from "../context/InterviewContext";
import { FiArrowLeft } from "react-icons/fi";

import {
  Box,
  Typography,
  Button,
  Paper,
  Stack,
} from "@mui/material";

const statusColors = {
  unread: "inherit",
  practiced: "primary",
  confident: "success",
};

const QuestionDetail = () => {
  const { topicId, questionId } = useParams();
  const navigate = useNavigate();
  const { topics, updateQuestionStatus } = useInterview();

  const topic = topics.find((t) => t.id === topicId);
  const question = topic?.questions.find(
    (q) => q.id === Number(questionId)
  );

  if (!question)
    return <Typography p={4}>Question not found</Typography>;

  return (
    <Box
      sx={{
        maxWidth: "800px",
        mx: "auto",
        py: 6,
        px: 3,
      }}
    >
      <Paper sx={{ p: 4, borderRadius: 3 }} elevation={3}>
        
        <Button
          startIcon={<FiArrowLeft />}
          onClick={() => navigate(-1)}
          sx={{ mb: 3 }}
        >
          Back
        </Button>

        <Typography variant="h5" fontWeight="bold" mb={4}>
          {question.text}
        </Typography>

        <Stack direction="row" spacing={2}>
          {["unread", "practiced", "confident"].map((status) => {
            const isActive = question.status === status;

            return (
              <Button
                key={status}
                variant={isActive ? "contained" : "outlined"}
                color={statusColors[status]}
                onClick={() =>
                  updateQuestionStatus(topicId, question.id, status)
                }
                sx={{ textTransform: "capitalize" }}
              >
                {status}
              </Button>
            );
          })}
        </Stack>
      </Paper>
    </Box>
  );
};

export default QuestionDetail;
