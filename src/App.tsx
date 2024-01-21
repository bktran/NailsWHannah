import { useEffect, useState } from 'react';
import Axios from 'axios';
import ReviewList from './ReviewList';
import { Review } from './interface';

interface Props { }

const App: React.FC<Props> = () => {
	const [name, setName] = useState<string | null>(null)
	const [review, setReview] = useState<string>("")
	const [reviewList, setReviewList] = useState<Review[]>([])
	const [newReview, setNewReview] = useState<string>('')

	// const submitReview = () => {
	// 	Axios.post("http://localhost:3001/api/insert", {
	// 		client_name: name,
	// 		review_text: review
	// 	});

	// 	setReviewList(prev => [
	// 		...prev,
	// 		{ client_name: name, review: review }
	// 	]);

	// };
	const submitReview = async () => {
		Axios.post("http://localhost:3001/api/insert", {
			client_name: name,
			review_text: review
		})
			.then(() => {
				console.log("review submitted")
				return Axios.get("http://localhost:3001/api/get"); // Fetch the updated list
			})
			.then((res) => {
				setReviewList(res.data); // Update the state with the new list
			})
			.catch(error => {
				console.error("Error submitting review:", error);
			});
	};


	const deleteReview = (id: number) => {
		Axios.delete(`http://localhost:3001/api/delete/${id}`)
	}

	const updateReview = async (id: number) => {
		console.log("updating")
		Axios.put(`http://localhost:3001/api/update/${id}`, {
			review_text: newReview
		})
			.then(res => console.log(res))
			.catch(err => console.log(err))
	}

	// const updateReview = async (id: number) => {
	// 	console.log("updating");
	// 	try {
	// 		const res = await Axios.put(`http://localhost:3001/api/update/${id}`, {
	// 			review_text: newReview
	// 		});
	// 		console.log(res);
	// 	} catch (err) {
	// 		console.error("Error in updateReview:", err);
	// 	}
	// };


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
					<button onClick={() => submitReview()}>Submit</button>
				</div>
				<ReviewList
					updateReview={updateReview}
					deleteReview={deleteReview}
					setNewReview={setNewReview}
					reviewList={reviewList}
				/>
			</div>
		</>
	);
};

export default App;
