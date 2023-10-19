import { selectUser, deleteUser } from "@/models/userModel";

export default async function handler(req, res) {
	if (req.method === "GET") {
		const user_id = req.query.id;

		selectUser(user_id)
			.then((result) => {
				return res.json({ message: "get user success", data: result.rows });
			})
			.catch((error) => {
				return res.json({ message: "error", error: error });
			});
	}

	if (req.method === "DELETE") {
		const user_id = req.query.id;

		const { rowCount } = await selectUser(user_id);
		if (!rowCount) {
			return res.json({ message: "error", error: "User id is not found" });
		}

		deleteUser(user_id)
			.then(() => {
				return res.json({ message: `delete user ${user_id} success` });
			})
			.catch((error) => {
				return res.json({ message: "error", error });
			});
	}
}
