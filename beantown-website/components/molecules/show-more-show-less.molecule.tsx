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
					? props.content
					: props.content.substring(0, props.limit)}

				<div>
					<button
					
						onClick={toggleBtn}
						className="text-blue-600 cursor-pointer p-4"
					>
						{isReadMoreShown ? 'Show Less' : '...Show More'}
					</button>
				</div>
			</div>
		);
};
export default ReadMoreReadLess
