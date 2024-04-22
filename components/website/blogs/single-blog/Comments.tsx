import CommentCard from "./CommentCard";
import { CommentCardProps } from "@/app/types/types";
import React from "react";

const Comments = ({ comments }: { comments: CommentCardProps[] | any }) => {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-medium text-slate-800 my-10">
        {comments.length} نظر
      </h2>
      <div className="space-y-6">
        {comments.map((comment:CommentCardProps) => (
          <CommentCard key={comment.id} {...comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
