import Question from "@/components/forms/Question";
import { getQuestionById } from "@/lib/actions/question.actions";
import { getUserById } from "@/lib/actions/user.actions";
import { ParamsProps } from "@/types";
import { auth } from "@clerk/nextjs";

const Page = async ({ params }: ParamsProps) => {
  const { userId: clerkId } = auth();

  if (!clerkId) return null;
  console.log(clerkId);
  const mongoUser = await getUserById({ clerkId });
  const result = await getQuestionById({ questionId: params.id });
  console.log(params);
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Edit Question</h1>

      <div className="mt-9">
        <Question
          mongoUserId={mongoUser?._id}
          type="Edit"
          questionDetails={JSON.stringify(result)}
        />
      </div>
    </>
  );
};

export default Page;
