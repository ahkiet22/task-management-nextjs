import PrivateRoute from "@/components/PrivateRoute";

export default function Profile() {
  return (
    <PrivateRoute>
      <h1>Page Profile</h1>
    </PrivateRoute>
  )
}