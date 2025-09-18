'use client';

import React, { useState }	from 'react';
import Label from  '@/app/ui/form-fields/label';
import Select from  '@/app/ui/form-fields/select';
import Input from '@/app/ui/form-fields/input';
import Button from '@/app/ui/form-fields/button';
import { createRooms } from '@/app/lib/action';

const roomTypesOptions = [
	{ value: 'single', label: 'Single' },
	{ value: 'double', label: 'Double' },
	{ value: 'suite', label: 'Suite' },
	{ value: 'family', label: 'Family' },
];
const bedsOptions = [
	{ value: 'king', label: 'King Size' },
	{ value: 'queen', label: 'Queen Size' },
	{ value: 'single', label: 'Single' },
	{ value: 'shared1', label: '1 Shared Bed' },
	{ value: 'shared2', label: '2 Shared Beds' },
];

export default function CreateRooms() {
	const [selectedRoomType, setSelectedRoomType] = useState(roomTypesOptions[0].value);
	const [selectedBedType, setSelectedBedType] = useState(bedsOptions[0].value);

	const handleChangeRoomTypes = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedRoomType(event.target.value);
	}
	const handleChangeBedTypes = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedBedType(event.target.value);
	}

	return (
		<>
			<form action={createRooms}>
				<div className="bg-gray-50 p-6 rounded-lg shadow-md w-3/4 flex flex-wrap">
					<div className="w-1/2 mb-5 pr-4">
						<Label htmlFor="roomType">Select Room Type:</Label>
						<Select
							id="roomType"
							name="roomType"
							label="Select Room Type"
							onChange={handleChangeRoomTypes}
							value={selectedRoomType}
							required
						>
							{roomTypesOptions.map((roomtype) => (
								<option key={roomtype.value} value={roomtype.value}>
									{roomtype.label}
								</option>
							))}
						</Select>
					</div>
					<div className='w-1/2 mb-5 pr-4'>
						<Label htmlFor="roomName">Enter Room Name:</Label>
						<Input 
							type="text" 
							id="roomName" 
							name="roomName"
							placeholder="Room Name" 
							required />
					</div>
					<div className='w-1/2 mb-5 pr-4'>
						<Label htmlFor="noOfBeds">Select Bed Type:</Label>
						<Select
								id="noOfBeds"
								name="noOfBeds"
								label="Select Bed Type"
								onChange={handleChangeBedTypes}
								value={selectedBedType}
								required
							>
								{bedsOptions.map((bed) => (
									<option key={bed.value} value={bed.value}>
										{bed.label}
									</option>
								))}
						</Select>
					</div>
					<div className='w-1/2 mb-5 pr-4'></div>
					<div className='w-1/2 mb-5 pr-4'>
						<Button 
							type="submit"
							id="createRoom"
							label="Create Room">
							Create Room
						</Button>
					</div>
				</div>
			</form>
		</>
	);
}