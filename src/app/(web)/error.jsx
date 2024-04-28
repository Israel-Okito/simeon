'use client';

export default function Error({ error, reset}) {
  return (
    <div className='container mx-auto'>
      <h2 className='font-heading text-red-800 mb-10'>Quelque chose n&apos;a pas marcher!</h2>

      <button onClick={() => reset()} className='btn-primary'>
        Essaye encore
      </button>
    </div>
  );
}
