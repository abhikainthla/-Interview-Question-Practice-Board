import StatusBadge from "./StatusBadge";
import Button from "@mui/material/Button";

const QuestionCard = ({ question, onClick }) => {
  return (
    <div
      className="group border border-gray-200 rounded-xl p-5 bg-white cursor-pointer
                 transition-all duration-200 hover:shadow-lg hover:border-gray-300"
    >
      <div className="flex justify-between items-center mb-4">
        <StatusBadge status={question.status} />

        <Button
          variant="contained"
          onClick={onClick}
          sx={{
            textTransform: "none",
            
          }}
        >
          Change Status
        </Button>
      </div>


      <p className="text-gray-800 text-sm leading-relaxed group-hover:text-gray-900">
        {question.text}
      </p>
    </div>
  );
};

export default QuestionCard;
