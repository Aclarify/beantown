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
				{isReadMoreShown
					? String(props.content)
					: String(props.content).substring(0, props.limit)}

				<button onClick={toggleBtn}>
					<a className='text-blue-600'>{isReadMoreShown ? 'Show Less' :'...Show More'}</a>
				</button>
			</div>
		);
};
export default ReadMoreReadLess
