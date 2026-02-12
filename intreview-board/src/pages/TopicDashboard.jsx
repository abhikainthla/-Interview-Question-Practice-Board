import { useNavigate } from "react-router-dom";
import { useInterview } from "../context/InterviewContext";
import ProgressSummary from "../components/ProgressSummary";

import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CardActionArea,
} from "@mui/material";

const TopicsDashboard = () => {
  const { topics, selectTopic } = useInterview();
  const navigate = useNavigate();

  const handleClick = (topic) => {
    selectTopic(topic.id);
    navigate(`/topic/${topic.id}`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      
      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold">
          Interview Topics
        </Typography>
        <Typography variant="body1" color="text.secondary" mt={1}>
          Track your preparation progress across different subjects
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {topics.map((topic) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={topic.id}
            sx={{ display: "flex", justifyContent: "center", alignItems:"center" }}  
          >
            <Card
              elevation={2}
              sx={{
                borderRadius: 3,
                width: "350px",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardActionArea
                onClick={() => handleClick(topic)}
                sx={{ flexGrow: 1, display: "flex", alignItems: "stretch" }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                    >
                      {topic.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      mb={2}
                    >
                      {topic.questions.length} Questions
                    </Typography>
                  </Box>

                  <Box mt={2}>
                    <ProgressSummary topicId={topic.id} />
                  </Box>

                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TopicsDashboard;
