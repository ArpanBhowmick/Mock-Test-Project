interface ExamCardsProps {
  selectedExam: string | null;
  examData: Record<string, string[]>;
}

export default function ExamCards({ selectedExam, examData }: ExamCardsProps) {
  if (!selectedExam) {
    return (
      <p className="text-center text-gray-600 mt-20 text-lg">
        Select an exam category from the menu to view tests.
      </p>
    );
  }

  return (
    <>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        {selectedExam} Exams
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {examData[selectedExam].map((exam) => (
          <div
            key={exam}
            className="bg-white p-5 rounded-xl shadow-md text-center hover:shadow-lg hover:scale-105 transition"
          >
            <h3 className="font-semibold text-gray-700">{exam}</h3>
            <p className="text-sm text-gray-500 mt-1">Start your test</p>
          </div>
        ))}
      </div>
    </>
  );
}
