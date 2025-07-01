import RouteGroupNav from '@/Components/RouteGroupNav/RouterGroupNav';
import PageLayout from '../../../Components/PageLayout/PageLayout';

const Login = () => {
    return (
      <PageLayout>
        <h1>Examples of a Route group - LOGIN</h1>
        <p>All routes are stored under a folder (auth) - THE BRACKETS tell NextJs to ignore this folder as a pathName and use the sub folders as the route.</p>
        <RouteGroupNav />
      </PageLayout>
    )
}

export default Login;