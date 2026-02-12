import { createContext, useContext, useState } from "react";
import { interviewData } from "../data/interviewData";

const InterviewContext = createContext();

export const InterviewProvider = ({ children }) => {
  const [topics, setTopics] = useState(interviewData);
  const [activeTopicId, setActiveTopicId] = useState(null);

  const selectTopic = (id) => {
    setActiveTopicId(id);
  };

  const updateQuestionStatus = (topicId, questionId, status) => {
    setTopics((prev) =>
      prev.map((topic) =>
        topic.id === topicId
          ? {
              ...topic,
              questions: topic.questions.map((q) =>
                q.id === questionId ? { ...q, status } : q
              ),
            }
          : topic
      )
    );
  };

  const getProgress = (topicId) => {
  const topic = topics.find((t) => t.id === topicId);

  if (!topic) {
    return { total: 0, practiced: 0, confident: 0 };
  }

  const total = topic.questions.length;

  const practiced = topic.questions.filter(
    (q) => q.status === "practiced"
  ).length;

  const confident = topic.questions.filter(
    (q) => q.status === "confident"
  ).length;

  return { total, practiced, confident };
};



  const activeTopic = topics.find((t) => t.id === activeTopicId);

  return (
    <InterviewContext.Provider
      value={{
        topics,
        activeTopic,
        selectTopic,
        updateQuestionStatus,
        getProgress,
      }}
    >
      {children}
    </InterviewContext.Provider>
  );
};

export const useInterview = () => useContext(InterviewContext);
