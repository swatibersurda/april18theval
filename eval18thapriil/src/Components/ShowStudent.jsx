import { useEffect,useState } from "react";
import axios from "axios";
export const ShowStudents = () => {
    const [databr,setdata]=useState([]);
     console.log("databr",databr)


   useEffect(()=>{
       axios.get("http://localhost:8080/students").then((res)=>{
           console.log(res.data);
           setdata(res.data)
        //    console.log(data);
       }).catch((err)=>{
           console.log(err)
       })
   },[])
        
const handleValue=(e)=>{
    console.log(e);

    console.log(e.target.value);
    if(e.target.value==="asc")
    {
        const x=databr.sort((a,b)=>{
            if(a.age>b.age)
            {
                return 1;
            }
            else{
                return -1;
            }
        })
    }

   else if(e.target.value==="desc")
    {
        const x=databr.sort((a,b)=>{
            if(b.age>a.age)
            {
                return 1;
            }
            else{
                return -1;
            }
        })
    }

 setdata([...databr]);

}



  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select onChange={handleValue}
            // select dropdown needs both value and onChange
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort">sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          




           {databr.map((ele)=>(

           <tr className="row">
            <td className="first_name">{ele.first_name}</td>
            <td className="last_name">{ele.last_name}</td>
            <td className="email">{ele.email}</td>
            <td className="gender">{ele.gender}</td>
            <td className="age">{ele.age}</td>
            <td className="tenth_score">{ele.tenth_score}</td>
            <td className="twelth_score">{ele.twelth_score}</td>
            <td className="preferred_branch">{ele.preferred_branch}</td>
            </tr>

           ))
           }
          {/* <tr className="row">
            <td className="first_name"></td>
            <td className="last_name"></td>
            <td className="email"></td>
            <td className="gender"></td>
            <td className="age"></td>
            <td className="tenth_score"></td>
            <td className="twelth_score"></td>
            <td className="preferred_branch"></td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};
