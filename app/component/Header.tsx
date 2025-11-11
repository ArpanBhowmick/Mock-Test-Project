"use client";
import { useState } from "react";
import { Menu, Home, FileText, Award, User } from "lucide-react";

const examData = {
  SSC: ["MTS", "CHSL", "CGL", "GD Constable"],
  Defence: ["NDA", "CDS", "AFCAT", "CAPF"],
  Railway: ["Group D", "ALP", "NTPC", "JE"],
  Banking: ["SBI PO", "IBPS Clerk", "RBI Assistant"],
};

type ExamCategory = keyof typeof examData;

export default function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState<ExamCategory | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 relative overflow-hidden">
      {/* Top bar */}
      <header className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3 shadow-md">
        <button
          onClick={() => setDrawerOpen(true)}
          className="p-2 rounded-md hover:bg-indigo-500"
        >
          <Menu size={22} />
        </button>
        <h1 className="text-lg font-semibold">Mock Test App</h1>
        <div className="w-6" /> {/* spacer */}
      </header>

      {/* Drawer overlay */}
      {drawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10"
        ></div>
      )}

      {/* Drawer menu */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white z-20 w-64 transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 shadow-lg`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-bold text-gray-700 text-lg">Exams</h2>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-md"
          >
            ✕
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {Object.keys(examData).map((exam) => (
            <button
              key={exam}
              onClick={() => {
                setSelectedExam(exam as ExamCategory);
                setDrawerOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                selectedExam === exam
                  ? "bg-indigo-100 text-indigo-700 font-medium"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {exam}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 mt-2 mb-16">
        {!selectedExam ? (
          <p className="text-center text-gray-600 mt-20 text-lg">
            Select an exam category from the menu to view tests.
          </p>
        ) : (
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
        )}
      </main>

      {/* Bottom tab bar */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md flex justify-around py-2 z-30">
        <button className="flex flex-col items-center text-indigo-600">
          <Home size={20} />
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-500 hover:text-indigo-600">
          <FileText size={20} />
          <span className="text-xs">Exams</span>
        </button>
        <button className="flex flex-col items-center text-gray-500 hover:text-indigo-600">
          <Award size={20} />
          <span className="text-xs">Results</span>
        </button>
        <button className="flex flex-col items-center text-gray-500 hover:text-indigo-600">
          <User size={20} />
          <span className="text-xs">Profile</span>
        </button>
      </nav>
    </div>
  );
}





