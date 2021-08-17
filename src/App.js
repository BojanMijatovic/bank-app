function App() {
  return (
    <div className='container  mx-auto text-center mt-11 bg-yellow-500'>
      <div className='grid grid-cols-3 gap-4 text-white text-xl'>
        <div>Banka APP</div>
        <div>Name: Bojan Mijatovic</div>
        <div>Login</div>
      </div>
      <div className='grid grid-cols-4 gap-10 pt-9 text-center text-is-justify-content-center text-2xl text-white bg-gray-700'>
        <div>Home</div>
        <div>Products</div>
        <div>Transactions</div>
        <div>News</div>
      </div>
      <div className='flex flex-row px-6 mt-5 ml-14'>
        <div className='text-2xl text-gray-900 bg-yellow-50 mx-6 m-4 text-center p-2'>
          <p>account</p>
        </div>
        <div className='text-2xl text-gray-900 bg-yellow-50 mx-6 m-4 text-center p-2'>
          <p>cards</p>
        </div>
        <div className='text-2xl text-gray-900 bg-yellow-50 mx-6 m-4 text-center p-2'>
          <p>loans</p>
        </div>
      </div>
    </div>
  );
}

export default App;
