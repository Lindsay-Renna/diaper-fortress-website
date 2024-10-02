import React from 'react'

function AlertBox({error}) {
  return (
    (
        <div className="text-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )
  )
}

export default AlertBox