'use client';

import { useRouter } from 'next/navigation';




const Table = ({ bookingDetails, setRoomId, toggleRatingModal }) => {
  console.log(bookingDetails)
  const router = useRouter();

  return (
    <div className='overflow-x-auto max-w-[340px] rounded-lg mx-auto md:max-w-full shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th className='px-6 py-3'>Nom de la chambre</th>
            <th className='px-6 py-3'>Prix unitaire</th>
            <th className='px-6 py-3'>Prix</th>
            <th className='px-6 py-3'>Rabais</th>
            <th className='px-6 py-3'>Nombre de jours réservés</th>
            <th className='px-6 py-3'>Jours restants</th>
            <th className='px-6 py-3'></th>
          </tr>
        </thead>
        <tbody>
          {bookingDetails.map(booking => (
            <tr
              key={booking._id}
              className='bg-white border-b hover:bg-gray-50'
            >
              <th
                onClick={() =>
                  router.push(`/rooms/${booking.hotelRoom.slug.current}`)
                }
                className='px-6 underline text-blue-600 cursor-pointer py-4 font-medium whitespace-nowrap'
              >
                {booking.hotelRoom.name}
              </th>
              <td className='px-6 py-4'>{booking.hotelRoom.price}</td>
              <td className='px-6 py-4'>{booking.totalPrice}</td>
              <td className='px-6 py-4'>{booking.discount}</td>
              <td className='px-6 py-4'>{booking.numberOfDays}</td>
              <td className='px-6 py-4'>0</td>
              <td className='px-6 py-4'>
                <button
                  onClick={() => {
                    setRoomId(booking.hotelRoom._id);
                    toggleRatingModal()
                  }}
                  className='font-medium text-blue-600 hover:underline'
                >
                  Taux
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
