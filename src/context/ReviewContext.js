import {createContext, useEffect, useState} from 'react'

import {v4 as uuidv4} from 'uuid'

// import reviewData from '../components/data/reviewData'


const ReviewContext = createContext()

export const ReviewProvider = ({children}) => {
  
  // const [review, setReview] = useState(reviewData)//data comming from default preview datata
  const [review, setReview] = useState([])// data from mock server
   const [isLoading, setIsLoadding] = useState(true)
  useEffect(() => {
      fetch('http://localhost:5000/review')
      .then(res => res.json())
      .then(data => {
        setReview(data)
        setIsLoadding(false)
      })
    })
const addReview = (newReview) => {
    newReview.id = uuidv4()
    setReview([newReview, ...review])
  }

const deleteReview = (id) => {
    if(window.confirm('Are you sure you want to delete this review from the review list?')){
    setReview(review.filter((item) => item.id !== id))
    }
  }

    return <ReviewContext.Provider value={{
        review,
        deleteReview,
        addReview,
        isLoading
    }}>
            {children}
    </ReviewContext.Provider>
}


export default ReviewContext