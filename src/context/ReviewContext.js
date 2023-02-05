import { createContext, useEffect, useState } from 'react'

// import {v4 as uuidv4} from 'uuid'

// import reviewData from '../components/data/reviewData'

const ReviewContext = createContext()

export const ReviewProvider = ({ children }) => {
  // const [review, setReview] = useState(reviewData)//data comming from default preview datata
  const [review, setReview] = useState([]) // data from mock server
  const [isLoading, setIsLoadding] = useState(true)
  useEffect(() => {
    fetch('/review')
      .then((res) => res.json())
      .then((data) => {
        setReview(data)
        setIsLoadding(false)
      })
  }, [])
  const addReview = async (newReview) => {
    // newReview.id = uuidv4()// removed this to due to our mock server
    const res = await fetch('/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview),
    })
  const data = await res.json()
    setReview([data, ...review])
  }

  const deleteReview = async (id) => {
    if (
      window.confirm('Are you sure you want to delete this review from the review list?')
     
      
    ) { 
      await fetch(`/review/${id}`, {
        method : 'DELETE'
      })

      setReview(review.filter((item) => item.id !== id))
    }
  }

  return (
    <ReviewContext.Provider
      value={{
        review,
        deleteReview,
        addReview,
        isLoading,
      }}
    >
      {children}
    </ReviewContext.Provider>
  )
}

export default ReviewContext
