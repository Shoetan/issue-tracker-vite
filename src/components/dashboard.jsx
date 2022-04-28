import DashboardNav from '../components/dashboard_nav'
import DashboardAside from './dashboard_aside';


const Dashboard = () => {
    return ( 
        <>
      <div>
          <DashboardNav />
      </div>
      <div className="flex">
             <DashboardAside />
      </div>
       
       
       
       
       </>
       
     );
}
 
export default Dashboard;