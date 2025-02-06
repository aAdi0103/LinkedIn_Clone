import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import Sidebar from "../components/Sidebar";
import { UserPlus } from "lucide-react";
import FriendRequest from "../components/FriendRequest";

const NetworkPage = () => {
	const { data: user } = useQuery({ queryKey: ["authUser"] });

	const { data: connectionRequests, isLoading } = useQuery({
		queryKey: ["connectionRequests"],
		queryFn: async () => {
			const res = await axiosInstance.get("/connectionRequest/requests");
			return res.data; // Extract and return only the relevant data
		},
	});

	

	return (
		<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
			{/* Sidebar */}
			<div className="col-span-1 lg:col-span-1">
				<Sidebar user={user} />
			</div>

			{/* Main Content */}
			<div className="col-span-1 lg:col-span-3">
				<div className="bg-white rounded-lg shadow p-6 mb-6">
					<h1 className="text-2xl font-bold mb-6">My Network</h1>

					{/* Loading State */}
					{isLoading ? (
						<p className="text-gray-600 text-center">Loading connection requests...</p>
					) : connectionRequests && connectionRequests.length > 0 ? (
						// Display Connection Requests
						<div className="mb-8">
							<h2 className="text-xl font-semibold mb-2">Connection Requests</h2>
							<div className="space-y-4">
								{connectionRequests.map((request) => (
									<FriendRequest key={request._id} request={request} />
								))}
							</div>
						</div>
					) : (
						// No Connection Requests UI
						<div className="bg-white rounded-lg shadow p-6 text-center mb-6">
							<UserPlus size={48} className="mx-auto text-gray-400 mb-4" />
							<h3 className="text-xl font-semibold mb-2">No Connection Requests</h3>
							<p className="text-gray-600">
								You don&apos;t have any pending connection requests at the moment.
							</p>
							<p className="text-gray-600 mt-2">
								Explore suggested connections below to expand your network!
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default NetworkPage;
