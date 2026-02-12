import { useInterview } from "../context/InterviewContext";

export default function ProgressSummary({ topicId }) {
  const { getProgress } = useInterview();

  if (!topicId) return null;

  const { total, practiced, confident } = getProgress(topicId);

  return (
    <div className="mt-3 bg-gray-100 p-2 rounded text-sm">
      <p>Total: {total}</p>
      <p className="text-blue-600">Practiced: {practiced}</p>
      <p className="text-green-600">Confident: {confident}</p>
    </div>
  );
}
