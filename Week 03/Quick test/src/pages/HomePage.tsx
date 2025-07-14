import UserForm from "../components/UserForm"
import UserList from "../components/UserList"

const HomePage = () => {
  return (
    <div className="home-page flex flex-col items-center gap-3">
      <UserForm/>
      <UserList/>
    </div>
  )
}

export default HomePage;