import DashboardNav from '../components/dashboard_nav'
import DashboardAside from './dashboard_aside';
import DashboardMain from './dashboard_main';


const Dashboard = () => {
    return ( 
        <>
      <div>
          <DashboardNav />
      </div>
      <div className="flex">
             <DashboardAside />
            <DashboardMain/>
      </div>
       
       
       
       
       </>
       
     );
}
 
export default Dashboard;