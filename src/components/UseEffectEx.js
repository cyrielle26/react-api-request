import { useState, useEffect } from "react";

export const UseEffectEx = () => {
    const [num, setNum] = useState(0);
   
    /* useEffect(() => {
        console.log("activate every mount and update");
    }); */

   /*  useEffect(() => {
        console.log("activate only on mount ");
    }, []);
 */
    useEffect(() => {
        console.log("activate only on specific condition : when 'num' value changes");
    }, [num]);


    return (<div>
        <h3>{num}</h3>
        <button onClick={() => setNum(num + 1)}>+</button>
        <button onClick={() => setNum(num - 1)}>-</button>
     
    </div>);
};


//mount : first rendoring
//update: re rendoring
//unmount : 화면에서 사라질때