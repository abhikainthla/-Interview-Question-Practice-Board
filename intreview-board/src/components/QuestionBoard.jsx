import { useInterview } from "../context/InterviewContext";
import QuestionCard from "./QuestionCard";

export default function QuestionBoard() {
  const { topics, selectedTopicId } = useInterview();
  const topic = topics.find((t) => t.id === selectedTopicId);

  return (
    <div className="space-y-4">
      {topic.questions.map((q) => (
        <QuestionCard key={q.id} question={q} topicId={topic.id} />
      ))}
    </div>
  );
}
