import { useEffect, useState } from 'react';
import Axios from 'axios';

interface Props { }
const App: React.FC<Props> = () => {
	const [name, setName] = useState<string | null>()
	const [review, setReview] = useState<string | null>()
	const [reviewList, setReviewList] = useState<any[]>()
	console.log("🚀 ~ reviewList:", reviewList)
	

	const submitReview = () => {
		Axios.post("http://localhost:3001/api/insert", {
			reviewer: name,
			reviewText: review
		})
		.then(() => {
			console.log("success")
		})
	}

	useEffect(() => {
		Axios.get("http://localhost:3001/api/get")
		.then((res) => {
			setReviewList(res.data)
		})
	}, [])

	return (
		<>
			<div className="flex flex-col justify-center items-center">
				<h1 className="">Review for Hannah</h1>
				<div className="h-1/2 w-1/2 flex flex-col items-center gap-2">
					<label>Name</label>
					<input
						type="text"
						name="Name"
						className="h-[20px] border-black border-2"
						onChange={(e) => setName(e.target.value)}
					/>
					<label>Review</label>
					<input
						type="text"
						name="review"
						className="h-[20px] border-black border-2"
						onChange={(e) => setReview(e.target.value)}

					/>
					<button onClick={() =>submitReview()}>Submit</button>
					{reviewList && (
						reviewList.map((review: any, index: number) => {
							return (
								<div key={index} className="flex flex-col items-center gap-2">
									<p>{review.reviewer}</p>
									<p>{review.reviewText}</p>
								</div>
							)
						})
					)}
					
				</div>
			</div>
		</>
	);
};

export default App;
