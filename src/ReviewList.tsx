import React from 'react'
import { Review } from './interface'
import Axios from 'axios'

interface Props {
  reviewList: Review[]
  deleteReview: (id: number) => void
  updateReview: (id: number) => void
  setNewReview: React.Dispatch<React.SetStateAction<string>>
}

const ReviewList: React.FC<Props> = ({
  reviewList,
  deleteReview,
  updateReview,
  setNewReview,
}: Props) => {

  return (
    <div className='flex flex-wrap gap-4 justify-center'>
      {reviewList.map((review: any, index: number) => {
        return (
          <div
            key={index}
            className='flex flex-col rounded-md border-2 border-black gap-4'
          >
            <p>Reviewer: {review.client_name}</p>
            <p>Review: {review.review}</p>
            <input
              type="text"
              name="updateReview"
              className="h-[50px] border-gray border-2"
              onChange={(e) => setNewReview(e.target.value)}
            />
            <button className="border-2 bg-slate-500 text-white"
              onClick={() => updateReview(review.id)}
            >Update Review
            </button>

            <button className='border-2 bg-red-600 font-bold'
              onClick={() => deleteReview(review.id)}
            >
              Delete
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default ReviewList