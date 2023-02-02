import React, {  useState } from 'react';


interface Props {
	content: any;
    limit:number;
  
}
const ReadMoreReadLess: React.FC<Props> = (props) => {
    const[isReadMoreShown ,setReadMoreShown] = useState(false);

    const toggleBtn =()=>{
        setReadMoreShown(previousState => !previousState)
    }
    return (
        <div>

            { isReadMoreShown ? props.content: String(props.content).substring(0, props.limit)}
           
            <button onClick={toggleBtn}>Read More...</button>
        </div>
    )
};
export default ReadMoreReadLess
