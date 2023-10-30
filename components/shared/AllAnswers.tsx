import React from "react";

interface Props {
  questionId: string;
  userId: string;
  totalAnswers: number;
}
const AllAnswers = ({ questionId, userId, totalAnswers }: Props) => {
  return <div>AllAnswers</div>;
};

export default AllAnswers;
