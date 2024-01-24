import React from 'react'

const withLoading = Page => {

    const loadingScreen = () => <div className='align-items-center justify-content-center'>Loading...</div>

  return (
    <div>
        {setTimeout(loadingScreen, 2000)}
        <Page />
    </div>
  )
}

export default withLoading