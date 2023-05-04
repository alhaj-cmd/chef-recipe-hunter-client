
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section>
      <div className='container d-flex  align-items-center justify-content-center px-5 mx-auto my-8'>
        <div className=' text-center'>
          <h2 className='mb-4 bold  text-danger'>
            <span className='sr-only'>Error</span>
            {status || 404}
          </h2>
          <h2 className='text-danger mb-8'>
            {error?.message}
          </h2>
          <Link to='/' className='text-decoration-none bg-primary p-2 rounded text-white ' >
            Click to Back
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage;