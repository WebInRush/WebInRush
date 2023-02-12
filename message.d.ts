export type Message = {
  id: string;
  message: string;
  createdAt: FirebaseApp.firestore.Timestamp;
  username: string;
  profilePic: string;
  email: string;
};
