import { useParams, useNavigate } from "react-router-dom";
import { useInterview } from "../context/InterviewContext";
import QuestionCard from "../components/QuestionCard";
import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import { FiArrowLeft } from "react-icons/fi";

import {
  Box,
  Typography,
  TextField,
  Paper,
  Divider,
  Button,
} from "@mui/material";

const TopicQuestions = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const { topics } = useInterview();

  const [searchTerm, setSearchTerm] = useState("");

  const topic = topics.find((t) => t.id === topicId);

  if (!topic) return <Typography p={4}>Topic not found</Typography>;

  const filteredQuestions = topic.questions.filter((q) =>
    (q.text || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const totalQuestions = topic.questions.length;

  const completedQuestions = topic.questions.filter(
    (q) => q.status === "confident"
  ).length;

  return (
    <Box
      sx={{
        maxWidth: "900px",
        mx: "auto",
        py: 6,
        px: 3,
      }}
    >

      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
        }}
      >
         <Button
          startIcon={<FiArrowLeft />}
          onClick={() => navigate(-1)}
          sx={{ mb: 2 }}
        >
          Back
        </Button>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
        >
          {topic.name}
        </Typography>

        <ProgressBar
          completed={completedQuestions}
          total={totalQuestions}
        />

        <Divider sx={{ my: 3 }} />

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 3 }}
        />

        <Box display="flex" flexDirection="column" gap={2}>
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((q) => (
              <QuestionCard
                key={q.id}
                question={q}
                onClick={() =>
                  navigate(`/topic/${topicId}/question/${q.id}`)
                }
              />
            ))
          ) : (
            <Typography color="text.secondary">
              No questions found
            </Typography>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default TopicQuestions;
