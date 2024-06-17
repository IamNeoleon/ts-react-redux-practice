import React from 'react';

interface ITaskProps {
	title: string;
	completed: boolean
}

const Task: React.FC<ITaskProps> = ({ title, completed }) => {
	return (
		<>
			<li className='task'>
				<h3>{title}</h3>
				<div className={completed ? 'task task-completed' : 'task'}>
					<img src="" alt="" />
				</div>
			</li>
		</>
	);
};

export default Task;